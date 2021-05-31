module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'no-unused-expressions': 0,
    'no-console': 0,
    'react/jsx-filename-extension': 0,
    'max-len': 0,
    'no-shadow': 0,
    'react/no-array-index-key': 0,
    'object-curly-newline': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'arrow-parens': 0,
    'react/destructuring-assignment': 0,
    'consistent-return': 0
  }
};
