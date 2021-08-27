module.exports = {
  env: {
    commonjs: false,
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
  },
  settings: {
    'import/resolver': {
      jest: {
        jestConfigFile: './jest.config.js',
      },
    },
    react: {
      version: 'detect',
    },
  },
};
