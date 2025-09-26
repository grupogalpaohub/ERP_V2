import { NextResponse } from 'next/server'

export async function POST() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set('sb-access-token', '', { path: '/', maxAge: 0 })
  res.cookies.set('sb-refresh-token', '', { path: '/', maxAge: 0 })
  res.cookies.set('supabase-auth-token', '', { path: '/', maxAge: 0 })
  return res
}

