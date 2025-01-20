const globals = require("globals");
const pluginJs = require("@eslint/js");
const pluginReact = require("eslint-plugin-react");
const pluginPrettier = require("eslint-plugin-prettier");
const pluginUnusedImports = require("eslint-plugin-unused-imports");

module.exports = [
  // Базовые настройки
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Применять ко всем JS/TS файлам
    languageOptions: {
      globals: {
        ...globals.browser, // Глобальные переменные для браузера
        ...globals.es2021, // Глобальные переменные для ES2021
        ...globals.jest, // Глобальные переменные для Jest
      },
      ecmaVersion: "latest", // Использовать последнюю версию ECMAScript
      sourceType: "module", // Использовать ES-модули
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Включить поддержку JSX
        },
      },
    },
  },

  // Рекомендуемые правила от ESLint
  pluginJs.configs.recommended,

  // Рекомендуемые правила для React
  {
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/jsx-uses-vars": "error", // Помечает переменные, используемые в JSX, как использованные
      "react/jsx-uses-react": "error", // Помечает React как использованный, если он используется в JSX
      "react/prop-types": "off", // Отключить проверку prop-types (если используется TypeScript)
      "react/react-in-jsx-scope": "off", // Отключить требование импорта React в каждом файле (для React 17+)
    },
    settings: {
      react: {
        version: "detect", // Автоматически определять версию React
      },
    },
  },

  // Интеграция с Prettier
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error", // Включить правила Prettier
    },
  },

  // Правило для неиспользуемых импортов и переменных
  {
    plugins: {
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error", // Ошибка для неиспользуемых импортов
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all", // Проверять все переменные
          varsIgnorePattern: "^React$", // Игнорировать переменную React
          args: "after-used", // Проверять неиспользуемые аргументы
          argsIgnorePattern: "^_", // Игнорировать неиспользуемые аргументы, начинающиеся с _
        },
      ],
    },
  },

  // Дополнительные правила
  {
    rules: {
      "no-console": "warn", // Предупреждать о console.log
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^React$", // Игнорировать переменную React
          argsIgnorePattern: "^_", // Игнорировать неиспользуемые аргументы, начинающиеся с _
          ignoreRestSiblings: true, // Игнорировать неиспользуемые свойства в деструктуризации
        },
      ],
    },
  },
];
