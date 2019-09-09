import { Request, Response } from 'express';

// Search recipe url with API credentials
const baseUrl = `https://api.edamam.com/search?app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}`;

// Url for searching for recipes by a search query
const searchUrl = `${baseUrl}&q=chicken`;

// Edamam API requires recipe URI to be encoded when requesting a specific recipe

// Edamam Recipe URI example
// http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408

// Encoded Edamam Recipe URI example
// http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408

// Url for getting a recipe by id
// const recipeUrl = `${baseUrl}&r=${encodedRecipeUri}`;

const get = (req: Request, res: Response): Response => {
  // Get recipe id/uri
  // Encode URI
  // Request recipe from Edamam and await result
  // Return recipe or handle error
};

const search = (req: Request, res: Response): Response => {
  // Get the search query
  // Get requested filtering
  // Set query and filtering onto Edamam url
  // Request recipes from Edamam and await result
  // Return results or handle error
};
