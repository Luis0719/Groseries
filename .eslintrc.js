// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    ecmaVersion: 8,
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-console": "warn",
    "import/first": "error",
    "react/prop-types": 0,
    "linebreak-style": ["error", "unix"],
  },
}
