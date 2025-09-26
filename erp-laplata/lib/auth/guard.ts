import { supabase } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function requireAuth() {
  const supabaseServer = supabase()
  
  const { data: { user }, error } = await supabaseServer.auth.getUser()
  
  if (error || !user) {
    redirect('/login')
  }
  
  return user
}

export async function getCurrentUser() {
  const supabaseServer = supabase()
  
  const { data: { user }, error } = await supabaseServer.auth.getUser()
  
  if (error || !user) {
    return null
  }
  
  return user
}
