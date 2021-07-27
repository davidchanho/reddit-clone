export interface IPost {
  _id: string;
  title: string;
  body: string;
  userName: string;
  views: number;
  likes: number;
  comments: number;
  subreddit: string;
  date: string;
}
