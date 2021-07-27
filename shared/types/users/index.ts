import { ISubreddit } from './../subreddits/index';
import { IPost, IComment } from "..";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  followers: IUser[];
  subreddits: ISubreddit[];
  bookmarks: IPost[];
  posts: IPost[];
  comments: IComment[];
  date: string;
}
