import { BaseRedisCache } from "apollo-server-cache-redis";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import expressJwt from "express-jwt";
import { makeExecutableSchema } from "graphql-tools";
import Redis from "ioredis";
import client from "./client";
import db from "./models";
import resolvers from "./resolvers";
import typeDefs from "./type-defs";
import logger from 'morgan'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

client();

const cache = new BaseRedisCache({
  client: new Redis({
    port: 6379,
    host: "127.0.0.1",
  }),
});

(async function startApolloServer() {
  const app = express();

  app.use(
    expressJwt({
      secret: "secret",
      algorithms: ["HS256"],
      credentialsRequired: false,
    })
  );
  app.use(logger('dev'));

  const server = new ApolloServer({
    schema,
    context: db,
    cache,
  });

  await server.start();
  
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
  };

  server.applyMiddleware({ app, cors: corsOptions });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve as any));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
})();
