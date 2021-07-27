import { useQuery } from "@apollo/client";
import React from "react";
import { IPost } from "../../../../../shared/types";
import { PostsQuery } from "../../../queries";
import Post from "../post";

function PostList() {
  const { loading, error, data } = useQuery(PostsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.posts.map((post: IPost) => {
    return <Post key={post._id} {...post} />;
  });
}

export default PostList;
