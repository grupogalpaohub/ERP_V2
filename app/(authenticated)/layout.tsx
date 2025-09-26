export default function AuthenticatedGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-dvh grid grid-cols-[240px_1fr]'>
      <aside className='hidden md:block bg-neutral-900 border-r border-neutral-800 p-4 space-y-4'>
        <div className='text-lg font-semibold'>LaPlata ERP</div>
        <nav className='space-y-1 text-sm'>
          <a className='block px-2 py-1 rounded hover:bg-neutral-800' href='/'>Home</a>
          <a className='block px-2 py-1 rounded hover:bg-neutral-800' href='/mm'>MM</a>
          <a className='block px-2 py-1 rounded hover:bg-neutral-800' href='/sd'>SD</a>
          <a className='block px-2 py-1 rounded hover:bg-neutral-800' href='/wh'>WH</a>
          <a className='block px-2 py-1 rounded hover:bg-neutral-800' href='/fi'>FI</a>
          <a className='block px-2 py-1 rounded hover:bg-neutral-800' href='/co'>CO</a>
          <a className='block px-2 py-1 rounded hover:bg-neutral-800' href='/crm'>CRM</a>
          <a className='block px-2 py-1 rounded hover:bg-neutral-800' href='/analytics'>Analytics</a>
        </nav>
      </aside>
      <div className='min-w-0'>
        <header className='sticky top-0 z-10 bg-neutral-950/70 backdrop-blur border-b border-neutral-800 px-4 py-3 flex items-center justify-between'>
          <div className='font-medium'>Dashboard</div>
          <div className='text-sm text-neutral-400'>admin@teste.com</div>
        </header>
        <main className='container py-6 space-y-6'>{children}</main>
      </div>
    </div>
  )
}
