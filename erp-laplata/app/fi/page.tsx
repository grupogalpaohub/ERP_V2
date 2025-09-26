export default function FIPage() {
  return (
    <div className="space-y-6">
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h1 className="text-2xl font-bold text-white mb-2">FI - Financeiro</h1>
        <p className="text-gray-400">Gestão financeira, contas a pagar/receber e fluxo de caixa</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Contas a Receber</h3>
          <p className="text-2xl font-bold text-[#0070f3]">R$ 0,00</p>
          <p className="text-sm text-gray-400">Em aberto</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Contas a Pagar</h3>
          <p className="text-2xl font-bold text-red-400">R$ 0,00</p>
          <p className="text-sm text-gray-400">Em aberto</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Fluxo de Caixa</h3>
          <p className="text-2xl font-bold text-green-400">R$ 0,00</p>
          <p className="text-sm text-gray-400">Saldo atual</p>
        </div>
      </div>
    </div>
  )
}