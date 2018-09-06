const {
  GraphQLSchema,
  GraphQLObjectType
} = require('graphql');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'GraphQL entry point for all queries',
  fields: {

  }
});

const schema = new GraphQLSchema({
  query: RootQueryType
});

module.exports = schema;