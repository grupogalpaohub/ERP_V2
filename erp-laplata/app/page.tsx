import Link from 'next/link'
import { MODULES } from '@/lib/constants'

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
        <h1 className="text-2xl font-bold text-white mb-2">
          Bem-vindo ao LaPlata ERP
        </h1>
        <p className="text-gray-400">
          Sistema integrado para gestão de materiais, vendas, estoque e financeiro
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {MODULES.map((module) => (
          <Link
            key={module.name}
            href={module.path}
            className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333] hover:border-[#0070f3] hover:bg-[#1a1a1a]/80 transition-all duration-200 group"
          >
            <div className="text-center">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#0070f3] transition-colors">
                {module.name}
              </h2>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {module.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Stats Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Materiais Ativos</h3>
          <p className="text-2xl font-bold text-[#0070f3]">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Pedidos Hoje</h3>
          <p className="text-2xl font-bold text-green-400">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
        
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#333]">
          <h3 className="text-lg font-semibold text-white mb-2">Estoque Total</h3>
          <p className="text-2xl font-bold text-yellow-400">-</p>
          <p className="text-sm text-gray-400">Carregando...</p>
        </div>
      </div>
    </div>
  )
}
