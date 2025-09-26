'use client'

import { useState } from 'react'

export default function TestPage() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-white">Teste de Funcionalidade</h1>
      
      <div className="space-y-6">
        {/* Teste de Estado */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Teste de Estado (useState)</h2>
          <p className="text-gray-300 mb-4">Contador: {count}</p>
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Incrementar
          </button>
        </div>

        {/* Teste de Input */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Teste de Input</h2>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite algo aqui..."
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <p className="text-gray-300 mt-2">Você digitou: {input}</p>
        </div>

        {/* Teste de CSS */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Teste de CSS Tailwind</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-600 p-4 rounded-lg text-white text-center">
              Card Azul
            </div>
            <div className="bg-green-600 p-4 rounded-lg text-white text-center">
              Card Verde
            </div>
            <div className="bg-red-600 p-4 rounded-lg text-white text-center">
              Card Vermelho
            </div>
          </div>
        </div>

        {/* Teste de Formulário */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Teste de Formulário</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert('Formulário funcionando!'); }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Enviar Formulário
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

