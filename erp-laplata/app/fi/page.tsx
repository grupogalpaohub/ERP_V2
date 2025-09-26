export default function FIPage() {
  return (
    <div className="space-y-6">
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h1 className="text-2xl font-bold text-white mb-2">FI - Financeiro</h1>
        <p className="text-gray-400">Contas a pagar, contas a receber e caixa</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Caixa Atual</h3>
          <p className="text-2xl font-bold text-[#0070f3]">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">AP Vencendo</h3>
          <p className="text-2xl font-bold text-red-400">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">AR Vencendo</h3>
          <p className="text-2xl font-bold text-yellow-400">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h2 className="text-lg font-semibold text-white mb-4">Funcionalidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Contas a Pagar</h3>
            <p className="text-sm text-gray-400">Gestão de APs</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Contas a Receber</h3>
            <p className="text-sm text-gray-400">Gestão de ARs</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Caixa</h3>
            <p className="text-sm text-gray-400">Movimentações de caixa</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Invoices</h3>
            <p className="text-sm text-gray-400">Notas fiscais</p>
          </div>
        </div>
      </div>
    </div>
  )
}
