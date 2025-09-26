import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

export function supabase() {
  const jar = cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (n) => jar.get(n)?.value,
        set: (n,v,o) => jar.set({ name:n, value:v, ...o }),
        remove: (n,o) => jar.set({ name:n, value:'', ...o, maxAge:0 }),
      },
    }
  )
}
