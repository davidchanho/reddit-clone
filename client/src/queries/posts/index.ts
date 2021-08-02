import { gql } from "@apollo/client";

export const FETCH_POSTS = gql`
  query Query($offset: Int, $limit: Int) {
    posts(offset: $offset, limit: $limit) {
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
      }
    }
  }
`;

export const FETCH_POST = gql`
  query Query($_id: ID!) {
    post(_id: $_id) {
      _id
      title
      subreddit {
        name
      }
      user {
        name
      }
      date
      comments {
        _id
        body
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation Mutation($item: PostInput) {
    addPost(item: $item) {
      _id
    }
  }
`;

export const REMOVE_POST = gql`
  mutation Mutation($_id: ID!) {
    removePost(_id: $_id) {
      _id
    }
  }
`;

export const UPDATE_POST = gql`
  mutation Mutation($_id: ID!, $update: String) {
    updatePost(_id: $_id, update: $update) {
      _id
    }
  }
`;
