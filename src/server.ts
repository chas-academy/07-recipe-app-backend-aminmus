import { GraphQLServer } from 'graphql-yoga';
import { makeSchema, queryType, stringArg } from 'nexus';
import path from 'path';

require('dotenv').config();

const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: { name: stringArg({ nullable: true }) },
      resolve: (_parent, { name }) => `Hello ${name || 'World'}!`,
    });
  },
});

const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/typings.ts'),
  },
});

const server = new GraphQLServer({
  schema,
});

server.start({ port: process.env.PORT }, () => {
  console.log('Server is running at http://localhost:%s', process.env.PORT);
});
