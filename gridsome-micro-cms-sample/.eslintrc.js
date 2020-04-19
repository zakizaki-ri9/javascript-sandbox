module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  plugins: ['prettier', 'vue', 'gridsome'],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:gridsome/recommended',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  rules: {
    'prettier/prettier': ['error']
  }
}
