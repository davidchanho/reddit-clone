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

        <div className="w-full p-3">
          <Link to={`/r/${post.subreddit.name}/${post._id}`}>
            <header className="flex flex-row justify-between items-center">
              <p>{post.subreddit.name}</p>
              <p>{post.user.name}</p>
              <p>{post.date}</p>
            </header>

            <div>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>

            <footer></footer>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default Post;
