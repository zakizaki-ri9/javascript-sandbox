module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2018,
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'vue',
    'gridsome',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'plugin:gridsome/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],
  rules: {
    'prettier/prettier': ['error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
      }
    ]
  },
}
