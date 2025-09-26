import Link from 'next/link'
import { Plus, Search, Filter, Download, Package } from 'lucide-react'

export default function MaterialsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <Link href="/mm" className="hover:text-white transition-colors">MM</Link>
          <span>→</span>
          <span className="text-white">Materiais</span>
        </div>
        
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Catálogo de Materiais</h1>
            <p className="text-gray-400">Gerencie todos os materiais e produtos do sistema</p>
          </div>
          <Link 
            href="/mm/materials/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Novo Material
          </Link>
        </div>
      </div>

      {/* Filtros e Busca */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar por PN, nome ou descrição..."
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Exportar
            </button>
          </div>
        </div>
      </div>

      {/* Tabela de Materiais */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left py-4 px-6 text-white font-semibold">PN</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Nome Comercial</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Tipo</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Classe</th>
                <th className="text-left py-4 px-6 text-white font-semibold">UOM</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Status</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td colSpan={7} className="py-12 text-center text-gray-400">
                  <Package className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                  <p className="text-lg mb-2">Nenhum material cadastrado</p>
                  <p className="text-sm mb-4">Comece criando seu primeiro material</p>
                  <Link 
                    href="/mm/materials/new"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Criar Primeiro Material
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Paginação */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-400">
          Mostrando 0 de 0 materiais
        </div>
        <div className="flex gap-2">
          <button 
            disabled
            className="px-3 py-2 bg-gray-700 text-gray-500 rounded-lg cursor-not-allowed"
          >
            Anterior
          </button>
          <button 
            disabled
            className="px-3 py-2 bg-gray-700 text-gray-500 rounded-lg cursor-not-allowed"
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  )
}
