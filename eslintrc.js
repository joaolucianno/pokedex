module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  files: [
    "**/*.{js,mjs,cjs,ts,jsx,tsx}"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  globals: {
    window: "readonly",
    document: "readonly"
  },
  rules: {
    "react/prop-types": "off"
  }
};
