/**
 * Constantes do sistema
 * Guardrail: Tenant fixo até multi-tenant estar ativo
 */

export const TENANT_ID = '11111111-1111-1111-1111-111111111111'

export const MODULES = [
  { name: 'MM', path: '/mm', description: 'Materiais & Compras' },
  { name: 'SD', path: '/sd', description: 'Vendas & Distribuição' },
  { name: 'WH', path: '/wh', description: 'Estoque & Armazém' },
  { name: 'FI', path: '/fi', description: 'Financeiro' },
  { name: 'CO', path: '/co', description: 'Custos & Margens' },
  { name: 'CRM', path: '/crm', description: 'Clientes' },
  { name: 'Analytics', path: '/analytics', description: 'Relatórios' },
] as const

export type ModuleName = typeof MODULES[number]['name']
