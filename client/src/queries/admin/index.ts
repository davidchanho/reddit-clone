import { gql } from "@apollo/client";

export const FETCH_DASHBOARD = gql`
  query Query {
    posts {
      _id
      title
    }
    comments {
      _id
      body
    }
    subreddits {
      _id
      name
    }
    users {
      _id
      name
    }
  }
`;
