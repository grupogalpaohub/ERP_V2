import { NextResponse } from 'next/server'

export function setAuthCookies(
  res: NextResponse,
  accessToken: string,
  refreshToken: string
) {
  // Cookies que o middleware vai checar
  res.cookies.set('sb-access-token', accessToken, {
    httpOnly: true, sameSite: 'lax', path: '/', secure: false, maxAge: 60*60
  })
  res.cookies.set('sb-refresh-token', refreshToken, {
    httpOnly: true, sameSite: 'lax', path: '/', secure: false, maxAge: 60*60*24*7
  })

  // Compat opcional para libs que leem supabase-auth-token (não é necessário p/ middleware)
  try {
    const payload = JSON.stringify({ access_token: accessToken, refresh_token: refreshToken })
    res.cookies.set('supabase-auth-token', JSON.stringify([payload]), {
      httpOnly: false, sameSite: 'lax', path: '/', secure: false, maxAge: 60*60*24*7
    })
  } catch {}
  return res
}

