'use server'

import { createClient } from '@supabase/supabase-js'
import { FIXED_TENANT_ID } from '@/lib/tenant'

export type MaterialRow = {
  pn: string
  description: string | null
  type_code: string | null
  class_code: string | null
  uom_code: string | null
  is_active: boolean
  created_at: string
}

export async function getMaterials(): Promise<MaterialRow[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data, error } = await supabase
    .from('mm_material')
    .select(`
  pn,
  description,
  type_code:material_type_code,
  class_code:material_class_code,
  uom_code:uom,
  is_active,
  created_at
`)
    .eq('tenant_id', FIXED_TENANT_ID)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('[getMaterials] error', error.message)
    return []
  }
  return (data as any) ?? []
}
