require('@bigcommerce/eslint-config/patch');

module.exports = {
  extends: ['@bigcommerce/eslint-config'],
  ignorePatterns: ['/node_modules/**', '/dist/**', '/src/generated/**'],
  rules: {
    'no-object-constructor': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': ['off'],
      },
    },
  ],
};
