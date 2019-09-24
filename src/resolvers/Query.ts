import { queryType, stringArg, arg } from 'nexus';
import { prismaObjectType } from 'nexus-prisma';

// import Recipe from './Recipe';
import getUserId from '../utils/getUserId';
import { Filters } from './Filters';
import { searchRecipes, findRecipeByURI } from '../services/getRecipes';
import EdamamRecipe from './EdamamRecipe';
import User from './User';
import { Context } from '../types';

const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['recipeList']);

    t.string('hello', {
      args: { name: stringArg({ nullable: true }) },
      resolve: (_parent, { name }) => `Hello ${name || 'World'}!`,
    });

    t.string('testProtected', {
      resolve: () => 'Only authenticated requests should see this response that you are reading now',
    });

    t.field('me', {
      type: User,
      resolve: async (_root, _args, context: Context) => {
        const id = getUserId(context);
        return context.prisma.user({ id });
      },
    });

    t.list.field('myRecipeLists', {
      type: 'RecipeList',
      resolve: async (_root, _args, context: Context) => {
        const id = getUserId(context);
        return context.prisma.user({ id }).recipeLists();
      },
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
