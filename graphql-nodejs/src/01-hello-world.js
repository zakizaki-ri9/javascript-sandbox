const { graphql, buildSchema } = require("graphql");

// スキーマを定義
let schema = buildSchema(`
  type Query {
    hello: String
    test: String
  }
`);

// 取得するクエリを定義
let root = {
  hello: () => {
    return "Hello world!";
  },
  test: () => {
    return "Test";
  }
};

// スキーマに対しての問い合わせ
graphql(
  schema,
  `
    {
      hello
      test
    }
  `,
  root
).then(response => {
  // 結果取得
  console.log(response);
});
