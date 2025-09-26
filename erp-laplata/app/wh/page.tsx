export default function WHPage() {
  return (
    <div className="space-y-6">
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h1 className="text-2xl font-bold text-white mb-2">WH - Estoque & Armazém</h1>
        <p className="text-gray-400">Gestão de estoque, localizações e inventário</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Itens em Estoque</h3>
          <p className="text-2xl font-bold text-[#0070f3]">0</p>
          <p className="text-sm text-gray-400">Total de itens</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Localizações</h3>
          <p className="text-2xl font-bold text-green-400">0</p>
          <p className="text-sm text-gray-400">Ativas</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Movimentações</h3>
          <p className="text-2xl font-bold text-yellow-400">0</p>
          <p className="text-sm text-gray-400">Hoje</p>
        </div>
      </div>
    </div>
  )
}