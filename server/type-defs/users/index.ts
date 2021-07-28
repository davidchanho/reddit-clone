import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    users: [User]
    user(_id: ID!): User
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    avatar: String!
    followers: [User]
    subreddits: [Subreddit]
    bookmarks: [Post]
    posts: [Post]
    comments: [Comment]
    date: String!
  }

  input UserInput {
    name: String
    email: String
    avatar: String
  }

  type Mutation {
    addUser(user: UserInput): User
    removeUser(_id: ID!): User
    updateUser(_id: ID!, user: UserInput): User
    addFollower(followerId: ID!, userId: ID!): User
    addBookmark(postId: ID!, userId: ID!): Post
    addSubredditToUser(subredditId: ID!, userId: ID!): Subreddit
    removeFollower(followerId: ID!, userId: ID!): User
    removeBookmark(postId: ID!, userId: ID!): Post
    removeSubredditFromUser(subredditId: ID!, userId: ID!): Subreddit
  }
`;
