export default function WHPage() {
  return (
    <div className="space-y-6">
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h1 className="text-2xl font-bold text-white mb-2">WH - Estoque & Armazém</h1>
        <p className="text-gray-400">Controle de estoque, movimentações e armazéns</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">On-hand Total</h3>
          <p className="text-2xl font-bold text-[#0070f3]">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Itens Abaixo do Mínimo</h3>
          <p className="text-2xl font-bold text-red-400">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Reservas Estagnadas</h3>
          <p className="text-2xl font-bold text-yellow-400">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h2 className="text-lg font-semibold text-white mb-4">Funcionalidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Saldos</h3>
            <p className="text-sm text-gray-400">Consulta de saldos por material/armazém</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Movimentações</h3>
            <p className="text-sm text-gray-400">Ledger de entradas e saídas</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Recebimento PO</h3>
            <p className="text-sm text-gray-400">Recebimento de pedidos de compra</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Expedição SO</h3>
            <p className="text-sm text-gray-400">Expedição de pedidos de venda</p>
          </div>
        </div>
      </div>
    </div>
  )
}
