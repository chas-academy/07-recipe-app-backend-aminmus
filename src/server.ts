import { GraphQLServer } from 'graphql-yoga';
import { makeSchema } from 'nexus';
import path from 'path';

import types from './resolvers';

require('dotenv').config();

const schema = makeSchema({
  types,
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
