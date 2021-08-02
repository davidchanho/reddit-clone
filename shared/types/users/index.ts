import { IComment, IPost } from "..";
import { ISubreddit } from "./../subreddits/index";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  followers: IUser[];
  subreddits: ISubreddit[];
  bookmarks: IPost[];
  posts: IPost[];
  comments: IComment[];
  date: string;
  karma: number;
}
