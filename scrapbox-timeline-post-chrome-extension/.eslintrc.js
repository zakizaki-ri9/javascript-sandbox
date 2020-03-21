module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-undef': 'off'
  },
  overrides: [
    // TypeScript系ファイルへのルールを設定
    {
      files: ['**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint'],
      rules: {
        // TypeScript系のファイルに対しての設定を行う
      }
    }
  ]
}
