import Link from 'next/link'

export default function ReportsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Relatórios</h1>
        <p className="text-neutral-400">Relatórios de compras e fornecedores</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Relatório de Materiais */}
        <div className="bg-neutral-900 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-600 rounded-lg mr-3">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Relatório de Materiais</h3>
          </div>
          <p className="text-neutral-400 mb-4">
            Relatório completo de materiais cadastrados, com filtros por tipo, classe e status.
          </p>
          <Link 
            href="/mm/reports/materials" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Gerar Relatório
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Relatório de Fornecedores */}
        <div className="bg-neutral-900 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-green-600 rounded-lg mr-3">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Relatório de Fornecedores</h3>
          </div>
          <p className="text-neutral-400 mb-4">
            Análise de fornecedores, performance e histórico de compras.
          </p>
          <Link 
            href="/mm/reports/suppliers" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Gerar Relatório
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Relatório de Pedidos */}
        <div className="bg-neutral-900 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-yellow-600 rounded-lg mr-3">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Relatório de Pedidos</h3>
          </div>
          <p className="text-neutral-400 mb-4">
            Relatório de pedidos de compra, status e análise de gastos.
          </p>
          <Link 
            href="/mm/reports/purchase-orders" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Gerar Relatório
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Relatório de Estoque */}
        <div className="bg-neutral-900 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-purple-600 rounded-lg mr-3">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Relatório de Estoque</h3>
          </div>
          <p className="text-neutral-400 mb-4">
            Análise de estoque atual, movimentações e níveis de reposição.
          </p>
          <Link 
            href="/mm/reports/inventory" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Gerar Relatório
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Relatório de Custos */}
        <div className="bg-neutral-900 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-red-600 rounded-lg mr-3">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Relatório de Custos</h3>
          </div>
          <p className="text-neutral-400 mb-4">
            Análise de custos de materiais, fornecedores e tendências de preços.
          </p>
          <Link 
            href="/mm/reports/costs" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Gerar Relatório
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Relatório de Performance */}
        <div className="bg-neutral-900 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-indigo-600 rounded-lg mr-3">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Relatório de Performance</h3>
          </div>
          <p className="text-neutral-400 mb-4">
            Métricas de performance, KPIs e indicadores de eficiência.
          </p>
          <Link 
            href="/mm/reports/performance" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Gerar Relatório
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
