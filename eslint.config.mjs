import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,jsx}"] }, // Добавьте jsx, если используете JSX
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      // Игнорируем символ ">" в контексте JSX
      "react/jsx-no-undef": "off", // Отключаем правило, если оно включено
      "no-unused-vars": ["error", { varsIgnorePattern: "^>$" }], // Игнорируем переменные, соответствующие шаблону ">"
    },
  },
  pluginJs.configs.recommended,
];
