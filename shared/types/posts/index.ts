import { ISubreddit, IUser } from "..";

export interface IPost {
  _id: string;
  title: string;
  body: string;
  userId: IUser;
  views: number;
  likes: number;
  comments: number;
  subreddit: ISubreddit;
  date: string;
}
