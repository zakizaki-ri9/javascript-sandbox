JavaScript系のお試しリポジトリ

---

# [chrome-extension-sample](./javascript-sandbox/chrome-extension-sample)

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
