import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { setAuthCookies } from '@/lib/auth/cookies'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ error: 'Missing credentials' }, { status: 400 })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error || !data?.session) {
      return NextResponse.json({ error: error?.message || 'Invalid credentials' }, { status: 401 })
    }

    const res = NextResponse.json({ ok: true })
    setAuthCookies(res, data.session.access_token, data.session.refresh_token)
    return res
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Internal error' }, { status: 500 })
  }
}

