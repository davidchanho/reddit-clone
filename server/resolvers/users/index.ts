import { usersApi } from "../../api";

const Query = {
  users: usersApi.getUsers,
  user: usersApi.getUser,
};

const Mutation = {
  addUser: usersApi.addUser,
  removeUser: usersApi.removeUser,
};

export const resolvers = {
  Query,
  Mutation,
};
