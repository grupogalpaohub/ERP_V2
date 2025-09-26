export default function SDPage() {
  return (
    <div className="space-y-6">
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h1 className="text-2xl font-bold text-white mb-2">SD - Vendas & Distribuição</h1>
        <p className="text-gray-400">Gestão de clientes, cotações, pedidos e faturas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Clientes</h3>
          <p className="text-2xl font-bold text-[#0070f3]">0</p>
          <p className="text-sm text-gray-400">Total de clientes</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Pedidos Hoje</h3>
          <p className="text-2xl font-bold text-green-400">0</p>
          <p className="text-sm text-gray-400">Novos pedidos</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Faturas</h3>
          <p className="text-2xl font-bold text-yellow-400">0</p>
          <p className="text-sm text-gray-400">Em aberto</p>
        </div>
      </div>
    </div>
  )
}