module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  plugins: ['prettier', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'prettier/prettier': ['error', { trailingComma: 'es5' }],
    'no-console': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off'
  },
};
