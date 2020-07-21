import { stringArg, idArg } from 'nexus';
import { prismaObjectType } from 'nexus-prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';

import { Recipe } from '../generated/prisma-client';
import { findRecipeByURI } from '../services/getRecipes';
import AuthPayload from './AuthPayload';
import { Context } from '../types';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['createRecipeList', 'updateRecipeList', 'deleteRecipeList']);

    t.field('addRecipeToList', {
      type: 'RecipeList',
      args: {
        recipeURI: stringArg({ description: 'The URL-encoded URI of the recipe', required: true }),
        id: idArg({ description: 'ID of RecipeList to add recipe to' }),
      },
      resolve: async (_root, { recipeURI, id }, context: Context) => {
        let recipe: Recipe | null;

        const recipeExistsInDB = await context.prisma.$exists.recipe({
          encodedUri: recipeURI,
        });

        if (!recipeExistsInDB) {
          // Get recipe from edamam and create a copy in DB
          const edamamRecipe = await findRecipeByURI(recipeURI);
          const { healthLabels: healthLabelsPre, dietLabels: dietLabelsPre } = edamamRecipe;

          const healthLabels = healthLabelsPre.map(((healthLabelPre: string) => (
            { label: healthLabelPre }
          )));

          const dietLabels = dietLabelsPre.map(((dietLabelPre: string) => (
            { label: dietLabelPre }
          )));
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          recipe = await context.prisma.createRecipe({
            ...edamamRecipe,
            healthLabels: { connect: healthLabels },
            dietLabels: { connect: dietLabels },
          });
        } else {
          // Use the existing recipe in the DB
          recipe = await context.prisma.recipe({ encodedUri: recipeURI });
        }

        // Insert (aka connect) the recipe into the chosen Recipe List
        const updatedRecipeList = await context.prisma.updateRecipeList({
          data: {
            recipes: {
              connect: { id: recipe.id },
            },
          },
          where: { id },
        });

        // At the moment it seems no error is given if recipe already exists in the list
        return updatedRecipeList;
      },
    });

    t.field('signup', {
      type: AuthPayload,
      args: {
        name: stringArg(),
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (_root, { name, email, password }, context) => {
        const encryptedPassword = await bcrypt.hash(password, 10);
        if (!isEmail(email)) {
          throw new Error('Invalid email');
        }

        const user = await context.prisma.createUser({
          name,
          email,
          password: encryptedPassword,
        });
        return {
          token: jwt.sign({ userId: user.id }, process.env.SECRET_JWT_KEY, { expiresIn: '24h' }),
          user,
        };
      },
    });

    t.field('login', {
      type: AuthPayload,
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (_root, { email, password }, context) => {
        const user = await context.prisma.user({ email });
        if (!user) {
          throw new Error(`No user found for email: ${email}`);
        }

        const passwordIsValid = await bcrypt.compare(password, user.password);

        if (!passwordIsValid) {
          throw new Error('Password is invalid');
        }

        return {
          token: jwt.sign({ userId: user.id }, process.env.SECRET_JWT_KEY, { expiresIn: '24h' }),
          user,
        };
      },
    });
  },
});

export default Mutation;
