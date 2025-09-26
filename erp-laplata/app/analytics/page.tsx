export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h1 className="text-2xl font-bold text-white mb-2">Analytics - Relatórios</h1>
        <p className="text-gray-400">Dashboards e relatórios analíticos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Receita Mês</h3>
          <p className="text-2xl font-bold text-[#0070f3]">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Margem Bruta</h3>
          <p className="text-2xl font-bold text-green-400">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Giro Estoque</h3>
          <p className="text-2xl font-bold text-yellow-400">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h2 className="text-lg font-semibold text-white mb-4">Funcionalidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Dashboards</h3>
            <p className="text-sm text-gray-400">Visão geral dos KPIs</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Relatórios</h3>
            <p className="text-sm text-gray-400">Relatórios detalhados</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Gráficos</h3>
            <p className="text-sm text-gray-400">Visualizações interativas</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Export</h3>
            <p className="text-sm text-gray-400">Exportação de dados</p>
          </div>
        </div>
      </div>
    </div>
  )
}
