import { ISubreddit, IUser } from "..";
import { IComment } from "./../comments/index";

export enum MediaType {
  TEXT = "TEXT",
  PHOTO = "PHOTO",
  VIDEO = "VIDEO",
}

export interface IPost {
  _id: string;
  title: string;
  body: string;
  user: IUser;
  views: number;
  likes: number;
  comments: IComment[];
  subreddit: ISubreddit;
  mediaType: MediaType;
  date: string;
}
