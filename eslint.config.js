import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

const files = ['**/*.{js,jsx}']
const reactHooksConfig =
  reactHooks.configs?.['recommended-latest'] ?? reactHooks.configs?.recommended ?? {}
const reactRefreshConfig = reactRefresh.configs?.vite ?? reactRefresh.configs?.recommended ?? {}

export default [
  { ignores: ['dist', '**/*.test.{js,jsx}'] },
  { ...js.configs.recommended, files },
  {
    files,
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      ...(reactHooksConfig.rules ?? {}),
      ...(reactRefreshConfig.rules ?? {}),
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'react-refresh/only-export-components': 'off',
    },
  },
]
