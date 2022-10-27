/* eslint-disable */
const prettierConfig = require("./.prettierrc.json")

module.exports = {
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  plugins: ["@typescript-eslint/eslint-plugin", "react", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": ["error", prettierConfig],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
