import { gql } from "@apollo/client";

export const PostsQuery = gql`
  query Query {
    posts {
      _id
      title
      body
      likes
      date
      user {
        name
      }
    }
  }
`;

export const PostQuery = gql`
  query Query($_id: ID!) {
    post(_id: $_id) {
      title
    }
  }
`;
