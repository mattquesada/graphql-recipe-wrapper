const express = require('express');
const GraphQLHTTP = require('express-graphql');

// graphql schema import
const schema = require('./graphql/schema/index');

const portNumber = 3000;
const app = express();

app.use(GraphQLHTTP({
  schema, 
  graphiql: true
}));

app.listen(portNumber);