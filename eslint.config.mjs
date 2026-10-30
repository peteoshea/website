import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['**/.next/*', '**/coverage/*', '**/node_modules/*', '**/out/*']),
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.vitest,
        ...globals.node
      }
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-use-before-define': 0,

      '@typescript-eslint/no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_'
        }
      ],

      'no-console': [
        2,
        {
          allow: ['warn', 'error']
        }
      ]
    }
  }
]);
