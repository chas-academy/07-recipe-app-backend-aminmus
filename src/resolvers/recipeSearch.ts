import fetch from 'node-fetch';

import { Recipe } from '../types';
// // Search recipe url with API credentials
// const baseUrl = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`;

// // Url for searching for recipes by a search query
// const searchUrl = `${baseUrl}&q=chicken`;

// Add filters parameter
export async function searchRecipes(query: string): Promise<Recipe[]> {
  // Search recipe url with API credentials
  const baseUrl = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`;


  // Get the search query
  // Get requested filtering

  // Set query and filtering onto Edamam url
  // Url for searching for recipes by a search query
  const searchUrl = `${baseUrl}&q=${query}`;

  // Request recipes from Edamam and await result
  const jsonResult = await fetch(searchUrl);
  const result = await jsonResult.json();

  const recipesData: Array<object> = result.hits;
  console.log(recipesData);

  const recipes: Recipe[] = await recipesData.map((current: object) => {
    const { recipe } = current;
    const { uri, label } = recipe;

    return { uri, label };
  });

  console.log(recipes);

  // Return results or handle error
  return recipes;
}

export async function searchRecipe(recipeUri: string): Promise<Recipe> {
// Get recipe id/uri
  const baseUrl = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`;

  // Encode URI
  const encodedUri = encodeURIComponent(recipeUri);

  const requestUrl = `${baseUrl}&r=${encodedUri}`;
  // Request recipe from Edamam and await result
  const jsonResult = await fetch(requestUrl);
  const recipe = await jsonResult.json();

  console.log(recipe);

  // Return recipe or handle error
  return recipe[0];
}
