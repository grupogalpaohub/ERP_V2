import { getMaterials } from '@/lib/mm/materials'
import Link from 'next/link'

export const dynamic = 'force-dynamic' // garante fetch fresh no dev

export default async function MaterialsPage() {
  const rows = await getMaterials()

  return (
    <section className='space-y-6'>
      <header className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold'>Catálogo de Materiais</h1>
          <p className='text-neutral-400'>Lista dos materiais do tenant atual</p>
        </div>
        <Link href='/mm/materials/new' className='px-3 py-2 rounded bg-neutral-800 border border-neutral-700 hover:bg-neutral-700'>
          Novo Material
        </Link>
      </header>

      {rows.length === 0 ? (
        <div className='text-neutral-400'>
          Nenhum material cadastrado. <Link className='underline' href='/mm/materials/new'>Criar primeiro material</Link>
        </div>
      ) : (
        <div className='overflow-auto border border-neutral-800 rounded-xl'>
          <table className='min-w-full text-sm'>
            <thead className='bg-neutral-900'>
              <tr className='text-left'>
                <th className='px-3 py-2'>PN</th>
                <th className='px-3 py-2'>Descrição</th>
                <th className='px-3 py-2'>Tipo</th>
                <th className='px-3 py-2'>Classe</th>
                <th className='px-3 py-2'>UoM</th>
                <th className='px-3 py-2'>Ativo</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.pn} className='border-t border-neutral-900 hover:bg-neutral-900/50'>
                  <td className='px-3 py-2 font-mono'>{r.pn}</td>
                  <td className='px-3 py-2'>{r.description ?? '-'}</td>
                  <td className='px-3 py-2'>{r.type_code ?? '-'}</td>
                  <td className='px-3 py-2'>{r.class_code ?? '-'}</td>
                  <td className='px-3 py-2'>{r.uom_code ?? '-'}</td>
                  <td className='px-3 py-2'>{r.is_active ? 'Sim' : 'Não'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
