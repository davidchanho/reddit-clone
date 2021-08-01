import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    posts(offset: Int, limit: Int): [Post]
    post(_id: ID!): Post
  }

  type Post {
    _id: ID!
    title: String!
    body: String!
    views: Int
    likes: Int
    date: String!
  }

  input PostInput {
    title: String
    body: String
    user: String
    subreddit: String
  }

  type Mutation {
    addPost(item: PostInput): Post
    removePost(_id: ID!): Post
    updatePost(_id: ID!, update: String): Post
  }

  extend type User {
    posts: [Post]
    bookmarks: [Post]
  }

  extend type Subreddit {
    posts: [Post]
    post(_id: ID!): Post
  }

  extend type Comment {
    post: Post
  }
`;
