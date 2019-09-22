import { queryType, stringArg, arg } from 'nexus';

// import Recipe from './Recipe';
import { Filters } from './Filters';
import { searchRecipes, findRecipeByURI } from '../services/getRecipes';
import EdamamRecipe from './EdamamRecipe';

const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: { name: stringArg({ nullable: true }) },
      resolve: (_parent, { name }) => `Hello ${name || 'World'}!`,
    });

    t.string('testProtected', {
      resolve: () => 'Only authenticated requests should see this response that you are reading now',
    });

    t.list.field('searchRecipes', {
      type: EdamamRecipe,
      description: 'Search for recipes',
      nullable: true,
      args: {
        searchQuery: stringArg({ nullable: false }),
        filters: arg({ type: Filters }),
      },
      resolve: (_root, { searchQuery, filters }) => searchRecipes(searchQuery, filters),
    });

    t.field('findRecipeByURI', {
      type: EdamamRecipe,
      description: 'Find a recipe by uri',
      nullable: true,
      args: { uri: stringArg({ nullable: false }) },
      resolve: (_root, { uri }) => findRecipeByURI(uri),
    });
  },
});

export default Query;
