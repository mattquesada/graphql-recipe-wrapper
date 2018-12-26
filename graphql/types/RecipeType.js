// defines the recipe type for use in our graphQL schema
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');


const RecipeType = new GraphQLObjectType({
  name: 'RecipeType',
  fields: {
    name: { 
      type: GraphQLString,
      description: 'name of the recipe' 
    },
    recipeURL: { 
      type: GraphQLString,
      description: 'hyperlink to 3rd party website with the recipe'
    },
    ingredients: { 
      type: new GraphQLList(GraphQLString),
      description: 'list of ingredients needed to prepare the recipe'
    }
  }
});

module.exports = RecipeType;