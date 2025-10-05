import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Configuração geral
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // ✅ Permitir module.exports em ficheiros de config
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

  // ✅ Permitir Jest globals nos testes
  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/__tests__/**/*"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      "no-undef": "off",
    },
  },

  // ✅ Permitir globals no jest.setup.js
  {
    files: ["jest.setup.js"],
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
