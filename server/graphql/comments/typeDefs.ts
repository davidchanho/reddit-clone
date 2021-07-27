import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    comments: [Comment]
    comment(_id: ID!): Comment
  }

  type Comment {
    _id: String
    postId: String
    userId: String
    body: String
    likes: Int
    date: String
  }
`;