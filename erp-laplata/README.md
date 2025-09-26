# LaPlata ERP - Sistema Integrado

Sistema ERP completo para e-commerce com arquitetura multi-tenant, segura e performática.

## 🚀 Setup Inicial

### Pré-requisitos
- Node.js 20 LTS
- Supabase local (via CLI)
- pnpm (recomendado)

### Instalação
```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Editar .env.local com suas credenciais do Supabase

# Executar validações
npm run validate:all

# Executar preflight completo
npm run preflight

# Iniciar desenvolvimento
npm run dev
```

## 🏗️ Estrutura do Projeto

```
/app
  /(shell)           # Layout global
  /mm                # Materiais & Compras
  /sd                # Vendas & Distribuição
  /wh                # Estoque & Armazém
  /fi                # Financeiro
  /co                # Custos & Margens
  /crm               # Clientes
  /analytics         # Relatórios
  /api               # Server Actions

/lib
  /supabase          # Clientes Supabase
  /validators        # Validações Zod
  /ui                # Componentes canônicos

/scripts
  currency-validator.js    # Guardrail moeda
  security-validator.js    # Guardrail segurança
```

## 🛡️ Guardrails (OBRIGATÓRIOS)

### Currency Validator
- ❌ Proibido usar `*10000` ou floats
- ✅ Sempre usar `toCents()` e `formatBRL()`

### Security Validator
- ❌ Proibido `SERVICE_ROLE_KEY` no frontend
- ✅ Sempre usar RLS + anon key

### Scripts Disponíveis
```bash
npm run validate:currency    # Validar moeda
npm run validate:security    # Validar segurança
npm run validate:all         # Todas as validações
npm run preflight           # Validação + lint + build
```

## 🎨 UI/UX (Fiori-like)

- **Design System**: shadcn/ui + Tailwind
- **Layout**: Sidebar fixa + Header + Breadcrumbs
- **Floorplans**: Overview → Worklist → Object Page → Create Page
- **Estados**: Skeleton → Dados/Empty/Error (nunca loading infinito)

## 📊 Módulos

### MM - Materiais & Compras
- Catálogo de materiais
- Fornecedores
- Pedidos de compra (PO)
- Importação CSV

### SD - Vendas & Distribuição
- Central de clientes
- Pedidos de venda (SO)
- Canais (IG, WhatsApp, Site)
- Pagamentos

### WH - Estoque & Armazém
- Saldos por material/armazém
- Movimentações (ledger imutável)
- Recebimento PO
- Expedição SO

### FI - Financeiro
- Contas a pagar (AP)
- Contas a receber (AR)
- Caixa multi-conta
- Invoices

### CO - Custos & Margens
- Valorização (Moving Average)
- COGS reconhecido
- Análise de margens
- Kits/BOM

## 🔧 Configuração

### Variáveis de Ambiente
```env
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key
TENANT_ID=11111111-1111-1111-1111-111111111111
```

### Tenant Fixo (MVP)
- ID: `11111111-1111-1111-1111-111111111111`
- Nome: LaPlata Lunaria
- Multi-tenant preparado para futuro

## 🚨 Regras Zero Tolerância

1. **Sem hardcode de tenant**
2. **Sem SERVICE_ROLE_KEY no frontend**
3. **Sem mocks** (UI sempre reflete DB)
4. **Sem mutações no client**
5. **Sem floats em moeda** (sempre centavos)
6. **Sem regressões** (CI bloqueante)

## 📝 Próximos Passos

1. **Core**: tenant, auth, helpers básicos
2. **SD customizings**: payment methods, terms, channels
3. **MM**: materiais, fornecedores, POs
4. **WH**: estoque, movimentos
5. **CO**: custos, COGS
6. **FI**: financeiro
7. **UI**: floorplans Fiori
8. **Validações**: scripts CI
9. **Testes**: unit + integração + E2E

## 🎯 Objetivo

ERP robusto e consistente para operação em Instagram/WhatsApp/Meta no MVP e site/checkout em seguida, com governança forte (DB↔UI), segurança, performance e automação operacional.