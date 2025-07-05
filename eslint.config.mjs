import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  js.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Add specific ESLint rules
      "react/react-in-jsx-scope": "off",
      "semi": ["error", "always"],
      "eol-last": ["error", "always"],
      "quotes": ["error", "single"],
    }
  }
];
