import React from "react";
import { IPost } from "../../../../shared/types";
import { useFetchPosts } from "../../hooks";
import Post from "../post";

function PostsList() {
  const { loading, error, data } = useFetchPosts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      {data.posts.map((post: IPost) => {
        return <Post key={post._id} post={post} />;
      })}
    </>
  );
}

export default PostsList;
