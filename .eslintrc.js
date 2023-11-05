module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'max-len': ['error', { code: 120 }],
  },
  ignorePatterns: ['__mocks__/**'],
};
