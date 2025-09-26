import { supabase } from '@/lib/supabase/server'
import { TENANT_ID } from '@/lib/auth/tenant'

export interface AuditEvent {
  object_type: string
  object_id: string
  column_name: string
  old_value: string | null
  new_value: string | null
  user_id: string
}

export async function logChange(event: AuditEvent) {
  const supabaseServer = supabase()
  
  const { error } = await supabaseServer
    .from('core_change_log')
    .insert({
      tenant_id: TENANT_ID,
      user_id: event.user_id,
      object_type: event.object_type,
      object_id: event.object_id,
      column_name: event.column_name,
      old_value: event.old_value,
      new_value: event.new_value,
      created_at: new Date().toISOString()
    })
  
  if (error) {
    console.error('Erro ao registrar auditoria:', error)
    // Não falha a operação principal por erro de auditoria
  }
}

export async function logBulkChanges(events: AuditEvent[]) {
  const supabaseServer = supabase()
  
  const auditRecords = events.map(event => ({
    tenant_id: TENANT_ID,
    user_id: event.user_id,
    object_type: event.object_type,
    object_id: event.object_id,
    column_name: event.column_name,
    old_value: event.old_value,
    new_value: event.new_value,
    created_at: new Date().toISOString()
  }))
  
  const { error } = await supabaseServer
    .from('core_change_log')
    .insert(auditRecords)
  
  if (error) {
    console.error('Erro ao registrar auditoria em lote:', error)
  }
}
