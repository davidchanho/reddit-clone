import { useQuery } from "@apollo/client";
import React from "react";
import { IPost } from "../../../../shared/types";
import { FETCH_POSTS } from "../../queries";
import Post from "../post";

function PostsList() {
  const { loading, error, data } = useQuery(FETCH_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <main className="lg:col-span-9 xl:col-span-6">
      <div className="px-4 sm:px-0 space-y-4">
        {data.posts.map((post: IPost) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </main>
  );
}

export default PostsList;
