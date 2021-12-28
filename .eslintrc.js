const SPACE_BEFORE_FUNCTION_PAREN = ['error', {
  anonymous: 'always',
  named: 'never',
  asyncArrow: 'always'
}]

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react-hooks/recommended',
    'standard-with-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': SPACE_BEFORE_FUNCTION_PAREN,
    '@typescript-eslint/space-before-function-paren': SPACE_BEFORE_FUNCTION_PAREN,
    '@typescript-eslint/promise=function-async': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
}
