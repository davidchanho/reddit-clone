import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import React from "react";
import { IPost } from "../../../../../shared/types";

function Post({ title, body, user, likes, comments, subreddit, date }: IPost) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1 mx-auto text-center">
        <ArrowUpIcon className="h-6" />
        <p>{likes}</p>
        <ArrowDownIcon className="h-6" />
      </div>
      <div className="col-span-11">
        <p>{title}</p>
        <p>{body}</p>
        <p>{user.name}</p>
        <p>{comments}</p>
        <p>{subreddit}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Post;
