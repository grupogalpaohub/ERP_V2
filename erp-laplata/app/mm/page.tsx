import Link from 'next/link'
import { Package, Users, ShoppingCart, BarChart3 } from 'lucide-react'

export default function MMPage() {
  const mmModules = [
    { 
      href: '/mm/materials', 
      icon: Package, 
      title: 'Materiais', 
      description: 'Catálogo de materiais e produtos',
      count: 0
    },
    { 
      href: '/mm/suppliers', 
      icon: Users, 
      title: 'Fornecedores', 
      description: 'Gestão de fornecedores',
      count: 0
    },
    { 
      href: '/mm/purchase-orders', 
      icon: ShoppingCart, 
      title: 'Pedidos de Compra', 
      description: 'Criação e acompanhamento de POs',
      count: 0
    },
    { 
      href: '/mm/reports', 
      icon: BarChart3, 
      title: 'Relatórios', 
      description: 'Relatórios de compras e fornecedores',
      count: 0
    },
  ]

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">MM - Materiais & Compras</h1>
        <p className="text-gray-400">Gestão completa de materiais, fornecedores e pedidos de compra</p>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">Materiais Ativos</h3>
          <p className="text-3xl font-bold text-blue-400">0</p>
          <p className="text-sm text-gray-400">Total de materiais</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">Fornecedores</h3>
          <p className="text-3xl font-bold text-green-400">0</p>
          <p className="text-sm text-gray-400">Cadastrados</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">POs Abertos</h3>
          <p className="text-3xl font-bold text-yellow-400">0</p>
          <p className="text-sm text-gray-400">Pendentes</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">Valor em Compras</h3>
          <p className="text-3xl font-bold text-purple-400">R$ 0,00</p>
          <p className="text-sm text-gray-400">Este mês</p>
        </div>
      </div>

      {/* Módulos do MM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mmModules.map((module) => {
          const Icon = module.icon
          return (
            <Link
              key={module.href}
              href={module.href}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-gray-750 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-400 mb-3">{module.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {module.count} itens
                    </span>
                    <span className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                      Acessar →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
