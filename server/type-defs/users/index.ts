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
    date: String!
    karma: Int
  }

  input UserInput {
    name: String
    email: String
    password: String
    avatar: String
  }

  type Mutation {
    addUser(item: UserInput): User
    removeUser(_id: ID!): User
    updateUser(_id: ID!, item: UserInput): User

    addFollower(followerId: ID!, userId: ID!): User
    addBookmark(postId: ID!, userId: ID!): Post
    addSubredditToUser(subredditId: ID!, userId: ID!): Subreddit

    removeFollower(followerId: ID!, userId: ID!): User
    removeBookmark(postId: ID!, userId: ID!): Post
    removeSubredditFromUser(subredditId: ID!, userId: ID!): Subreddit

    addKarma(_id: ID!): User
    decreaseKarma(_id: ID!): User
  }

  extend type Post {
    user: User!
  }

  extend type Comment {
    user: User!
  }
`;
