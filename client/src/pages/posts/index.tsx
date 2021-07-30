import React from "react";
import PostsList from "../../components/posts-list";
import PostsSidebar from "../../components/posts-sidebar";
import Sidebar from "../../components/sidebar";

function PostsPage() {
  return (
    <>
      <Sidebar />
      <PostsList />
      <PostsSidebar />
    </>
  );
}

export default PostsPage;
