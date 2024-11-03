import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import unicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  jsdoc.configs["flat/recommended-typescript-error"],
  sonarjs.configs.recommended,
  /** @ts-expect-error Waiting for https://github.com/sindresorhus/eslint-plugin-unicorn/pull/2381 */
  unicorn.configs["flat/all"],
  { ignores: ["*", "!src"] },
  {
    files: ["src/**/*"],
    languageOptions: {
      parserOptions: {
        project: ["tsconfig.json"],
      },
    },
    rules: {
      curly: "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-implicit-coercion": "error",
      "sort-imports": "warn",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowExpressions: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-invalid-void-type": [
        "error",
        {
          allowAsThisParameter: true,
        },
      ],
      "unicorn/no-array-reduce": "warn",
      "unicorn/no-empty-file": "warn",
      "unicorn/no-keyword-prefix": "off",
      // I believe null should be allowed as it has different meaning vs undefined
      "unicorn/no-null": "off",
      // Prettier takes care of ternaries
      "unicorn/no-nested-ternary": "off",
      // TypeScript may sometimes expect a undefined literal as a last argument
      "unicorn/no-useless-undefined": ["error", { checkArguments: false }],
      "unicorn/numeric-separators-style": [
        "error",
        {
          onlyIfContainsSeparator: true,
        },
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            // Unambiguous
            arg: {
              argument: false,
            },
            args: {
              arguments: false,
            },
            ctx: {
              context: false,
            },
            fn: {
              function: false,
            },
            params: {
              parameters: false,
            },
            // Idiomatic React abbreviations
            props: {
              properties: false,
            },
            ref: {
              reference: false,
            },
          },
        },
      ],
    },
  },
);
