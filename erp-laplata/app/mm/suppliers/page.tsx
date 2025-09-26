import Link from 'next/link'
import { Plus, Search, Filter, Download, Users } from 'lucide-react'

export default function SuppliersPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <Link href="/mm" className="hover:text-white transition-colors">MM</Link>
          <span>→</span>
          <span className="text-white">Fornecedores</span>
        </div>
        
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Fornecedores</h1>
            <p className="text-gray-400">Gerencie todos os fornecedores do sistema</p>
          </div>
          <Link 
            href="/mm/suppliers/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Novo Fornecedor
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
                placeholder="Buscar por nome, CNPJ ou contato..."
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

      {/* Tabela de Fornecedores */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left py-4 px-6 text-white font-semibold">Nome</th>
                <th className="text-left py-4 px-6 text-white font-semibold">CNPJ</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Contato</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Email</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Status</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td colSpan={6} className="py-12 text-center text-gray-400">
                  <Users className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                  <p className="text-lg mb-2">Nenhum fornecedor cadastrado</p>
                  <p className="text-sm mb-4">Comece criando seu primeiro fornecedor</p>
                  <Link 
                    href="/mm/suppliers/new"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Criar Primeiro Fornecedor
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
