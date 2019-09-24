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
      resolve: async (_root, { name, email, password }, context) => {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await ctx.prisma.createUser({
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
