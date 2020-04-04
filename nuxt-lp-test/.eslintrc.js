module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue'],
  rules: {
    'prettier/prettier': ['error'],
    'no-unused-vars': 'off'
  }
}
