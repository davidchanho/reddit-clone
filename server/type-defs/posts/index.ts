import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    posts: [Post]
    post(_id: ID!): Post
  }

  type Post {
    _id: ID!
    title: String!
    body: String!
    user: User!
    views: Int
    likes: Int
    comments: [Comment]
    subreddit: Subreddit!
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
    updatePost(_id: ID!, item: PostInput): Post
    likePost(_id: ID!): Post
    dislikePost(_id: ID!): Post
  }
`;
