import { IPost } from "..";
export interface ISubreddit {
  _id: string;
  name: string;
  icon: string;
  posts?: IPost[];
}
