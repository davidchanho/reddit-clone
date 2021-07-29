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

export const FETCH_SUBREDDIT = gql`
  query Query($_id: ID!) {
    subreddit(_id: $_id) {
      posts {
        _id
        title
        body
        likes
        date
        user {
          name
        }
        subreddit {
          name
          icon
        }
      }
    }
  }
`;
