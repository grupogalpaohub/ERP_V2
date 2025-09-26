import Link from 'next/link'
import { BarChart3, Download, Calendar, TrendingUp } from 'lucide-react'

export default function ReportsPage() {
  const reports = [
    {
      title: 'Relatório de Compras',
      description: 'Análise de compras por período e fornecedor',
      icon: BarChart3,
      type: 'purchase'
    },
    {
      title: 'Performance de Fornecedores',
      description: 'Avaliação de desempenho dos fornecedores',
      icon: TrendingUp,
      type: 'supplier'
    },
    {
      title: 'Análise de Materiais',
      description: 'Consumo e movimentação de materiais',
      icon: Calendar,
      type: 'material'
    }
  ]

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <Link href="/mm" className="hover:text-white transition-colors">MM</Link>
          <span>→</span>
          <span className="text-white">Relatórios</span>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Relatórios MM</h1>
          <p className="text-gray-400">Relatórios e análises do módulo de Materiais & Compras</p>
        </div>
      </div>

      {/* Cards de Relatórios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => {
          const Icon = report.icon
          return (
            <div
              key={report.type}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{report.description}</p>
                  <button className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Gerar Relatório
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Filtros de Período */}
      <div className="mt-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-4">Filtros de Período</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Data Inicial
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Data Final
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Aplicar Filtros
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
