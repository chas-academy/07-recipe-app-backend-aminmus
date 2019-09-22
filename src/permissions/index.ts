import { rule, shield, and } from 'graphql-shield';
import getUserId from '../utils/getUserId';
import { Context } from '../types';


const rules = {
  isAuthenticated: rule()(async (_root, _args, context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  isListOwner: rule()(async (_root, args, context: Context) => {
    // The list id is found in different places inside args depending on the resolver
    const id = args.id || args.where.id;
    const userId = getUserId(context);

    const actualOwner = await context.prisma.recipeList({ id }).owner();
    const isOwnerBoolean: boolean = userId === actualOwner.id;

    if (isOwnerBoolean) return true;
    return Error('Recipe list not found for given user');
  }),
};

const permissions = shield({
  Query: {
    testProtected: rules.isAuthenticated,
    recipeList: and(rules.isAuthenticated, rules.isListOwner),
    recipeLists: and(rules.isAuthenticated, rules.isListOwner),
  },
  Mutation: {
    createRecipeList: rules.isAuthenticated,
    addRecipeToList: and(rules.isAuthenticated, rules.isListOwner),
    updateRecipeList: and(rules.isAuthenticated, rules.isListOwner),
    deleteRecipeList: and(rules.isAuthenticated, rules.isListOwner),
  },
});

export default permissions;
