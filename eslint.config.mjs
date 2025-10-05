// eslint.config.mjs
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser, // 👈 importante para .ts/.tsx
      parserOptions: {
        projectService: true, // 👈 substitui "project: true" (forma moderna no ESLint 9)
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect", // autodetecta versão 19
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React 17+ não precisa de import React
      "no-unused-vars": "warn",
    },
  },
);
