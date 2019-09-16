/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from 'node-fetch';

import { Recipe } from '../types';

/* Not handling errors in searchRecipes and searchRecipe fns
** Because we want thrown errors to be automatically handled by GraphQL
*/

// TODO: Add filters parameter
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

  const recipes = await recipesData.map((current: any) => {
    const { recipe } = current;
    return recipe as Recipe;
  });
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
  const result = await jsonResult.json();

  const recipe: Recipe = result[0];

  // Return recipe
  return recipe;
}
