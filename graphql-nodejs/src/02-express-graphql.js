const express = require("express");
const expressGraphql = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return "Hello world!!";
  }
};

const app = express();
app.use(
  "/graphql",
  expressGraphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000);
