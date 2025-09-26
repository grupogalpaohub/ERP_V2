export const dynamic = 'force-dynamic'

import { FIXED_TENANT_ID } from '@/lib/tenant'
import { getMaterials } from '@/lib/db/materials'

export default async function MaterialsPage() {
  const { data, error } = await getMaterials(FIXED_TENANT_ID)
  if (error) return <div>Erro: {error.message}</div>
  if (!data || data.length === 0) return <div>Nenhum material cadastrado</div>
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold mb-4">Materiais ({data.length})</h1>
      <table className="min-w-full border">
        <thead><tr className="border-b">
          <th className="p-2 text-left">PN</th>
          <th className="p-2 text-left">Descrição</th>
          <th className="p-2 text-left">Tipo</th>
          <th className="p-2 text-left">Classe</th>
          <th className="p-2 text-left">UoM</th>
          <th className="p-2 text-left">Ativo</th>
        </tr></thead>
        <tbody>
          {data.map(m => (
            <tr key={m.pn} className="border-b">
              <td className="p-2">{m.pn}</td>
              <td className="p-2">{m.description}</td>
              <td className="p-2">{m.material_type_code}</td>
              <td className="p-2">{m.material_class_code}</td>
              <td className="p-2">{m.uom}</td>
              <td className="p-2">{m.is_active ? 'SIM' : 'NÃO'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
