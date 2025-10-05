// eslint.config.mjs
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      js,
      "@typescript-eslint": tseslint.plugin,
      react: reactPlugin,
    },
    rules: {
      // Regras JS + TS base
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[0].rules,

      // Regras React
      ...reactPlugin.configs.recommended.rules,

      // Corrige o teu problema — não precisa de React em escopo
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // Outras sugestões
      "react/prop-types": "off",
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Configurações para testes
  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/__tests__/**/*"],
    languageOptions: {
      globals: {
        ...globals.jest,
        global: "readonly",
      },
    },
  },
];
