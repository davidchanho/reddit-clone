import React from "react";
import PostsList from "../../components/posts-list";
import Sidebar from "../../components/sidebar";

function PostsPage() {
  return (
    <div className="flex flex-row w-full">
      <div className="w-3/12">
        <Sidebar />
      </div>
      <div className="flex flex-row w-9/12">
        <div className="w-8/12">
          <PostsList />
        </div>
        <aside className="w-4/12">asdas</aside>
      </div>
    </div>
  );
}

export default PostsPage;
