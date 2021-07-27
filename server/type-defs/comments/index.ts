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

  input CommentInput {
    postId: String!
    userId: String!
    body: String!
  }

  type Mutation {
    addComment(comment: CommentInput): Comment
    removeComment(_id: ID!): Comment
  }
`;
