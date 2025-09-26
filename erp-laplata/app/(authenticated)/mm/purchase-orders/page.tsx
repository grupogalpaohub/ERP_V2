import Link from 'next/link'

export default function PurchaseOrdersPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Pedidos de Compra</h1>
            <p className="text-neutral-400">Criação e acompanhamento de pedidos de compra</p>
          </div>
          <Link 
            href="/mm/purchase-orders/new" 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Novo Pedido
          </Link>
        </div>
      </div>

      {/* Placeholder para lista de pedidos */}
      <div className="bg-neutral-900 rounded-lg p-8 text-center">
        <div className="text-neutral-400 mb-4">
          <svg className="mx-auto h-12 w-12 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-neutral-300 mb-2">Nenhum pedido de compra cadastrado</h3>
        <p className="text-neutral-400 mb-4">
          Comece criando seu primeiro pedido de compra para gerenciar suas aquisições.
        </p>
        <Link 
          href="/mm/purchase-orders/new" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          Criar Primeiro Pedido
        </Link>
      </div>
    </div>
  )
}
