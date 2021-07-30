import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    subreddits: [Subreddit]
    subreddit(_id: ID!): Subreddit
  }

  type Subreddit {
    _id: ID!
    name: String!
    icon: String!
    posts: [Post]
  }

  input SubredditInput {
    name: String
    icon: String
  }

  type Mutation {
    addSubreddit(item: SubredditInput): Subreddit
    removeSubreddit(_id: ID!): Subreddit
    updateSubreddit(_id: ID!, item: SubredditInput): Subreddit
  }
`;
