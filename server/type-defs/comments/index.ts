import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    comments: [Comment]
    comment(_id: ID!): Comment
  }

  type Comment {
    _id: String
    postId: String
    post: Post
    userId: String
    user: User
    body: String
    likes: Int
    date: String
    comments: [Comment]
  }
`;
