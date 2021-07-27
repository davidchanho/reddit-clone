import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    subreddits: [Subreddit]
    subreddit(_id: ID!): Subreddit
  }

  type Subreddit {
    _id: String
    name: String
    icon: String
    posts: [Post]
  }
`;
