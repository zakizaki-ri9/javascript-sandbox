
# nuxtのお試しリポジトリ

## [ディレクトリ構造](https://ja.nuxtjs.org/guide/directory-structure)

### [assets](./assets)

非コンパイルファイルを格納する。

- Stylus
- Sass
- Image
- Font
- etc...

### [components](./components)

コンポーネントVueファイルを格納する。

### [layouts](./layouts)

ヘッダー・サイドバー等のレイアウト系ファイルを格納する。

### [middleware](./middleware)

レンダリング前に事項するかkスタム関数を定義する。

- サーバサイドの挙動
  - 最初のリクエスト
  - ページ再読み込み時
  - etc...
- クライアントサイドの挙動
  - ルーティング
  - etc...

#### 実行順序

1. `nuxt.config.js`のファイル内順
2. マッチしたレイアウト
3. マッチしたページ

非同期実行も可能。

- [Nuxt.js - middlewareについて](https://ja.nuxtjs.org/guide/routing/#%E3%83%9F%E3%83%89%E3%83%AB%E3%82%A6%E3%82%A7%E3%82%A2)

### [pages](./pages)

ビュー・ルーティングファイルを格納する。

### [plugins](./plugins)

以下の用途で使用するファイルを格納する。

- アプリケーションのインスタンス化前に実行したい内容
- グローバルコンポーネントの登録

### [static](./static)

サーバのルートに配置されるファイルを格納する。

### [store](./store)

Vuexストアのファイルを格納する。

## [設定](https://ja.nuxtjs.org/guide/configuration)

- Nuxt.jsでは、[`nuxt.config.js`](./nuxt.config.js)にビルド等の情報を記載する
- 設定する情報はざっくり以下
  - ビルド
  - グローバルCSS
  - 開発環境
  - 環境変数
  - 静的サイトを生成する際の情報
  - メタタグ
  - [Nuxtモジュール](https://ja.nuxtjs.org/api/configuration-modules/)
  - ルーティング
  - サーバー設定
  - ディレクトリ構成のカスタマイズ
  - 非同期処理の設定

# 参考文献

- [公式ページ](https://ja.nuxtjs.org/)
