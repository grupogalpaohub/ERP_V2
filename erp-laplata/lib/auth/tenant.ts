import { supabase } from '@/lib/supabase/server'

// Tenant fixo para MVP
export const TENANT_ID = '11111111-1111-1111-1111-111111111111'

export async function getCurrentTenant() {
  // MVP: sempre retorna o tenant fixo
  // Futuro: ler de auth_user_tenant baseado no usuário logado
  return {
    tenant_id: TENANT_ID,
    name: 'LaPlata Lunaria',
    is_active: true
  }
}

export async function getUserTenantMembership(userId: string) {
  const supabaseServer = supabase()
  
  const { data, error } = await supabaseServer
    .from('auth_user_tenant')
    .select('*')
    .eq('user_id', userId)
    .eq('tenant_id', TENANT_ID)
    .single()
  
  if (error) {
    return null
  }
  
  return data
}
