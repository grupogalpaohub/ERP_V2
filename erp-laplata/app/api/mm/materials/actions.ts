'use server'

import { supabase } from '@/lib/supabase/server'
import { FIXED_TENANT_ID as TENANT_ID } from '@/lib/tenant'
import { getCurrentUser } from '@/lib/auth/guard'
import { logChange } from '@/lib/audit/logger'

export async function createMaterial(formData: FormData) {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Usuário não autenticado')
  }

  const nameCommercial = formData.get('name_commercial') as string
  const description = formData.get('description') as string
  const materialTypeCode = formData.get('material_type_code') as string
  const materialClassCode = formData.get('material_class_code') as string
  const uom = formData.get('uom') as string
  const leadTimeDays = parseInt(formData.get('lead_time_days') as string) || 0
  const vendorId = formData.get('vendor_id') ? parseInt(formData.get('vendor_id') as string) : null
  const purchaseLink = formData.get('purchase_link') as string

  if (!nameCommercial || !materialTypeCode || !materialClassCode || !uom) {
    throw new Error('Campos obrigatórios não preenchidos')
  }

  const supabaseServer = supabase()
  
  // Gerar PN usando função do banco (guardrail)
  const { data: pnData, error: pnError } = await supabaseServer
    .rpc('mm_next_pn', {
      p_tenant_id: TENANT_ID,
      p_material_type_code: materialTypeCode
    })

  if (pnError || !pnData) {
    throw new Error('Erro ao gerar PN')
  }

  const pn = pnData as string

  // Inserir material
  const { data, error } = await supabaseServer
    .from('mm_material')
    .insert({
      tenant_id: TENANT_ID,
      pn,
      name_commercial: nameCommercial,
      description: description || null,
      material_type_code: materialTypeCode,
      material_class_code: materialClassCode,
      uom,
      lead_time_days: leadTimeDays,
      is_active: true,
      vendor_id: vendorId,
      purchase_link: purchaseLink || null
    })
    .select()
    .single()

  if (error) {
    throw new Error('Erro ao criar material')
  }

  // Log de auditoria
  await logChange({
    object_type: 'mm_material',
    object_id: pn,
    column_name: 'created',
    old_value: null,
    new_value: JSON.stringify(data),
    user_id: user.id
  })

  return data
}

export async function updateMaterial(pn: string, formData: FormData) {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Usuário não autenticado')
  }

  const nameCommercial = formData.get('name_commercial') as string
  const description = formData.get('description') as string
  const uom = formData.get('uom') as string
  const leadTimeDays = parseInt(formData.get('lead_time_days') as string) || 0
  const purchaseLink = formData.get('purchase_link') as string

  if (!nameCommercial || !uom) {
    throw new Error('Campos obrigatórios não preenchidos')
  }

  const supabaseServer = supabase()
  
  // Buscar dados atuais para auditoria
  const { data: currentData } = await supabaseServer
    .from('mm_material')
    .select('*')
    .eq('tenant_id', TENANT_ID)
    .eq('pn', pn)
    .single()

  // Atualizar material
  const { data, error } = await supabaseServer
    .from('mm_material')
    .update({
      name_commercial: nameCommercial,
      description: description || null,
      uom,
      lead_time_days: leadTimeDays,
      purchase_link: purchaseLink || null
    })
    .eq('tenant_id', TENANT_ID)
    .eq('pn', pn)
    .select()
    .single()

  if (error) {
    throw new Error('Erro ao atualizar material')
  }

  // Log de auditoria
  if (currentData) {
    await logChange({
      object_type: 'mm_material',
      object_id: pn,
      column_name: 'name_commercial',
      old_value: currentData.name_commercial,
      new_value: nameCommercial,
      user_id: user.id
    })

    if (currentData.description !== description) {
      await logChange({
        object_type: 'mm_material',
        object_id: pn,
        column_name: 'description',
        old_value: currentData.description,
        new_value: description,
        user_id: user.id
      })
    }

    if (currentData.uom !== uom) {
      await logChange({
        object_type: 'mm_material',
        object_id: pn,
        column_name: 'uom',
        old_value: currentData.uom,
        new_value: uom,
        user_id: user.id
      })
    }
  }

  return data
}

export async function deactivateMaterial(pn: string) {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Usuário não autenticado')
  }

  const supabaseServer = supabase()
  
  // Buscar dados atuais para auditoria
  const { data: currentData } = await supabaseServer
    .from('mm_material')
    .select('*')
    .eq('tenant_id', TENANT_ID)
    .eq('pn', pn)
    .single()

  // Desativar material
  const { data, error } = await supabaseServer
    .from('mm_material')
    .update({
      is_active: false,
      updated_at: new Date().toISOString()
    })
    .eq('tenant_id', TENANT_ID)
    .eq('pn', pn)
    .select()
    .single()

  if (error) {
    throw new Error('Erro ao desativar material')
  }

  // Log de auditoria
  if (currentData) {
    await logChange({
      object_type: 'mm_material',
      object_id: pn,
      column_name: 'is_active',
      old_value: currentData.is_active.toString(),
      new_value: 'false',
      user_id: user.id
    })
  }

  return data
}
