import { gql } from "@apollo/client";

export const PostsQuery = gql`
  query Query {
    posts {
      _id
      title
    }
  }
`;
