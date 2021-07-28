import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../../../shared/types";

function Post({ _id, title, body, likes, subreddit, date, user }: IPost) {
  return (
    <Link to={`/posts/${_id}`}>
      <article className="grid grid-cols-12">
        <div className="col-span-1 mx-auto text-center">
          <ArrowUpIcon className="h-6" />
          <p>{likes}</p>
          <ArrowDownIcon className="h-6" />
        </div>
        <div className="col-span-11">
          <p>{title}</p>
          <p>{body}</p>
          <p>{user.name}</p>
          <p>{subreddit}</p>
          <p>{dayjs(date).format("MMMM DD")}</p>
        </div>
      </article>
    </Link>
  );
}

export default Post;
