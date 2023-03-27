module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  globals: {
    jestPuppeteer: "readonly",
    page: "readonly",
  },
  overrides: [
    {
      files: ["*.test.?(m|t)js"],
      env: {
        jest: true,
      },
    },
  ],
};
