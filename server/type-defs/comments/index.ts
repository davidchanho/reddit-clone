import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    comments: [Comment]
    comment(_id: ID!): Comment
  }

  type Comment {
    _id: ID!
    post: Post!
    user: User!
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
    addComment(comment: CommentInput): Comment
    removeComment(_id: ID!): Comment
    updateComment(_id: ID!, comment: CommentInput): Comment
  }
`;
