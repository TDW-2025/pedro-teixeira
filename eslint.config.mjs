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
      // Esta regra será sobreposta depois
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Node configs
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

  // ✅ JSX/TSX override final para React 17+
  {
    files: ["**/*.{jsx,tsx}"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
]);
