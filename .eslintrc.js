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
    {
      files: ['**/*.test.ts'],
      parserOptions: {
        project: require('path').join(__dirname, 'tsconfig.test.json'),
      },
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
      },
    },
  ],
};
