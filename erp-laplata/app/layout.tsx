import './globals.css'
import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { requireAuth } from '@/lib/auth/guard'

export const metadata = {
  title: 'LaPlata ERP',
  description: 'Sistema ERP Integrado',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Guard de autenticação - redireciona para login se não autenticado
  await requireAuth()
  
  return (
    <html lang="pt-BR">
      <body className="bg-[#2d2d2d] text-white">
        <div className="flex h-screen w-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <main className="p-4 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
