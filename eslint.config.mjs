import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Configuração geral para JS/TS
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    rules: {
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Configuração específica para JSX/TSX (React 18 / Next 15)
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    extends: [
      pluginReact.configs.flat.recommended, // mantém regras de React
    ],
    rules: {
      "react/react-in-jsx-scope": "off", // desativa erro de React em scope
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Node configs (configs JS)
  {
    files: ["**/*.config.js", "**/*.config.cjs", "babel.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-undef": "off",
    },
  },

  // Jest tests
  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/__tests__/**/*", "jest.setup.js"],
    languageOptions: {
      globals: {
        global: "readonly",
        ...globals.jest,
      },
    },
    rules: {
      "no-undef": "off",
    },
  },
]);
