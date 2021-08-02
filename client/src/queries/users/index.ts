import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!) {
    user(email: $email) {
      _id
    }
  }
`;

export const LOGOUT_USER = gql`
  query logoutUser($_id: ID!) {
    user(_id: $id) {
      _id
      name
    }
  }
`;

export const REGISTER_USER = gql`
  mutation registerUser($item: UserInput) {
    addUser(item: $item) {
      _id
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($_id: ID!) {
    removeUser(_id: $_id) {
      _id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($_id: ID!, $update: String) {
    updateUser(_id: $_id, update: $update) {
      _id
    }
  }
`;
