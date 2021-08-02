import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchComments($_id: ID!) {
    post(_id: $_id) {
      comments {
        _id
        body
        likes
        date
        user {
          name
        }
      }
    }
  }
`;

export const FETCH_COMMENT = gql`
  query fetchComment($_id: ID) {
    comment(_id: $_id) {
      _id
      body
      likes
      date
      user {
        name
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($item: CommentInput) {
    addComment(item: $item) {
      _id
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($_id: ID!) {
    removeComment(_id: $_id) {
      _id
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($_id: ID!, $update: String) {
    updateComment(_id: $_id, update: $update) {
      _id
    }
  }
`;
