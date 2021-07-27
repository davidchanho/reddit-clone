import { ApolloServer } from "apollo-server-express";
import express from "express";
import client from "./client";
import schema from "./graphql";
import db from "./models";

(async function startApolloServer() {
  client();
  const server = new ApolloServer({ schema, context: { db } });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve as any));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
})();
