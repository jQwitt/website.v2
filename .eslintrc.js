module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  ignorePAtterns: '*.config.js',
  rules: {
    indent: ['error', 2],
  },
};
