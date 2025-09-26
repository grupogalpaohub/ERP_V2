'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, X } from 'lucide-react'

export default function NewMaterialPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    pn: '',
    name_commercial: '',
    description: '',
    material_type_code: '',
    material_class_code: '',
    uom: '',
    lead_time_days: 0,
    vendor_id: '',
    purchase_link: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // TODO: Implementar criação de material
      console.log('Criando material:', formData)
      
      // Simular delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      router.push('/mm/materials')
    } catch (error) {
      console.error('Erro ao criar material:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <Link href="/mm" className="hover:text-white transition-colors">MM</Link>
          <span>→</span>
          <Link href="/mm/materials" className="hover:text-white transition-colors">Materiais</Link>
          <span>→</span>
          <span className="text-white">Novo Material</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/mm/materials"
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Novo Material</h1>
            <p className="text-gray-400">Cadastre um novo material no sistema</p>
          </div>
        </div>
      </div>

      {/* Formulário */}
      <div className="max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Informações Básicas */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Informações Básicas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  PN (Part Number) *
                </label>
                <input
                  type="text"
                  name="pn"
                  value={formData.pn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Ex: MAT-001"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Comercial *
                </label>
                <input
                  type="text"
                  name="name_commercial"
                  value={formData.name_commercial}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Ex: Parafuso M6x20"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Descrição
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Descrição detalhada do material..."
                />
              </div>
            </div>
          </div>

          {/* Classificação */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Classificação</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de Material *
                </label>
                <select
                  name="material_type_code"
                  value={formData.material_type_code}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Selecione...</option>
                  <option value="RAW">Matéria-Prima</option>
                  <option value="COMP">Componente</option>
                  <option value="FIN">Produto Acabado</option>
                  <option value="TOOL">Ferramenta</option>
                  <option value="CONS">Consumível</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Classe de Material *
                </label>
                <select
                  name="material_class_code"
                  value={formData.material_class_code}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Selecione...</option>
                  <option value="METAL">Metal</option>
                  <option value="PLASTIC">Plástico</option>
                  <option value="ELECTRONIC">Eletrônico</option>
                  <option value="MECHANICAL">Mecânico</option>
                  <option value="CHEMICAL">Químico</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Unidade de Medida *
                </label>
                <select
                  name="uom"
                  value={formData.uom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Selecione...</option>
                  <option value="UN">Unidade</option>
                  <option value="KG">Quilograma</option>
                  <option value="M">Metro</option>
                  <option value="M2">Metro Quadrado</option>
                  <option value="M3">Metro Cúbico</option>
                  <option value="L">Litro</option>
                </select>
              </div>
            </div>
          </div>

          {/* Informações de Compra */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Informações de Compra</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Lead Time (dias)
                </label>
                <input
                  type="number"
                  name="lead_time_days"
                  value={formData.lead_time_days}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  ID do Fornecedor
                </label>
                <input
                  type="text"
                  name="vendor_id"
                  value={formData.vendor_id}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Ex: VEN-001"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Link de Compra
                </label>
                <input
                  type="url"
                  name="purchase_link"
                  value={formData.purchase_link}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>

          {/* Botões */}
          <div className="flex justify-end gap-4">
            <Link
              href="/mm/materials"
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              {loading ? 'Salvando...' : 'Salvar Material'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

