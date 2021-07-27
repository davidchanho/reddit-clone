import { gql } from "@apollo/client";

export const CommentsQuery = gql`
  query Query {
    comments {
      _id
      body
      user {
        name
        avatar
      }
      likes
      date
      comments
    }
  }
`;
