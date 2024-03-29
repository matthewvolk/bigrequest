require('@bigcommerce/eslint-config/patch');

module.exports = {
  extends: ['@bigcommerce/eslint-config'],
  ignorePatterns: ['/node_modules/**', '/dist/**', '/src/generated/**'],
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': ['off'],
      },
    },
  ],
};
