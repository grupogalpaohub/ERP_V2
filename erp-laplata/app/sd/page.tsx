export default function SDPage() {
  return (
    <div className="space-y-6">
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h1 className="text-2xl font-bold text-white mb-2">SD - Vendas & Distribuição</h1>
        <p className="text-gray-400">Gestão de clientes, pedidos de venda e canais</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">GMV Negociado</h3>
          <p className="text-2xl font-bold text-[#0070f3]">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Pedidos Hoje</h3>
          <p className="text-2xl font-bold text-green-400">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Clientes Ativos</h3>
          <p className="text-2xl font-bold text-yellow-400">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h2 className="text-lg font-semibold text-white mb-4">Funcionalidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Central de Clientes</h3>
            <p className="text-sm text-gray-400">Cadastro e gestão de clientes</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Pedidos de Venda</h3>
            <p className="text-sm text-gray-400">Criação e acompanhamento de SOs</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Canais</h3>
            <p className="text-sm text-gray-400">IG, WhatsApp, Site, etc.</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Pagamentos</h3>
            <p className="text-sm text-gray-400">Métodos e condições de pagamento</p>
          </div>
        </div>
      </div>
    </div>
  )
}
