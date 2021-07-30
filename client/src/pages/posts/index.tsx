import { useQuery } from "@apollo/client";
import React from "react";
import PostsList from "../../components/posts-list";
import PostsSidebar from "../../components/posts-sidebar";
import Sidebar from "../../components/sidebar";
import { FETCH_POSTS } from "../../queries";

function PostsPage() {
  const { loading, error, data } = useQuery(FETCH_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Sidebar />
      <PostsList data={data.posts} />
      <PostsSidebar />
    </>
  );
}

export default PostsPage;
