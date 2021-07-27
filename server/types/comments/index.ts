import { IPost, IUser } from '..';

export interface IComment {
  post: IPost;
  user: IUser;
  body: string;
  likes: number;
  comments: number;
  date: string;
}
