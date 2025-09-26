export default function HomePage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Principal</h1>
        <p className="text-gray-400">Visão geral do sistema LaPlata ERP</p>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">Materiais Ativos</h3>
          <p className="text-3xl font-bold text-blue-400">0</p>
          <p className="text-sm text-gray-400">Total de materiais</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">Pedidos Hoje</h3>
          <p className="text-3xl font-bold text-green-400">0</p>
          <p className="text-sm text-gray-400">Novos pedidos</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">Estoque Total</h3>
          <p className="text-3xl font-bold text-yellow-400">0</p>
          <p className="text-sm text-gray-400">Itens em estoque</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">Faturamento</h3>
          <p className="text-3xl font-bold text-purple-400">R$ 0,00</p>
          <p className="text-sm text-gray-400">Este mês</p>
        </div>
      </div>

      {/* Módulos Rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Acesso Rápido</h3>
          <div className="space-y-3">
            <a href="/mm" className="block text-blue-400 hover:text-blue-300 transition-colors">
              → Gerenciar Materiais
            </a>
            <a href="/sd" className="block text-blue-400 hover:text-blue-300 transition-colors">
              → Processar Vendas
            </a>
            <a href="/wh" className="block text-blue-400 hover:text-blue-300 transition-colors">
              → Controlar Estoque
            </a>
            <a href="/fi" className="block text-blue-400 hover:text-blue-300 transition-colors">
              → Financeiro
            </a>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Atividades Recentes</h3>
          <div className="text-gray-400 text-sm">
            <p>Nenhuma atividade recente</p>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Alertas</h3>
          <div className="text-gray-400 text-sm">
            <p>Nenhum alerta</p>
          </div>
        </div>
      </div>
    </div>
  )
}