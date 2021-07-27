import { mergeResolvers } from "graphql-tools";
import { resolvers as commentResolvers } from "./comments";
import { resolvers as postResolvers } from "./posts";
import { resolvers as subredditResolvers } from "./subreddits";
import { resolvers as userResolvers } from "./users";

const resolvers = mergeResolvers([
  postResolvers,
  commentResolvers,
  subredditResolvers,
  userResolvers,
]);

export default resolvers;
