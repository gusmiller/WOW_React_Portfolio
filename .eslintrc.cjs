/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * Created by NPM React Scaffolding
 * 
 * Date : 1/10/2024 8:03:28 AM
 *******************************************************************/
module.exports = {
     root: true,
     env: { browser: true, es2020: true },
     extends: [
          'eslint:recommended',
          'plugin:react/recommended',
          'plugin:react/jsx-runtime',
          'plugin:react-hooks/recommended',
     ],
     ignorePatterns: ['dist', '.eslintrc.cjs'],
     parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
     settings: { react: { version: '18.2' } },
     plugins: ['react-refresh'],
     rules: {
          'react-refresh/only-export-components': [
               'warn',
               { allowConstantExport: true },
          ],
     },
}
