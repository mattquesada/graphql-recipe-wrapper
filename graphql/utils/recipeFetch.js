// custom utilities for fetching data from HTTP endpoints
const fetch = require('node-fetch');

const baseURL = 'http://www.recipepuppy.com/api/?';

// add optional arguments to @baseURL before querying via HTTP
const constructFullURL = (dishName, ingredientList) => {
  let fullURL = baseURL;

  // append main dish type
  if(dishName) 
    fullURL += `q=${dishName}&`;

  // append ingredients 
  if(ingredientList) { 
    fullURL += `i=`;
    for (let index = 0; index < ingredientList.length; index++) {
      fullURL += ingredientList[index];
    }
  } 

  return fullURL;
};

// given a list of ingredients, construct the 
// endpoint address and query the RecipePuppy api
const fetchRecipes = (dishName, ingredientList) => {
  let query = constructFullURL(dishName, ingredientList);
  return fetch(query)
    .then(res => res.json())
    .catch(err => console.log(`Error in fetchRecipes(): ${err}.`));
};

module.exports = {
  fetchRecipes
};