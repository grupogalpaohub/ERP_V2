#!/usr/bin/env node

/**
 * Currency Validator - Guardrail OBRIGATÓRIO
 * ❌ Proibido usar *10000 ou floats
 * ✅ Sempre usar centavos (int)
 */

const fs = require('fs')
const path = require('path')

const FORBIDDEN_PATTERNS = [
  /\*10000/g,
  /\* 10000/g,
  /value \* 10000/g,
  /amount \* 10000/g,
  /price \* 10000/g,
  /total \* 10000/g,
  /parseFloat\(/g,
  /Number\(/g,
  /\.toFixed\(/g,
  /\.toPrecision\(/g,
]

const ALLOWED_PATTERNS = [
  /toCents\(/g,
  /formatBRL\(/g,
  /parseBRL\(/g,
  /Math\.round\(/g,
  /Number\.isInteger\(/g,
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
          message: '❌ PROIBIDO: Use toCents() em vez de *10000'
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
  console.error('🚨 CURRENCY VALIDATOR FALHOU:')
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
  console.log('✅ Currency validator passou - nenhum uso de *10000 encontrado')
}
