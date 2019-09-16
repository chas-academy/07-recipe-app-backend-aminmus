import { queryType, objectType, stringArg } from 'nexus';

import { searchRecipes, searchRecipe } from './recipeSearch';


const Recipe = objectType({
  name: 'Recipe',
  definition(t) {
    t.string('uri');
    t.string('label');
    t.string('image');
    t.int('yield');
    t.float('calories');
    t.float('totalWeight');


    // t.list.field('healthLabels', {
    //   type: HealthLabel,
    //   args:
    // });
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
      args: { uri: stringArg({ nullable: false }) },
      resolve: (_root, { uri }) => searchRecipe(uri),
    });
  },
});
export default { Recipe, Query };
