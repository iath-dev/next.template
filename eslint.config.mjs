// eslint.config.mjs
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';

// Necesario para configuraciones heredadas
const compat = new FlatCompat();

export default tseslint.config(
  {
    ignores: ['.next/', 'node_modules/', 'dist/'],
  },
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
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
    files: ['**/*.ts', '**/*.tsx', '**/*.js'],
    plugins: {
      // ... otros plugins
      'prettier': prettierPlugin,
    },
    rules: {
      // ... otras reglas
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          semi: true,
          trailingComma: 'es5',
          singleQuote: true,
          printWidth: 100,
          tabWidth: 2
        }
      ],
    }
  }
);