# 🧪 ROTEIRO DE TESTES MANUAIS - AUTENTICAÇÃO

## ✅ CORREÇÃO APLICADA
- **Bug**: Redirect infinito em `/login`
- **Fix**: Excluído `/login` do matcher do middleware
- **Commit**: `fix(auth): exclude /login from middleware redirect loop`

---

## 🔍 TESTE 1: ACESSO À TELA DE LOGIN

### Passos:
1. Abrir navegador
2. Acessar `http://localhost:3000/login`
3. **Resultado esperado**: Tela de login carrega normalmente, SEM loop infinito

### ✅ Critério de sucesso:
- Página de login aparece
- Não há redirecionamentos infinitos
- Console do navegador sem erros de redirect

---

## 🔍 TESTE 2: LOGIN FUNCIONAL

### Passos:
1. Na tela de login, inserir:
   - **Email**: `admin@teste.com`
   - **Senha**: `teste123`
2. Clicar em "Entrar"
3. **Resultado esperado**: Redirecionamento para página principal

### ✅ Critério de sucesso:
- Login bem-sucedido
- Redirecionamento para `/` ou página principal
- Sessão criada (cookies `sb-access-token`)

---

## 🔍 TESTE 3: NAVEGAÇÃO AUTENTICADA

### Passos:
1. Após login, navegar para:
   - `http://localhost:3000/mm` (Materiais)
   - `http://localhost:3000/sd` (Vendas)
   - `http://localhost:3000/wh` (Warehouse)
   - `http://localhost:3000/fi` (Financeiro)
   - `http://localhost:3000/co` (Controlling)
2. **Resultado esperado**: Todas as páginas carregam normalmente

### ✅ Critério de sucesso:
- Todas as páginas acessíveis
- Sidebar e header aparecem
- Dados carregam (se houver)

---

## 🔍 TESTE 4: PROTEÇÃO DE ROTAS

### Passos:
1. Abrir nova aba (modo incógnito)
2. Tentar acessar `http://localhost:3000/mm`
3. **Resultado esperado**: Redirecionamento para `/login`

### ✅ Critério de sucesso:
- Redirecionamento automático para login
- URL contém `?next=/mm`
- Após login, volta para `/mm`

---

## 🔍 TESTE 5: REFRESH DA PÁGINA

### Passos:
1. Estar logado em qualquer página autenticada
2. Pressionar F5 (refresh)
3. **Resultado esperado**: Página recarrega mantendo a sessão

### ✅ Critério de sucesso:
- Página recarrega normalmente
- Não volta para login
- Dados permanecem carregados

---

## 🔍 TESTE 6: LOGOUT

### Passos:
1. Estar logado
2. Clicar em logout (se houver botão)
3. **Resultado esperado**: Volta para tela de login

### ✅ Critério de sucesso:
- Sessão encerrada
- Redirecionamento para login
- Cookies de sessão removidos

---

## 🔍 TESTE 7: MIDDLEWARE EM DIFERENTES ROTAS

### Passos:
1. Testar acesso direto a:
   - `http://localhost:3000/` (raiz)
   - `http://localhost:3000/analytics`
   - `http://localhost:3000/crm`
2. **Resultado esperado**: Redirecionamento para login se não autenticado

### ✅ Critério de sucesso:
- Todas as rotas protegidas redirecionam
- Apenas `/login` é acessível sem autenticação

---

## 🚨 PONTOS DE ATENÇÃO

### ❌ Problemas que NÃO devem ocorrer:
- Loop infinito de redirecionamentos
- Erro 500 no servidor
- Página em branco
- Console com erros de JavaScript

### ✅ Comportamentos esperados:
- Login funciona normalmente
- Rotas protegidas redirecionam corretamente
- Sessão mantida após refresh
- Logout funciona (se implementado)

---

## 📋 CHECKLIST FINAL

- [ ] `/login` carrega sem loop
- [ ] Login com `admin@teste.com` funciona
- [ ] Navegação entre módulos funciona
- [ ] Rotas protegidas redirecionam corretamente
- [ ] Refresh mantém sessão
- [ ] Logout funciona (se disponível)
- [ ] Console sem erros

---

## 🎯 RESULTADO ESPERADO

**TODOS os testes devem passar!**

Se algum teste falhar, anotar:
- Qual teste falhou
- Mensagem de erro (se houver)
- Screenshot do problema
- Console do navegador

---

## 🔧 COMANDOS ÚTEIS

```bash
# Verificar se servidor está rodando
netstat -an | findstr :3000

# Reiniciar servidor se necessário
npm run dev

# Verificar logs do servidor
# (observar terminal onde npm run dev está rodando)
```
