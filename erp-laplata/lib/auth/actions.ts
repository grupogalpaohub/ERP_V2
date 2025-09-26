'use server'

import { supabase } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function logout() {
  const supabaseServer = supabase()
  
  await supabaseServer.auth.signOut()
  redirect('/login')
}
