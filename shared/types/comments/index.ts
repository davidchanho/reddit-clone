import { IPost, IUser } from '..';

export interface IComment {
  _id: string;
  post: IPost;
  user: IUser;
  body: string;
  likes: number;
  comments: IComment[];
  date: string;
}
