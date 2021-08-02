import { useQuery } from "@apollo/client";
import React from "react";
import { IComment, IPost, ISubreddit, IUser } from "../../../../shared/types";
import { FETCH_DASHBOARD } from "../../queries";

function AdminDashboard() {
  const { loading, error, data } = useQuery(FETCH_DASHBOARD);

  if (loading) return null;
  if (error) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <p className="text-2xl">Posts</p>
        <div className="overflow-y-scroll h-48">
          {data.posts.map((post: IPost) => {
            return (
              <div className="p-3 border" key={post._id}>
                {post.title}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-2xl">Comments</p>
        <div className="overflow-y-scroll h-48">
          {data.comments.map((comment: IComment) => {
            return (
              <div className="p-3 border" key={comment._id}>
                {comment.body}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-2xl">Users</p>
        <div className="overflow-y-scroll h-48">
          {data.users.map((user: IUser) => {
            return (
              <div className="p-3 border" key={user._id}>
                {user.name}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-2xl">Subreddits</p>
        <div className="overflow-y-scroll h-48">
          {data.subreddits.map((subreddit: ISubreddit) => {
            return (
              <div className="p-3 border" key={subreddit._id}>
                {subreddit.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
