import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    reactPlugin.configs.flat.recommended,
    eslintConfigPrettier,
  ],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    react: react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
});
