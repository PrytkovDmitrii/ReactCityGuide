const globals = require("globals");
const pluginJs = require("@eslint/js");
const pluginReact = require("eslint-plugin-react");

module.exports = [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Глобальные переменные для браузера
        ...globals.es2021,  // Глобальные переменные для ES2021
        ...globals.jest,    // Глобальные переменные для Jest
      },
      ecmaVersion: 'latest', // Версия ECMAScript
      sourceType: 'module',  // Использование модулей
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Поддержка JSX
        },
      },
    },
  },
  pluginJs.configs.recommended, // Рекомендуемые правила от ESLint
  pluginReact.configs.flat.recommended, // Рекомендуемые правила для React
  {
    settings: {
      react: {
        version: '18.2.0', // Укажите версию React или используйте 'detect'
      },
    },
  },
  {
    rules: {
      'react/prop-types': 'error', // Правило для проверки prop-types
      'react/jsx-key': 'error', // Правило для проверки ключей в JSX
      'react/no-unknown-property': ['error', { ignore: ['class'] }], // Игнорировать атрибут 'class'
    },
  },
];