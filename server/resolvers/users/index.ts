import { usersApi } from "../../api";

const Query = {
  users: usersApi.getUsers,
  user: usersApi.getUser,
};

const Mutation = {
  addUser: usersApi.addUser,
  removeUser: usersApi.removeUser,
  addFollower: usersApi.addFollower,
  addBookmark: usersApi.addBookmark,
  addSubredditToUser: usersApi.addSubreddit,
};
 
const User = {
  followers: usersApi.getFollowers,
  bookmarks: usersApi.getBookmarks,
  posts: usersApi.getPosts,
  comments: usersApi.getComments,
  subreddits: usersApi.getSubreddits,
};

export const resolvers = {
  Query,
  User,
  Mutation,
};
