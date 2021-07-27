import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    users: [User]
    user(_id: ID!): User
  }

  type User {
    _id: String
    name: String
    email: String
    avatar: String
    followers: [User]
    subreddits: [Subreddit]
    bookmarks: [Post]
    posts: [Post]
    comments: [Comment]
    date: String
  }
`;
