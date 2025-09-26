import './globals.css'

export const metadata = {
  title: 'LaPlata ERP',
  description: 'Sistema ERP LaPlata',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-white min-h-screen">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
