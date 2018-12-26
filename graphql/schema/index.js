const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

// GraphQL query imports 
const RecipesQuery = require('../queries/RecipesQuery');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'GraphQL entry point for all queries',
  fields: {
    Recipes: RecipesQuery
  }
});

const schema = new GraphQLSchema({
  query: RootQueryType
});

module.exports = schema;