// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";

export default tseslint.config(
  {
    files: ["**/*.ts"],
    ignores: [ "node_modules", "dist", "server.ts", "setup-jest.ts" ],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      'semi' : [ 'error', 'always' ],
      'no-empty': 'warn',
      'no-alert': 'error',
      'no-shadow-restricted-names': 'error',
      'array-bracket-spacing': [ 'error', 'always' ],
      'keyword-spacing': [ 'error', { before: true,  after: true } ],
      'object-curly-spacing': [ 'error', 'always' ],
      // "@typescript-eslint/no-require-imports": "off",
      // "@typescript-eslint/no-explicit-any": "off",
      // "no-undef": "off",
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
