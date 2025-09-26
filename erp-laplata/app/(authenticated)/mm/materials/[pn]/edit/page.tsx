import { createClient } from '@supabase/supabase-js'
import { FIXED_TENANT_ID } from '@/lib/tenant'
import { notFound } from 'next/navigation'

type Opt = { code: string; name: string }

async function fetchOpts(table: string): Promise<Opt[]> {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  const { data } = await supabase
    .from(table)
    .select('code,name')
    .eq('tenant_id', FIXED_TENANT_ID)
    .order('name', { ascending: true })
  return (data as any) ?? []
}

async function fetchMaterial(pn: string) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  const { data, error } = await supabase
    .from('mm_material')
    .select('*')
    .eq('tenant_id', FIXED_TENANT_ID)
    .eq('pn', pn)
    .single()
  
  if (error || !data) {
    return null
  }
  
  return data
}

export default async function EditMaterialPage({ params }: { params: { pn: string } }) {
  const [material, types, classes, uoms] = await Promise.all([
    fetchMaterial(params.pn),
    fetchOpts('mm_material_type'),
    fetchOpts('mm_material_class'),
    fetchOpts('mm_uom'),
  ])

  if (!material) {
    notFound()
  }

  const typesFallback: Opt[] = types.length ? types : [
    { code: 'RAW', name: 'Matéria-prima' },
    { code: 'COMP', name: 'Componente' },
    { code: 'FIN', name: 'Produto Acabado' },
    { code: 'TOOL', name: 'Ferramenta' },
    { code: 'CONS', name: 'Consumível' },
  ]
  const classesFallback: Opt[] = classes.length ? classes : [
    { code: 'METAL', name: 'Metal' },
    { code: 'PLASTIC', name: 'Plástico' },
    { code: 'ELECTRONIC', name: 'Eletrônico' },
    { code: 'MECHANICAL', name: 'Mecânico' },
    { code: 'CHEMICAL', name: 'Químico' },
  ]
  const uomsFallback: Opt[] = uoms.length ? uoms : [
    { code: 'UN', name: 'Unidade' },
    { code: 'KG', name: 'Quilograma' },
    { code: 'M', name: 'Metro' },
    { code: 'M2', name: 'Metro Quadrado' },
    { code: 'M3', name: 'Metro Cúbico' },
    { code: 'L', name: 'Litro' },
  ]

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Editar Material</h1>
        <p className="text-neutral-400">PN: {material.pn}</p>
      </div>

      <form action={`/api/mm/materials/actions?action=update&pn=${material.pn}`} method="POST" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nome Comercial */}
          <div>
            <label htmlFor="name_commercial" className="block text-sm font-medium mb-2">
              Nome Comercial *
            </label>
            <input
              type="text"
              id="name_commercial"
              name="name_commercial"
              required
              defaultValue={material.name_commercial}
              className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Brinco Argola Cravejado"
            />
          </div>

          {/* Descrição */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Descrição
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              defaultValue={material.description || ''}
              className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Descrição detalhada do material"
            />
          </div>

          {/* Tipo de Material */}
          <div>
            <label htmlFor="material_type_code" className="block text-sm font-medium mb-2">
              Tipo de Material *
            </label>
            <select
              id="material_type_code"
              name="material_type_code"
              required
              defaultValue={material.material_type_code}
              className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione o tipo</option>
              {typesFallback.map(type => (
                <option key={type.code} value={type.code}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          {/* Classe de Material */}
          <div>
            <label htmlFor="material_class_code" className="block text-sm font-medium mb-2">
              Classe de Material *
            </label>
            <select
              id="material_class_code"
              name="material_class_code"
              required
              defaultValue={material.material_class_code}
              className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione a classe</option>
              {classesFallback.map(cls => (
                <option key={cls.code} value={cls.code}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>

          {/* Unidade de Medida */}
          <div>
            <label htmlFor="uom" className="block text-sm font-medium mb-2">
              Unidade de Medida *
            </label>
            <select
              id="uom"
              name="uom"
              required
              defaultValue={material.uom}
              className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione a unidade</option>
              {uomsFallback.map(uom => (
                <option key={uom.code} value={uom.code}>
                  {uom.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tempo de Entrega */}
          <div>
            <label htmlFor="lead_time_days" className="block text-sm font-medium mb-2">
              Tempo de Entrega (dias)
            </label>
            <input
              type="number"
              id="lead_time_days"
              name="lead_time_days"
              min="0"
              defaultValue={material.lead_time_days}
              className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Fornecedor */}
          <div>
            <label htmlFor="vendor_id" className="block text-sm font-medium mb-2">
              Fornecedor
            </label>
            <input
              type="number"
              id="vendor_id"
              name="vendor_id"
              min="1"
              defaultValue={material.vendor_id || ''}
              className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ID do fornecedor"
            />
          </div>

          {/* Link de Compra */}
          <div>
            <label htmlFor="purchase_link" className="block text-sm font-medium mb-2">
              Link de Compra
            </label>
            <input
              type="url"
              id="purchase_link"
              name="purchase_link"
              defaultValue={material.purchase_link || ''}
              className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://exemplo.com/produto"
            />
          </div>
        </div>

        {/* Botões */}
        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Salvar Alterações
          </button>
          <a
            href={`/mm/materials/${material.pn}`}
            className="px-6 py-2 bg-neutral-600 hover:bg-neutral-700 text-white rounded-md transition-colors"
          >
            Cancelar
          </a>
        </div>
      </form>
    </div>
  )
}
