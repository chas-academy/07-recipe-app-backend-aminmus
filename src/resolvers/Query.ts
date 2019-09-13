import { queryType, stringArg } from 'nexus';

const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: { name: stringArg({ nullable: true }) },
      resolve: (_parent, { name }) => `Hello ${name || 'World'}!`,
    });
  },
});

export default Query;
