import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    subreddits: [Subreddit]
    subreddit(name: String!): Subreddit
  }

  type Subreddit {
    _id: ID!
    name: String!
    icon: String!
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

  extend type User {
    subreddits: [Subreddit]
  }

  extend type Post {
    subreddit: Subreddit
  }
`;
