Chrome Extensionsのサンプル

# CHrome Extensions系メモ

## コンテキストメニュー

`chrome.contextMenu`配下のメソッドを用いる

### 参考

- Context Menus Sample
  - [manifest.json](https://developer.chrome.com/extensions/examples/api/contextMenus/basic/manifest.json)
  - [sample.js](https://developer.chrome.com/extensions/examples/api/contextMenus/basic/sample.js)

# 実装系メモ

## manifest.jsonの作成

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

## VS CodeでChrome系のコード補完を効かせる

```bash
npm i -D @types/chrome
```

# 参考リンク

- Chrome公式
  - [Getting Started Tutorial](https://developer.chrome.com/extensions/getstarted)
  - [Manifest File Format](https://developer.chrome.com/extensions/manifest)
- その他
  - [Qiita - Chrome Extension を作って公開する](https://qiita.com/sqrtxx/items/19fd2114430e9e1fb57f)
  - [Blog - TypeScriptによるChrome拡張機能の開発時は型定義ファイルが必要](https://arui.tech/type-definition-file-is-needed-in-developing-chrome-extension-with-typescript/)

