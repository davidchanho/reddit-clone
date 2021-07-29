import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query Query {
    users {
      _id
      name
    }
  }
`;
