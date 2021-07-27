import { ISubreddit, IUser } from "..";

export interface IPost {
  title: string;
  body: string;
  user: IUser;
  views: number;
  likes: number;
  comments: number;
  subreddit: ISubreddit;
  date: string;
}
