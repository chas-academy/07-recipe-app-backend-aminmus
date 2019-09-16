import {
  queryType, objectType, stringArg, enumType,
} from 'nexus';

import { searchRecipes, searchRecipe } from './recipeSearch';

const Filters = objectType({
  name: 'Filters',
  definition(t) {
    t.field('healthLabels', { type: 'HealthEnum' });
    t.field('dietLabels', { type: 'DietEnum' });
  },
});

const HealthEnum = enumType({
  name: 'HealthEnum',
  members: {
    vegan: 'vegan',
    vegetarian: 'vegetarian',
    sugarConscious: 'sugar-conscious',
    peanutFree: 'peanut-free',
    treeNutFree: 'tree-nut-free',
    alcoholFree: 'alcohol-free',
  },
});

const DietEnum = enumType({
  name: 'DietEnum',
  members: {
    balanced: 'balanced',
    highProtein: 'high-protein',
    lowFat: 'low-fat',
    lowCarb: 'low-carb',
  },
});

const Recipe = objectType({
  name: 'Recipe',
  definition(t) {
    t.string('uri');
    t.string('label');
    t.string('image');
    t.int('yield');
    t.float('calories');
    t.float('totalWeight');

    t.list.string('healthLabels');
    t.list.string('dietLabels');
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
      args: {
        searchQuery: stringArg({ nullable: false }),
      },
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
export default {
  Filters, DietEnum, HealthEnum, Recipe, Query,
};
