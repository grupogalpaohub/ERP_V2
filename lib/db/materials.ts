import { supabase } from '@/lib/supabase/server'

export type MaterialRow = {
  pn: string
  description: string | null
  material_type_code: string | null
  material_class_code: string | null
  uom: string | null
  is_active: boolean | null
}

export async function getMaterials(tenantId: string): Promise<MaterialRow[]> {
  const sb = supabase()
  const { data, error } = await sb
    .from('mm_material')
    .select('pn, description, material_type_code, material_class_code, uom, is_active')
    .eq('tenant_id', tenantId)
    .order('pn', { ascending: true })

  if (error) throw new Error(error.message)
  return data ?? []
}

export async function getMaterialByPn(tenantId: string, pn: string): Promise<MaterialRow | null> {
  const sb = supabase()
  const { data, error } = await sb
    .from('mm_material')
    .select('pn, description, material_type_code, material_class_code, uom, is_active')
    .eq('tenant_id', tenantId)
    .eq('pn', pn)
    .maybeSingle()

  if (error) throw new Error(error.message)
  return data ?? null
}
