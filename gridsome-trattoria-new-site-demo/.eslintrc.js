module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:gridsome/recommended',
    'plugin:vue/recommended',
    'plugin:prettier-vue/recommended',
    'prettier/vue'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['gridsome', 'prettier'],
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'prettier/prettier': 'error'
      }
    },
    {
      files: ['**/*.vue'],
      rules: {
        'prettier-vue/prettier': [
          'error',
          {
            singleQuote: true,
            semi: false
          }
        ]
      }
    }
  ]
}
