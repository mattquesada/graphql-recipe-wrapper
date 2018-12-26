const {
  GraphQLList,
  GraphQLString,
} = require('graphql');

// Import GraphQL return type
const RecipeType = require('../types/RecipeType');

// Utilities imports
const recipeFetch = require('../utils/recipeFetch');

const RecipesQuery = {
  type: new GraphQLList(RecipeType),
    description: 'Generate a list of recipes based on complete ("omelette", "spaghetti").',
      args: {
    dish: {
      type: GraphQLString,
        description: 'Example dishes include "omelette", "pasta", "pizza".'
    },
    ingredients: {
      type: new GraphQLList(GraphQLString),
        description: 'Example ingredients include "tomato", "bananas"...'
    }
  },
  resolve: async (parent, args) => {
    let recipeList = [];

    // pass null for the second argument @ingredientList
    await recipeFetch.fetchRecipes(args.dish, args.ingredients).then(result => {
      for (let recipe of result.results) {
        // result ingredient list is a single string, 
        // parse into an array
        let ingredientsList = recipe.ingredients.split(',');

        recipeList.push({
          name: recipe.title,
          recipeURL: recipe.href,
          ingredients: ingredientsList
        });
      }
    });
    return recipeList;
  }
};

module.exports = RecipesQuery;