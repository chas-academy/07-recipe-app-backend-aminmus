import { queryType, objectType, stringArg } from 'nexus';

import { searchRecipes, searchRecipe } from './recipeSearch';

const Recipe = objectType({
  name: 'Recipe',
  definition(t) {
    // TODO: FIX RESOLVING OF NAME AND URI

    t.string('label');
    t.string('uri');
  },
});
const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: { name: stringArg({ nullable: true }) },
      resolve: (_parent, { name }) => `Hello ${name || 'World'}!`,
    });

    t.list.field('searchRecipes', {
      type: Recipe,
      description: 'Search for recipes',
      args: { searchQuery: stringArg({ nullable: false }) },
      resolve: (_root, { searchQuery }) => searchRecipes(searchQuery),
    });

    t.field('searchRecipe', {
      type: Recipe,
      description: 'Find a recipe by uri',
      args: { uri: stringArg() },
      resolve: (_root, { uri }) => searchRecipe(uri),
    });
  },
});

export default { Recipe, Query };
