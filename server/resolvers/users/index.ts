import { usersApi } from "../../api";

const Query = {
  users: usersApi.getUsers,
  user: usersApi.getUser,
};

export const resolvers = {
  Query,
};
