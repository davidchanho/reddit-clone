import { ChatAltIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../../shared/types";
import Card from "../card";
import Likes from "./Likes";

interface Props {
  post: IPost;
}

function Post({ post }: Props) {
  return (
    <Card hover>
      <div className="flex flex-row">
        <Likes post={post} />

        <Link to={`/r/${post.subreddit.name}/${post._id}`}>
          <div className="w-full p-3">
            <header className="flex flex-row gap-2 items-center">
              <p className="font-bold">r/{post.subreddit.name}</p>
              <p>Posted by u/{post.user.name}</p>
              <p>{post.date}</p>
            </header>

            <div>
              <p className="font-bold capitalize text-lg">{post.title}</p>
              <p>{post.body}</p>
            </div>

            <footer>
              <ChatAltIcon /> {post?.comments?.length}
            </footer>
          </div>
        </Link>
      </div>
    </Card>
  );
}

export default Post;
