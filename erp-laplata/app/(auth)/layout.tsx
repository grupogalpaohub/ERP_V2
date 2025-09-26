export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#2d2d2d] text-white">
        {children}
      </body>
    </html>
  )
}
