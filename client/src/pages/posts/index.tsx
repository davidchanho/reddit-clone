import { useQuery } from "@apollo/client";
import React from "react";
import { IPost } from "../../../../shared/types";
import Post from "../../components/posts/post";
import { PostsQuery } from "../../queries";

function PostsPage() {
  const { loading, error, data } = useQuery(PostsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.posts.map((post: IPost) => {
    return <Post key={post._id} {...post} />;
  });
}

export default PostsPage;
