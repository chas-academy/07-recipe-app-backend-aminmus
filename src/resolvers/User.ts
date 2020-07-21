import { prismaObjectType } from 'nexus-prisma';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields(['id', 'name', 'email', 'recipeLists', 'createdAt', 'updatedAt']);
  },
});

export default User;
