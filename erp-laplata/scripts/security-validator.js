#!/usr/bin/env node

/**
 * Security Validator - Guardrail OBRIGATÓRIO
 * ❌ Proibido SERVICE_ROLE_KEY no frontend
 * ✅ Sempre usar RLS + anon key
 */

const fs = require('fs')
const path = require('path')

const FORBIDDEN_PATTERNS = [
  /SERVICE_ROLE_KEY/g,
  /service_role/g,
  /createClient.*service_role/g,
  /supabase.*service_role/g,
  /process\.env\.SUPABASE_SERVICE_ROLE_KEY/g,
]

const ALLOWED_PATTERNS = [
  /NEXT_PUBLIC_SUPABASE_ANON_KEY/g,
  /createBrowserClient/g,
  /createServerClient/g,
  /RLS/g,
  /Row Level Security/g,
]

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const errors = []
  
  FORBIDDEN_PATTERNS.forEach((pattern, index) => {
    const matches = content.match(pattern)
    if (matches) {
      matches.forEach(match => {
        const lines = content.substring(0, content.indexOf(match)).split('\n')
        const lineNumber = lines.length
        errors.push({
          file: filePath,
          line: lineNumber,
          pattern: pattern.toString(),
          match: match,
          message: '❌ PROIBIDO: SERVICE_ROLE_KEY no frontend - use RLS + anon key'
        })
      })
    }
  })
  
  return errors
}

function scanDirectory(dir) {
  const errors = []
  const files = fs.readdirSync(dir, { withFileTypes: true })
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name)
    
    if (file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules' && file.name !== 'scripts') {
      errors.push(...scanDirectory(fullPath))
    } else if (file.isFile() && (file.name.endsWith('.ts') || file.name.endsWith('.tsx') || file.name.endsWith('.js') || file.name.endsWith('.jsx')) && !fullPath.includes('scripts/')) {
      errors.push(...scanFile(fullPath))
    }
  }
  
  return errors
}

// Executar validação
const errors = scanDirectory('./')

if (errors.length > 0) {
  console.error('🚨 SECURITY VALIDATOR FALHOU:')
  console.error('')
  errors.forEach(error => {
    console.error(`❌ ${error.file}:${error.line}`)
    console.error(`   ${error.message}`)
    console.error(`   Padrão: ${error.pattern}`)
    console.error(`   Match: ${error.match}`)
    console.error('')
  })
  process.exit(1)
} else {
  console.log('✅ Security validator passou - nenhum SERVICE_ROLE_KEY encontrado')
}
