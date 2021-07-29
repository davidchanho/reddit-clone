import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../../shared/types";

function Post({ _id, title, body, likes, subreddit, date, user }: IPost) {
  const formatDate = dayjs(date).format("MMMM DD");

  return (
    <article className="grid grid-cols-12">
      <div className="col-span-1 mx-auto text-center bg-gray-100">
        <ArrowUpIcon className="h-6 cursor-pointer" />
        <p>{likes}</p>
        <ArrowDownIcon className="h-6 cursor-pointer" />
      </div>

      <div className="col-span-11">
        <Link to={`/posts/${_id}`}>
          <header className="flex flex-row justify-between items-center">
            <p>{subreddit.name}</p>
            <p>{user.name}</p>
            <p>{formatDate}</p>
          </header>

          <div>
            <p>{title}</p>
            <p>{body}</p>
          </div>

          <footer></footer>
        </Link>
      </div>
    </article>
  );
}

export default Post;
