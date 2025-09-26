import Link from 'next/link'

export default function SuppliersPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Fornecedores</h1>
            <p className="text-neutral-400">Gestão de fornecedores e parceiros comerciais</p>
          </div>
          <Link 
            href="/mm/suppliers/new" 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Novo Fornecedor
          </Link>
        </div>
      </div>

      {/* Placeholder para lista de fornecedores */}
      <div className="bg-neutral-900 rounded-lg p-8 text-center">
        <div className="text-neutral-400 mb-4">
          <svg className="mx-auto h-12 w-12 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-neutral-300 mb-2">Nenhum fornecedor cadastrado</h3>
        <p className="text-neutral-400 mb-4">
          Comece cadastrando seu primeiro fornecedor para gerenciar suas compras.
        </p>
        <Link 
          href="/mm/suppliers/new" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          Cadastrar Primeiro Fornecedor
        </Link>
      </div>
    </div>
  )
}
