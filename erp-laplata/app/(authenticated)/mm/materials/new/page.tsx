import { createClient } from '@supabase/supabase-js'
import { FIXED_TENANT_ID } from '@/lib/tenant'

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

export default async function NewMaterialPage() {
  // tenta DB; se vazio, usa fallback leve (TODO: seed)
  const [types, classes, uoms] = await Promise.all([
    fetchOpts('mm_material_type'),
    fetchOpts('mm_material_class'),
    fetchOpts('mm_uom'),
  ])

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
      <h1>Novo Material</h1>
      <p>TODO: Implementar form usando typesFallback, classesFallback, uomsFallback</p>
    </div>
  )
}
