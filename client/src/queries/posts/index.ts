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
      title
      comments {
        body
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation Mutation($item: PostInput) {
    addPost(item: $item) {
      title
    }
  }
`;

export const REMOVE_POST = gql`
  mutation Mutation($_id: ID!) {
    removePost(_id: $_id) {
      title
    }
  }
`;

export const UPDATE_POST = gql`
  mutation Mutation($item: PostInput) {
    updatePost(item: $item) {
      _id
      likes
    }
  }
`;

export const LIKE_POST = gql`
  mutation Mutation($_id: ID!) {
    likePost(_id: $_id) {
      _id
      likes
    }
  }
`;

export const DISLIKE_POST = gql`
  mutation Mutation($_id: ID!) {
    dislikePost(_id: $_id) {
      _id
      likes
    }
  }
`;
