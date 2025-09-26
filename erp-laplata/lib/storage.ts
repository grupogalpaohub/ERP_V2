import { createClient } from '@supabase/supabase-js'
import { FIXED_TENANT_ID } from './tenant'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function uploadWithTenant(
  bucket: string,
  path: string,
  file: File | Blob,
  tenantId = FIXED_TENANT_ID
) {
  return supabase.storage.from(bucket).upload(path, file, {
    upsert: true,
    metadata: { tenant_id: tenantId },
  })
}
