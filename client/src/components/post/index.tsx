import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../../shared/types";

function Post({ _id, title, body, likes, subreddit, date, user }: IPost) {
  const formatDate = dayjs(date).format("MMMM DD");

  const renderVoting = (
    <>
      <ArrowUpIcon className="h-6" />
      <p>{likes}</p>
      <ArrowDownIcon className="h-6" />
    </>
  );

  const renderContent = (
    <Link to={`/posts/${_id}`}>
      <header className="flex">
        <p>{subreddit}</p>
        <p>{user.name}</p>
        <p>{formatDate}</p>
      </header>
      <div>
        <p>{title}</p>
        <p>{body}</p>
      </div>
      <footer></footer>
    </Link>
  );

  return (
    <article className="grid grid-cols-12">
      <div className="col-span-1 mx-auto text-center bg-gray-100">
        {renderVoting}
      </div>
      <div className="col-span-11">{renderContent}</div>
    </article>
  );
}

export default Post;
