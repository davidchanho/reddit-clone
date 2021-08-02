import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  query Query($_id: ID!) {
    user(_id: $id) {
      _id
      name
    }
  }
`;

export const LOGOUT_USER = gql`
  query Query($_id: ID!) {
    user(_id: $id) {
      _id
      name
    }
  }
`;

export const REGISTER_USER = gql`
  mutation Mutation($item: UserInput) {
    addUser(item: $item) {
      _id
    }
  }
`;

export const REMOVE_USER = gql`
  mutation Mutation($_id: ID!) {
    removeUser(_id: $_id) {
      _id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation Mutation($_id: ID!, $update: String) {
    updateUser(_id: $_id, update: $update) {
      _id
    }
  }
`;
