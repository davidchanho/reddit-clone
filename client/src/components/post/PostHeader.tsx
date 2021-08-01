import React from "react";
import { PostProps } from "../../types/posts";

function PostHeader({ post }: PostProps) {
  return (
    <header className="flex flex-row gap-2 items-center">
      <p className="font-bold">r/{post.subreddit.name}</p>
      <p>Posted by u/{post.user.name}</p>
      <p>{post.date}</p>
    </header>
  );
}

export default PostHeader;
