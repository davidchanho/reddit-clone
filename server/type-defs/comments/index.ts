import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    comments: [Comment]
    comment(_id: ID!): Comment
  }

  type Comment {
    _id: ID!
    body: String!
    likes: Int
    date: String!
  }

  input CommentInput {
    post: String
    user: String
    body: String
  }

  type Mutation {
    addComment(item: CommentInput): Comment
    removeComment(_id: ID!): Comment
    updateComment(_id: ID!, item: CommentInput): Comment
  }

  extend type User {
    comments: [Comment]
  }

  extend type Post {
    comments: [Comment]
  }
`;
