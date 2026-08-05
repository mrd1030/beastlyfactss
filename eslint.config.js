import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginUnusedImports from "eslint-plugin-unused-imports";

export default [
  // Vendored, generated, and deliberately out-of-scope code. This has to be a
  // top-level ignores block rather than the `ignores` key on the config below:
  // a config's own ignores only removes files from that config, it does not
  // stop ESLint reading them. So these files were still being parsed with no
  // rules registered, and every stray eslint-disable comment inside them was
  // reported as referring to an undefined rule. ds-bundle/_vendor/react.js
  // carries 58 such comments for React's internal ruleset and accounted for 32
  // of the 35 errors on its own.
  {
    ignores: [
      "ds-bundle/**",
      "dist/**",
      "src/lib/**",
      "src/components/ui/**",
    ],
  },
  {
    files: [
      "src/components/**/*.{js,mjs,cjs,jsx}",
      "src/pages/**/*.{js,mjs,cjs,jsx}",
      "src/Layout.jsx",
    ],
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      "no-unused-vars": "off",
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": [
        "error",
        // fetchpriority: React 18 only passes the lowercase DOM attribute
        // through; the camelCase prop doesn't exist until React 19.
        { ignore: ["cmdk-input-wrapper", "toast-close", "fetchpriority"] },
      ],
      "react-hooks/rules-of-hooks": "error",
    },
  },
];
