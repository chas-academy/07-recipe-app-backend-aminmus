import {
  queryType, objectType, stringArg, enumType, arg, inputObjectType,
} from 'nexus';

import { searchRecipes, findRecipeByURI } from '../services/getRecipes';

const Filters = inputObjectType({
  name: 'Filters',
  definition(t) {
    t.list.field('healthLabels', { type: 'HealthEnum' });
    t.list.field('dietLabels', { type: 'DietEnum' });
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
      nullable: true,
      args: {
        searchQuery: stringArg({ nullable: false }),
        filters: arg({ type: Filters }),
      },
      resolve: (_root, { searchQuery, filters }) => searchRecipes(searchQuery, filters),
    });

    t.field('findRecipeByURI', {
      type: Recipe,
      description: 'Find a recipe by uri',
      nullable: true,
      args: { uri: stringArg({ nullable: false }) },
      resolve: (_root, { uri }) => findRecipeByURI(uri),
    });
  },
});
export default {
  Filters, DietEnum, HealthEnum, Recipe, Query,
};
