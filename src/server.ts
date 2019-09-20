import { GraphQLServer } from 'graphql-yoga';
import { makePrismaSchema } from 'nexus-prisma';
import path from 'path';

import { prisma } from './generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';
import permissions from './permissions';
import types from './resolvers';

require('dotenv').config();

const schema = makePrismaSchema({
  types,

  prisma: {
    datamodelInfo,
    client: prisma,
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/typings.ts'),
  },
});

const server = new GraphQLServer({
  schema,
  middlewares: [permissions],
  context: (request) => ({
    ...request,
    prisma,
  }),
});

server.start({ port: process.env.PORT }, () => {
  console.log('Server is running at http://localhost:%s', process.env.PORT);
});
