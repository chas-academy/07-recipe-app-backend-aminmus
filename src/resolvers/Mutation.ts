import { mutationType, stringArg } from 'nexus';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import AuthPayload from './AuthPayload';

const Mutation = mutationType({
  definition(t) {
    t.field('signup', {
      type: AuthPayload,
      args: {
        name: stringArg(),
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (root, { name, email, password }, ctx) => {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await ctx.prisma.createUser({
          name,
          email,
          password: encryptedPassword,
        });
        return {
          token: jwt.sign({ userId: user.id }, process.env.SECRET_JWT_KEY),
          user,
        };
      },
    });
  },
});

export default Mutation;
