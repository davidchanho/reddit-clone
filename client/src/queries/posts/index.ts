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
  mutation Mutation($post: PostInput) {
    addPost(post: $post) {
      title
    }
  }
`;
