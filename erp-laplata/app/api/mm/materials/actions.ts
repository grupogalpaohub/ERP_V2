'use server'

import { supabase } from '@/lib/supabase/server'
import { TENANT_ID } from '@/lib/auth/tenant'
import { getCurrentUser } from '@/lib/auth/guard'
import { logChange } from '@/lib/audit/logger'

export async function createMaterial(formData: FormData) {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Usuário não autenticado')
  }

  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const typeCode = formData.get('type_code') as string
  const unit = formData.get('unit') as string

  if (!name || !typeCode || !unit) {
    throw new Error('Campos obrigatórios não preenchidos')
  }

  const supabaseServer = supabase()
  
  // Gerar PN usando função do banco (guardrail)
  const { data: pnData, error: pnError } = await supabaseServer
    .rpc('mm_next_pn', {
      p_tenant_id: TENANT_ID,
      p_type_code: typeCode
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
      name,
      description: description || null,
      type_code: typeCode,
      unit,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
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

  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const unit = formData.get('unit') as string

  if (!name || !unit) {
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
      name,
      description: description || null,
      unit,
      updated_at: new Date().toISOString()
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
      column_name: 'name',
      old_value: currentData.name,
      new_value: name,
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

    if (currentData.unit !== unit) {
      await logChange({
        object_type: 'mm_material',
        object_id: pn,
        column_name: 'unit',
        old_value: currentData.unit,
        new_value: unit,
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
