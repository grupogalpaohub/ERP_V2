'use client'

import { Bell, User, Settings, LogOut } from 'lucide-react'
import { logout } from '@/lib/auth/actions'

export function Header() {
  return (
    <header className="h-16 bg-[#2d2d2d] border-b border-[#333] flex items-center justify-between px-6">
      {/* Breadcrumb placeholder */}
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <span>ERP LaPlata</span>
        <span>/</span>
        <span className="text-white">Dashboard</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
        </button>

        {/* User menu */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0070f3] rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="text-sm">
            <div className="text-white font-medium">Admin</div>
            <div className="text-gray-400 text-xs">LaPlata Lunaria</div>
          </div>
        </div>

        {/* Settings */}
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Settings className="w-5 h-5" />
        </button>

        {/* Logout */}
        <form action={logout}>
          <button 
            type="submit"
            className="p-2 text-gray-400 hover:text-red-400 transition-colors"
            title="Sair"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </form>
      </div>
    </header>
  )
}
