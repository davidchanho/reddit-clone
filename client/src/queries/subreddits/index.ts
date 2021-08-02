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
  query Query($name: String!) {
    posts(name: $name) {
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
`;

export const ADD_SUBREDDIT = gql`
  mutation Mutation($item: SubredditInput) {
    addSubreddit(item: $item) {
      _id
    }
  }
`;

export const REMOVE_SUBREDDIT = gql`
  mutation Mutation($_id: ID!) {
    removeSubreddit(_id: $_id) {
      _id
    }
  }
`;

export const UPDATE_SUBREDDIT = gql`
  mutation Mutation($_id: ID!, $update: String) {
    updateSubreddit(_id: $_id, update: $update) {
      _id
    }
  }
`;
