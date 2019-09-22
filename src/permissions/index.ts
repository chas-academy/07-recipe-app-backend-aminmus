import { rule, shield } from 'graphql-shield';
import getUserId from '../utils/getUserId';


const rules = {
  isAuthenticated: rule()(async (root, args, context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
};

const permissions = shield({
  Query: {
    testProtected: rules.isAuthenticated,
  },
  Mutation: {
    createRecipeList: rules.isAuthenticated,
    updateRecipeList: rules.isAuthenticated,
  },
});

export default permissions;
