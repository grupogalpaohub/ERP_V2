import Link from 'next/link'
import { getMaterials } from '@/lib/db/materials'

export default async function MMPage() {
  // Leitura real do banco (guardrail: UI = DB)
  const materials = await getMaterials()
  const materialsCount = materials.length

  return (
    <div className="space-y-6">
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h1 className="text-2xl font-bold text-white mb-2">MM - Materiais & Compras</h1>
        <p className="text-gray-400">Gestão de materiais, fornecedores e pedidos de compra</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Materiais Ativos</h3>
          <p className="text-2xl font-bold text-[#0070f3]">{materialsCount}</p>
          <p className="text-sm text-gray-400">Total de materiais</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Fornecedores</h3>
          <p className="text-2xl font-bold text-green-400">-</p>
          <p className="text-sm text-gray-400">Em breve</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">POs Abertos</h3>
          <p className="text-2xl font-bold text-yellow-400">-</p>
          <p className="text-sm text-gray-400">Em breve</p>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Catálogo de Materiais</h2>
          <Link 
            href="/mm/materials/new"
            className="bg-[#0070f3] hover:bg-[#0051a2] text-white px-4 py-2 rounded-lg transition-colors"
          >
            Novo Material
          </Link>
        </div>
        
        {materials.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400 mb-4">Nenhum material cadastrado</p>
            <Link 
              href="/mm/materials/new"
              className="text-[#0070f3] hover:text-[#0051a2] transition-colors"
            >
              Criar primeiro material
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left py-3 px-4 text-white">PN</th>
                  <th className="text-left py-3 px-4 text-white">Nome</th>
                  <th className="text-left py-3 px-4 text-white">Tipo</th>
                  <th className="text-left py-3 px-4 text-white">Unidade</th>
                  <th className="text-left py-3 px-4 text-white">Status</th>
                  <th className="text-left py-3 px-4 text-white">Ações</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((material) => (
                  <tr key={material.pn} className="border-b border-[#333] hover:bg-[#333]/20">
                    <td className="py-3 px-4 text-white font-mono">{material.pn}</td>
                    <td className="py-3 px-4 text-white">{material.name}</td>
                    <td className="py-3 px-4 text-gray-400">{material.type_code}</td>
                    <td className="py-3 px-4 text-gray-400">{material.unit}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs ${
                        material.is_active 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {material.is_active ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Link 
                        href={`/mm/materials/${material.pn}`}
                        className="text-[#0070f3] hover:text-[#0051a2] text-sm"
                      >
                        Editar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
