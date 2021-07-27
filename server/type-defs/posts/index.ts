import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    posts: [Post]
    post(_id: ID!): Post
  }
  
  type Post {
    _id: String
    title: String
    body: String
    userName: String
    user: User
    views: Int
    likes: Int
    comments: Int
    subreddit: String
    date: String
  }
`;