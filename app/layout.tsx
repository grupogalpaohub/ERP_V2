import './globals.css'

export const metadata = { title: 'LaPlata ERP', description: 'ERP La Plata Lunária' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body className='min-h-dvh bg-neutral-950 text-neutral-100 antialiased'>
        {children}
      </body>
    </html>
  )
}