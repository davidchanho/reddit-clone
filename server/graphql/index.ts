import {
  makeExecutableSchema,
  mergeResolvers,
  mergeTypeDefs,
} from "graphql-tools";
import { resolvers as postResolvers, typeDefs as postTypeDefs } from "./posts";
import { resolvers as commentResolvers, typeDefs as commentTypeDefs } from "./comments";
import { resolvers as subredditResolvers, typeDefs as subredditTypeDefs } from "./subreddits";
import { resolvers as userResolvers, typeDefs as userTypeDefs } from "./users";

const Query = `
    type Query {
    _empty: String
  }
`;

const resolvers = mergeResolvers([
  postResolvers,
  commentResolvers,
  subredditResolvers,
  userResolvers,
]);

const typeDefs = mergeTypeDefs([
  Query,
  postTypeDefs,
  commentTypeDefs,
  subredditTypeDefs,
  userTypeDefs, 
]);

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
