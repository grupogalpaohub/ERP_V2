export const dynamic = 'force-dynamic'

import { FIXED_TENANT_ID } from '@/lib/tenant'
import { getMaterials } from '@/lib/db/materials'

export default async function MaterialsPage() {
  const rows = await getMaterials(FIXED_TENANT_ID)

  if (!rows.length) {
    return <main className="p-6">Nenhum material cadastrado</main>
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold mb-4">Materiais ({rows.length})</h1>
      <div className="overflow-x-auto rounded-xl border">
        <table className="min-w-full text-sm">
          <thead className="bg-zinc-900">
            <tr>
              <th className="p-3 text-left">PN</th>
              <th className="p-3 text-left">Descrição</th>
              <th className="p-3 text-left">Tipo</th>
              <th className="p-3 text-left">Classe</th>
              <th className="p-3 text-left">UoM</th>
              <th className="p-3 text-left">Ativo</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((m) => (
              <tr key={m.pn} className="border-t border-zinc-800">
                <td className="p-3 font-mono">{m.pn}</td>
                <td className="p-3">{m.description ?? '-'}</td>
                <td className="p-3">{m.material_type_code ?? '-'}</td>
                <td className="p-3">{m.material_class_code ?? '-'}</td>
                <td className="p-3">{m.uom ?? '-'}</td>
                <td className="p-3">{m.is_active ? 'SIM' : 'NÃO'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
