'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Package, 
  ShoppingCart, 
  Warehouse, 
  DollarSign, 
  Calculator, 
  Users, 
  BarChart3,
  Home
} from 'lucide-react'

const modules = [
  { name: 'Home', path: '/', icon: Home, description: 'Dashboard Principal' },
  { name: 'MM', path: '/mm', icon: Package, description: 'Materiais & Compras' },
  { name: 'SD', path: '/sd', icon: ShoppingCart, description: 'Vendas & Distribuição' },
  { name: 'WH', path: '/wh', icon: Warehouse, description: 'Estoque & Armazém' },
  { name: 'FI', path: '/fi', icon: DollarSign, description: 'Financeiro' },
  { name: 'CO', path: '/co', icon: Calculator, description: 'Custos & Margens' },
  { name: 'CRM', path: '/crm', icon: Users, description: 'Clientes' },
  { name: 'Analytics', path: '/analytics', icon: BarChart3, description: 'Relatórios' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">LaPlata ERP</h1>
        <p className="text-sm text-gray-400">Sistema Integrado</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {modules.map((module) => {
          const Icon = module.icon
          const isActive = pathname === module.path || (module.path !== '/' && pathname.startsWith(module.path))
          
          return (
            <Link
              key={module.name}
              href={module.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <div>
                <div className="font-medium">{module.name}</div>
                <div className="text-xs text-gray-400">{module.description}</div>
              </div>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-xs text-gray-500">
          Tenant: LaPlata Lunaria
        </div>
      </div>
    </div>
  )
}
