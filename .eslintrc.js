module.exports = {
    extends: [
      'next/core-web-vitals',
      'eslint:recommended'
    ],
    rules: {
      // Désactiver uniquement la règle des entités non échappées
      'react/no-unescaped-entities': 'off',
      
      // Garder les autres règles importantes activées
      'react/jsx-key': 'error',            // Clés requises dans les listes
      'react/jsx-no-duplicate-props': 'error', // Pas de props dupliquées
      'no-unused-vars': 'warn',            // Variables non utilisées
      'no-undef': 'error',                 // Variables non définies
      'no-console': 'warn',                // Avertissement pour les console.log
      'no-debugger': 'error'               // Pas de debugger en production
    },
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    }
  };