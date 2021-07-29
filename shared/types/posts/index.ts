import { ISubreddit, IUser } from "..";
import { IComment } from "./../comments/index";

export interface IPost {
  _id: string;
  title: string;
  body: string;
  user: IUser;
  views: number;
  likes: number;
  comments: IComment[];
  subreddit: ISubreddit;
  date: string;
}
