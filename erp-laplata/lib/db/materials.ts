import { supabase } from '@/lib/supabase/server'
import { TENANT_ID } from '@/lib/auth/tenant'

export interface Material {
  pn: string
  name: string
  description: string | null
  type_code: string
  unit: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export async function getMaterials() {
  const supabaseServer = supabase()
  
  const { data, error } = await supabaseServer
    .from('mm_material')
    .select('*')
    .eq('tenant_id', TENANT_ID)
    .eq('is_active', true)
    .order('created_at', { ascending: false })
  
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

export async function getNextPN(typeCode: string) {
  const supabaseServer = supabase()
  
  const { data, error } = await supabaseServer
    .rpc('mm_next_pn', {
      p_tenant_id: TENANT_ID,
      p_type_code: typeCode
    })
  
  if (error) {
    console.error('Erro ao gerar PN:', error)
    return null
  }
  
  return data as string
}