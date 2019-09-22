import { rule, shield, and } from 'graphql-shield';
import getUserId from '../utils/getUserId';
import { Context } from '../types';


const rules = {
  isAuthenticated: rule()(async (root, args, context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  isListOwner: rule()(async (root, { listId }, context: Context) => {
    const userId = getUserId(context);
    // Check if there is a recipe list that matches listId arg and userId
    if (userId) {
      return context.prisma.$exists.recipeList({
        id: listId,
        owner: { id: userId },
      });
    }
    return false;
  }),
};

const permissions = shield({
  Query: {
    testProtected: rules.isAuthenticated,
  },
  Mutation: {
    createRecipeList: rules.isAuthenticated,
    updateRecipeList: rules.isAuthenticated,
    addRecipeToList: and(rules.isAuthenticated, rules.isListOwner),
  },
});

export default permissions;
