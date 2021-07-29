import { gql } from "@apollo/client";

export const FETCH_SUBREDDITS = gql`
  query Query {
    subreddits {
      _id
      name
      icon
    }
  }
`;
