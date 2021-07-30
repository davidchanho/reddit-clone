import React from "react";
import { IPost } from "../../../../shared/types";
import Post from "../post";

interface Props {
  data: any;
}

function PostsList({ data }: Props) {
  return (
    <main className="lg:col-span-9 xl:col-span-6">
      <div className="px-4 sm:px-0 space-y-4">
        {data.map((post: IPost) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </main>
  );
}

export default PostsList;
