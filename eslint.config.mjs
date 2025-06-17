// eslint.config.mjs
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';

// Necesario para configuraciones heredadas
const compat = new FlatCompat();

export default tseslint.config(
  {
    // Configuración base
    ignores: ['.next/', 'node_modules/', 'dist/'],
  },
  // Configuración para TypeScript
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  // Configuración para Next.js (usando compatibilidad)
  ...compat.config({
    extends: [
      'plugin:@next/next/recommended',
      'plugin:@next/next/core-web-vitals'
    ],
    rules: {
      '@next/next/no-html-link-for-pages': 'off'
    }
  }),
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'simple-import-sort': simpleImportSort,
      'prettier': prettierPlugin,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: true,
        JSX: true,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Reglas base
      'no-console': 'warn',
      'no-unused-vars': 'off',
      
      // TypeScript
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      
      // Organización de imports
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^next'],
            ['^@?\\w'],
            ['^(@components|@utils|@lib|@styles)(/.*|$)'],
            ['^\\.'],
            ['^.+\\.(css|scss)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      
      // Prettier
      'prettier/prettier': 'error',
    },
  },
  {
    // Configuración para archivos JavaScript (opcional)
    files: ['**/*.js'],
    extends: [eslint.configs.recommended],
    languageOptions: {
      globals: globals.browser,
    },
  }
);