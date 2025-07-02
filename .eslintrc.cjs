module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off", // TODO: enable
  },
};
