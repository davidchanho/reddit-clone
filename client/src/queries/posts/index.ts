import { gql } from "@apollo/client";

export const PostsQuery = gql`
  query Query {
    posts {
      _id
      title
      body
      userName
      likes
      comments
      subreddit
      date
    }
  }
`;
