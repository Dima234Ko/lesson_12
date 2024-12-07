import globals from "globals";
import babelEslint from "@babel/eslint-parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
      parser: babelEslint, 
      parserOptions: {
        requireConfigFile: false, 
        ecmaVersion: 2021, 
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, 
        },
      },
    },
    rules: {
      "no-unused-vars": "off", 
      "no-console": "off", 
    },
  },
];
