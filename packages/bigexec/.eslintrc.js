// .eslintrc.js
require('@bigcommerce/eslint-config/patch');

module.exports = {
  extends: ['@bigcommerce/eslint-config'],
  ignorePatterns: ['/node_modules/**', '/dist/**'],
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': ['off'],
      },
    },
    {
      files: ['src/**/*.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
