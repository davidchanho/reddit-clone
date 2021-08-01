import { ApolloQueryResult } from "@apollo/client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { IPost } from "../../../../shared/types";
import CreatePost from "../create-post";
import Post from "../post";
import PostsTabs from "../posts-tabs";

interface Props {
  data: any;
  onLoadMore: () => Promise<ApolloQueryResult<unknown>>;
}

function PostsList({ data, onLoadMore }: Props) {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      onLoadMore();
    }
  }, [inView]);

  return (
    <main className="lg:col-span-9 xl:col-span-6">
      <div className="px-4 sm:px-0 space-y-4">
        <CreatePost />
        <PostsTabs />
        {data.map((post: IPost) => {
          return <Post key={post._id} post={post} />;
        })}
        <div ref={ref} />
      </div>
    </main>
  );
}

export default PostsList;
