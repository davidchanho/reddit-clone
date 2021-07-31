import { gql } from "@apollo/client";

export const FETCH_POSTS = gql`
  query Query {
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
      }
    }
  }
`;

export const FETCH_POST = gql`
  query Query($title: String) {
    post(title: $title) {
      title
      comments {
        body
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation Mutation($post: PostInput) {
    addPost(post: $post) {
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
  mutation Mutation($post: PostInput) {
    updatePost(post: $post) {
      _id
      likes
    }
  }
`;
