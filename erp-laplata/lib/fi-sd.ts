import { supabase } from './storage'
import { FIXED_TENANT_ID } from './tenant'

export async function mirrorSdToFiInvoice(sdInvoiceId: string) {
  const { data: sd, error } = await supabase
    .from('sd_invoice')
    .select('*')
    .eq('tenant_id', FIXED_TENANT_ID)
    .eq('sd_invoice_id', sdInvoiceId)
    .single()
  if (error || !sd) return { error: error || new Error('SD invoice not found') }

  const payload = {
    tenant_id: FIXED_TENANT_ID,
    source: 'SO',
    source_id: sd.sd_invoice_id,
    amount_cents: sd.amount_cents,
    currency: sd.currency || 'BRL',
    status: sd.status || 'OPEN',
    issued_at: sd.issued_at || new Date().toISOString(),
  }

  const { error: upsertErr } = await supabase
    .from('fi_invoice')
    .upsert(payload, { onConflict: 'tenant_id,source,source_id' })
  return { error: upsertErr || null }
}
