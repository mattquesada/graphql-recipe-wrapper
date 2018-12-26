const express = require('express');
const GraphQLHTTP = require('express-graphql');

// graphql schema import
const schema = require('./graphql/schema/index');

// graphQL debugging endpoint
const graphQLEndpoint = '/graphql';

// TODO - do something with the root resolver
const root = { 
  message: () => 'Hello World!'
};

const portNumber = 4000;
const app = express();

app.use(graphQLEndpoint, GraphQLHTTP({
  schema, 
  rootValue: root,
  graphiql: true
}));

app.listen(portNumber, () =>
  console.log(`Server now listening at ${portNumber}. GraphQL debugging available at ${graphQLEndpoint}`)
);