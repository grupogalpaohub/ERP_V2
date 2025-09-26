'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MODULES } from '@/lib/constants'
import { 
  Package, 
  ShoppingCart, 
  Warehouse, 
  DollarSign, 
  Calculator, 
  Users, 
  BarChart3 
} from 'lucide-react'

const moduleIcons = {
  MM: Package,
  SD: ShoppingCart,
  WH: Warehouse,
  FI: DollarSign,
  CO: Calculator,
  CRM: Users,
  Analytics: BarChart3,
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-[#1a1a1a] border-r border-[#333] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#333]">
        <h1 className="text-xl font-bold text-white">LaPlata ERP</h1>
        <p className="text-sm text-gray-400">Sistema Integrado</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {MODULES.map((module) => {
          const Icon = moduleIcons[module.name as keyof typeof moduleIcons]
          const isActive = pathname.startsWith(module.path)
          
          return (
            <Link
              key={module.name}
              href={module.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-[#0070f3] text-white' 
                  : 'text-gray-300 hover:bg-[#333] hover:text-white'
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
      <div className="p-4 border-t border-[#333]">
        <div className="text-xs text-gray-500">
          Tenant: LaPlata Lunaria
        </div>
      </div>
    </div>
  )
}
