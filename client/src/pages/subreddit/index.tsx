import React from "react";
import { IPost } from "../../../../shared/types";
import Post from "../../components/post";
import { useFetchSubreddit } from "../../hooks";

function SubredditPage() {
  const { loading, error, data } = useFetchSubreddit();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div>
      {data.subreddit.posts.map((post: IPost) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
}

export default SubredditPage;
