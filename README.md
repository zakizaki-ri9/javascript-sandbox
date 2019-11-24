JavaScript系のお試しリポジトリ

---

# [chrome-extension-sample](./chrome-extension-sample)

Chrome拡張機能のお試し

## コンテキストメニュー

`chrome.contextMenu`配下のメソッドを用いる

### 参考

- Context Menus Sample
  - [manifest.json](https://developer.chrome.com/extensions/examples/api/contextMenus/basic/manifest.json)
  - [sample.js](https://developer.chrome.com/extensions/examples/api/contextMenus/basic/sample.js)

## 実装系メモ

### manifest.jsonの作成

```json
{
  "manifest_version": 2,
  "name": "My Extension",
  "version": "1.0",
  "description": "Extension Sample",
  "content_scripts": [
    {
      "matches": ["http://*/*", "https://*/*"],
      "js": ["main.js"]
    }
  ],
  "permissions": ["tabs"]
}
```

### VS CodeでChrome系のコード補完を効かせる

```bash
npm i -D @types/chrome
```

## 参考リンク

- Chrome公式
  - [Getting Started Tutorial](https://developer.chrome.com/extensions/getstarted)
  - [Manifest File Format](https://developer.chrome.com/extensions/manifest)
- その他
  - [Qiita - Chrome Extension を作って公開する](https://qiita.com/sqrtxx/items/19fd2114430e9e1fb57f)
  - [Blog - TypeScriptによるChrome拡張機能の開発時は型定義ファイルが必要](https://arui.tech/type-definition-file-is-needed-in-developing-chrome-extension-with-typescript/)


# [react-sample](./react-sample)

Reactの練習

## メモ

- `react-scripts eject`
  - `react-scripts`が内包している設定類をエクスポートしてくれる
    - webpack
    - jest
    - etc...

## 参考資料

### create-react-app系

- [Create React AppでReactアプリを開発する](https://blog.excite.co.jp/exdev/25487209/)
- [create-react-app が裏で何をやっているか理解する](https://qiita.com/naohikowatanabe/items/71a8bf477216ef56a5b7)

# [react-webpack](./react-webpack)

React x webpackで最小限な環境づくりを目指すリポジトリ

## メモ

### webpack関連

- [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
  - webpack系コマンド実行時、指定したディレクトリ配下を削除してくれる。

## 参考記事

- Udemy
  - [webpack習得](https://www.udemy.com/course/webpack-crash-course)
- Qiita
  - [Webpack4とBabel(ES6)を使う](https://qiita.com/asylum/items/32415608354028684c05)

# [vue-material-v1-sandbox](./vue-material-v1-sandbox)

VueMaterial v1.x系のお試し

## [vue-material](https://vuematerial.io)系のメモ

### 導入方法

```bash
# インストール
npm i vue-material
```

```javascript
// vue-materialの導入
import Vue from 'vue'
import VueMaterial from 'vue-material'

// スタイル反映
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(VueMaterial)
```

## vee-validate系のメモ

### 導入

```bash
# インストール
npm i vee-validate
```

```javascript
import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'

// ルールの追加
extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
```

### 使用例

```html
<template>
  <validation-observer v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(submit)">
      <validation-provider name="email" rules="required" v-slot="{ errors }">
        <md-field :class="mdFieldClass(errors)"
          ><label>Vee-Validate Required</label>
          <md-input name="email" v-model="field.email" required></md-input>
          <span class="md-error">{{ errors[0] }}</span>
        </md-field>
      </validation-provider>
    </form>
  </validation-observer>
</template>

<script>
export default {
  data() {
    return {
      field: {
        email: ''
      }
    }
  },
  methods: {
    submit() {},
    mdFieldClass(errors) {
      return {
        'md-invalid': errors.length > 0
      }
    }
  }
}
</script>
```

# 参考記事

- VueMaterial
  - https://vuematerial.io
- VeeValidate
  - https://logaretm.github.io/vee-validate/
