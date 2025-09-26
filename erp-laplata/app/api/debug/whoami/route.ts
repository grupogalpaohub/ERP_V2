import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/server'

export async function GET() {
  const { data:{ user }, error } = await supabase().auth.getUser()
  return NextResponse.json({ user, error: error?.message ?? null })
}
