import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Configuração geral para JS/TS/JSX/TSX
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      react: pluginReact,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.recommended, // mantém regras básicas de React
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Desliga a regra de React em escopo (Next 15/React 18+)
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off", // se usares TS, podes desligar
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Configurações para ficheiros de Node (configs, babel.config.js, etc.)
  {
    files: ["**/*.config.js", "**/*.config.cjs", "babel.config.js"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "no-undef": "off",
    },
  },

  // Configurações para testes (Jest)
  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/__tests__/**/*", "jest.setup.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
        global: "readonly",
      },
    },
    rules: {
      "no-undef": "off",
    },
  },
]);
