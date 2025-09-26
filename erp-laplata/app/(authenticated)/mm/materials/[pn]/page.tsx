import { createClient } from '@supabase/supabase-js'
import { FIXED_TENANT_ID } from '@/lib/tenant'
import { notFound } from 'next/navigation'
import Link from 'next/link'

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

export default async function MaterialPage({ params }: { params: { pn: string } }) {
  const material = await fetchMaterial(params.pn)

  if (!material) {
    notFound()
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{material.name_commercial}</h1>
            <p className="text-neutral-400">PN: {material.pn}</p>
          </div>
          <div className="flex gap-2">
            <Link
              href={`/mm/materials/${material.pn}/edit`}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              Editar
            </Link>
            <Link
              href="/mm/materials"
              className="px-4 py-2 bg-neutral-600 hover:bg-neutral-700 text-white rounded-md transition-colors"
            >
              Voltar
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Informações Básicas */}
        <div className="bg-neutral-900 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Informações Básicas</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-neutral-400">Nome Comercial</label>
              <p className="font-medium">{material.name_commercial}</p>
            </div>
            <div>
              <label className="text-sm text-neutral-400">Descrição</label>
              <p className="font-medium">{material.description || 'Não informado'}</p>
            </div>
            <div>
              <label className="text-sm text-neutral-400">Status</label>
              <p className="font-medium">
                <span className={`px-2 py-1 rounded text-xs ${
                  material.is_active ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                }`}>
                  {material.is_active ? 'Ativo' : 'Inativo'}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Classificação */}
        <div className="bg-neutral-900 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Classificação</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-neutral-400">Tipo de Material</label>
              <p className="font-medium">{material.material_type_code}</p>
            </div>
            <div>
              <label className="text-sm text-neutral-400">Classe de Material</label>
              <p className="font-medium">{material.material_class_code}</p>
            </div>
            <div>
              <label className="text-sm text-neutral-400">Unidade de Medida</label>
              <p className="font-medium">{material.uom}</p>
            </div>
          </div>
        </div>

        {/* Informações de Compra */}
        <div className="bg-neutral-900 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Informações de Compra</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-neutral-400">Tempo de Entrega</label>
              <p className="font-medium">{material.lead_time_days} dias</p>
            </div>
            <div>
              <label className="text-sm text-neutral-400">Fornecedor</label>
              <p className="font-medium">{material.vendor_id ? `ID: ${material.vendor_id}` : 'Não informado'}</p>
            </div>
            <div>
              <label className="text-sm text-neutral-400">Link de Compra</label>
              <p className="font-medium">
                {material.purchase_link ? (
                  <a 
                    href={material.purchase_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Acessar Link
                  </a>
                ) : 'Não informado'}
              </p>
            </div>
          </div>
        </div>

        {/* Informações do Sistema */}
        <div className="bg-neutral-900 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Informações do Sistema</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-neutral-400">ID do Material</label>
              <p className="font-medium font-mono">{material.mm_material_id}</p>
            </div>
            <div>
              <label className="text-sm text-neutral-400">Tenant ID</label>
              <p className="font-medium font-mono text-xs">{material.tenant_id}</p>
            </div>
            <div>
              <label className="text-sm text-neutral-400">Criado em</label>
              <p className="font-medium">
                {new Date(material.created_at).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
