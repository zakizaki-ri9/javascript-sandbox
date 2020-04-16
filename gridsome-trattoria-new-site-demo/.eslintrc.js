module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2018
  },
  plugins: ['@typescript-eslint', 'prettier', 'vue', 'gridsome'],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:gridsome/recommended',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  rules: {
    'prettier/prettier': ['error']
  },
  overrides: [
    // TypeScript系ファイルへのルールを設定
    {
      files: ['**/*.ts'],
      extends: [
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      rules: {
        // interface等のメンバーを定義する際、複数行にまたがる場合はデミリタ無しとする (prettierとの競合解消)
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
              requireLast: false
            },
            singleline: {
              delimiter: 'comma',
              requireLast: false
            }
          }
        ]
      }
    }
  ]
}
