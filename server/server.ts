import { ApolloServer } from "apollo-server-express";
import express from "express";
import { makeExecutableSchema } from "graphql-tools";
import client from "./client";
import db from "./models";
import resolvers from "./resolvers";
import typeDefs from "./type-defs";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

(async function startApolloServer() {
  client();
  const server = new ApolloServer({ schema, context: db });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve as any));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
})();
