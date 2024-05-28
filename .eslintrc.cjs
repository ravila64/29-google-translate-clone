module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2021: true },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides:[
  ],
  parserOptions:{
    ecmaVersion: 'latest',
    sourceType:'module',
    project:'./tsconfig-json'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'react'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type':'off',
    'react/react-in-jsx-scope':'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
