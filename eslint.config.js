import { dirname } from 'path'
import { fileURLToPath } from 'url'
import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin
    },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'max-len': 'off',
    }
  }
]

export default eslintConfig