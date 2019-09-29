/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from 'node-fetch';

import { Recipe, SearchFilter } from '../types';
import createParamString from '../utils/urlHelpers';

// Not handling errors in searchRecipes and findRecipeByURI functions
// Because we want thrown errors to be automatically handled by GraphQL Client

/**
 * Search for recipes from Edamam Recipe API
 *
 */
export async function searchRecipes(query: string, filters?: SearchFilter): Promise<Recipe[]> {
  // Search recipe url with API credentials
  const baseUrl = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`;

  // Url for searching for recipes by a search query
  let searchUrl = `${baseUrl}&q=${query}`;

  // If filters are set, appends them to searchUrl in correct query param format
  if (filters) {
    // Get requested filtering
    const { healthLabels, dietLabels } = filters;

    // Add filtering to search url
    if (healthLabels) {
      const healthLabelsString = await createParamString(healthLabels, 'health');
      searchUrl += `&${healthLabelsString}`;
    }
    if (dietLabels) {
      const dietLabelsString = await createParamString(dietLabels, 'diet');
      searchUrl += `&${dietLabelsString}`;
    }
  }

  const jsonResult = await fetch(searchUrl);
  const result = await jsonResult.json();

  const recipeHits: Array<object> = result.hits;

  const recipes = await recipeHits.map((current: any) => {
    const { recipe: curRecipe } = current;
    const {
      yield: servings, url: sourceUrl, ingredientLines: ingredients, uri,
    } = curRecipe;

    const encodedUri = encodeURIComponent(uri);

    const recipe: Recipe = {
      ...curRecipe, servings, sourceUrl, ingredients, encodedUri,
    };
    return recipe;
  });

  return recipes;
}


/**
 * Find a specific recipe from Edamam Recipe API
 *
 */
export async function findRecipeByURI(encodedRecipeUri: string): Promise<Recipe> {
  const baseUrl = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`;

  // Encode URI, this is required to work with Edamams API
  // const encodedRequestUri = encodeURIComponent(recipeUri);
  // const requestUrl = `${baseUrl}&r=${encodedRequestUri}`;
  const requestUrl = `${baseUrl}&r=${encodedRecipeUri}`;

  // Request recipe from Edamam and await result
  const jsonResult = await fetch(requestUrl);
  const result = await jsonResult.json();

  // Add 'yield' as 'servings' instead because 'yield' is a specific keyword in JS
  const {
    yield: servings,
    url: sourceUrl,
    source,
    label,
    image,
    ingredientLines: ingredients,
    calories,
    totalWeight,
    healthLabels,
    dietLabels,
  } = result[0];

  const recipe: Recipe = {
    label,
    encodedUri: encodedRecipeUri,
    image,
    ingredients,
    calories,
    totalWeight,
    healthLabels,
    dietLabels,
    servings,
    source,
    sourceUrl,
  };

  return recipe;
}
