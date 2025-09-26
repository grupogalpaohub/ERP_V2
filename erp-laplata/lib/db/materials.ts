import { supabase } from '@/lib/supabase/server'
import { FIXED_TENANT_ID as TENANT_ID } from '@/lib/tenant'

export interface Material {
  mm_material_id: number
  pn: string
  name_commercial: string
  description: string | null
  material_type_code: string
  material_class_code: string
  uom: string
  lead_time_days: number
  is_active: boolean
  vendor_id: number
  purchase_link: string | null
}

export async function getMaterials() {
  const supabaseServer = supabase()
  
  const { data, error } = await supabaseServer
    .from('mm_material')
    .select('*')
    .eq('tenant_id', TENANT_ID)
    .eq('is_active', true)
    .order('mm_material_id', { ascending: false })
  
  if (error) {
    console.error('Erro ao buscar materiais:', error)
    return []
  }
  
  return data as Material[]
}

export async function getMaterialByPN(pn: string) {
  const supabaseServer = supabase()
  
  const { data, error } = await supabaseServer
    .from('mm_material')
    .select('*')
    .eq('tenant_id', TENANT_ID)
    .eq('pn', pn)
    .single()
  
  if (error) {
    console.error('Erro ao buscar material:', error)
    return null
  }
  
  return data as Material
}

export async function getNextPN(materialTypeCode: string) {
  const supabaseServer = supabase()
  
  const { data, error } = await supabaseServer
    .rpc('mm_next_pn', {
      p_tenant_id: TENANT_ID,
      p_material_type_code: materialTypeCode
    })
  
  if (error) {
    console.error('Erro ao gerar PN:', error)
    return null
  }
  
  return data as string
}