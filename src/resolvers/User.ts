import { prismaObjectType } from 'nexus-prisma';

const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields(['id', 'name', 'email', 'recipeLists', 'createdAt', 'updatedAt']);
  },
});

export default User;
