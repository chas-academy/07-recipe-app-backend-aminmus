/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from 'node-fetch';

import { Recipe, SearchFilter } from '../types';

// Generate a string of query parameters of same parameter type
function createParamString(paramsArray: Array<string>, paramName: string): string {
  return paramsArray.reduce((prev, cur, index, array) => {
    if ((index + 1) === array.length) {
      return `${prev}${cur}`;
    }
    return `${prev}${cur}&${paramName}=`;
  }, `${paramName}=`);
}

/**
* Not handling errors in searchRecipes and searchRecipe fns
* Because we want thrown errors to be automatically handled by GraphQL
*/

export async function searchRecipes(query: string, filters: SearchFilter): Promise<Recipe[]> {
  // Search recipe url with API credentials
  const baseUrl = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`;

  // Get requested filtering
  const { healthLabels, dietLabels } = filters;

  // Url for searching for recipes by a search query
  let searchUrl = `${baseUrl}&q=${query}`;

  // Add filtering to search url
  if (healthLabels) {
    const healthLabelsString = await createParamString(healthLabels, 'health');
    searchUrl += `&${healthLabelsString}`;
  }
  if (dietLabels) {
    const dietLabelsString = await createParamString(dietLabels, 'diet');
    searchUrl += `&${dietLabelsString}`;
  }

  // Request recipes from Edamam and await result
  const jsonResult = await fetch(searchUrl);
  const result = await jsonResult.json();

  const recipesData: Array<object> = result.hits;

  const recipes = await recipesData.map((current: any) => {
    const { recipe } = current;
    return recipe as Recipe;
  });

  return recipes;
}

export async function findRecipe(recipeUri: string): Promise<Recipe> {
  const baseUrl = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`;

  // Encode URI, this is required to work with Edamams API
  const encodedUri = encodeURIComponent(recipeUri);
  const requestUrl = `${baseUrl}&r=${encodedUri}`;

  // Request recipe from Edamam and await result
  const jsonResult = await fetch(requestUrl);
  const result = await jsonResult.json();

  const recipe: Recipe = result[0];

  return recipe;
}
