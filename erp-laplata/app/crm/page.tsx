export default function CRMPage() {
  return (
    <div className="space-y-6">
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h1 className="text-2xl font-bold text-white mb-2">CRM - Clientes</h1>
        <p className="text-gray-400">Gestão de relacionamento com clientes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Clientes Ativos</h3>
          <p className="text-2xl font-bold text-[#0070f3]">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Leads Hoje</h3>
          <p className="text-2xl font-bold text-green-400">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Ticket Médio</h3>
          <p className="text-2xl font-bold text-yellow-400">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h2 className="text-lg font-semibold text-white mb-4">Funcionalidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Central de Clientes</h3>
            <p className="text-sm text-gray-400">Gestão completa de clientes</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Leads</h3>
            <p className="text-sm text-gray-400">Captação e qualificação</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Histórico</h3>
            <p className="text-sm text-gray-400">Pedidos e interações</p>
          </div>
          <div className="p-4 border border-[#333] rounded-lg">
            <h3 className="font-medium text-white mb-2">Segmentação</h3>
            <p className="text-sm text-gray-400">Classificação e grupos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
