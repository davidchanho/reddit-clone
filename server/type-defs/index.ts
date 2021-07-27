import { mergeTypeDefs } from "graphql-tools";
import { typeDefs as commentTypeDefs } from "./comments";
import { typeDefs as postTypeDefs } from "./posts";
import { typeDefs as subredditTypeDefs } from "./subreddits";
import { typeDefs as userTypeDefs } from "./users";

const Query = `
    type Query {
    _empty: String
  }
`;

const typeDefs = mergeTypeDefs([
  Query,
  postTypeDefs,
  commentTypeDefs,
  subredditTypeDefs,
  userTypeDefs,
]);

export default typeDefs;
