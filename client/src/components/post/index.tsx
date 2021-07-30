import { useMutation } from "@apollo/client";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import dayjs from "dayjs";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../../shared/types";
import { UPDATE_POST } from "../../queries";

interface Props {
  post: IPost;
}

function Post({ post }: Props) {
  const [isLike, setIsLike] = useState(false);
  const [likeState, setLikeState] = useState(post.likes);

  const [updatePost] = useMutation(UPDATE_POST, {
    variables: {
      post,
    },
  });

  const { _id, title, body, likes, subreddit, date, user } = post;
  const formatDate = dayjs(date).format("MMMM DD");

  const handleLike = () => {
    if (!isLike) {
      setIsLike(true);
      setLikeState(likeState + 1);
      // updatePost({ post: { ...post, likes: likes + 1 } });
    }
  };

  const handleDisLike = () => {
    if (likes > 0 && isLike) {
      setLikeState(likeState - 1);
      // updatePost({ post: { ...post, likes: likes - 1 } });
    }
  };

  return (
    <article className="grid grid-cols-12">
      <div className="col-span-1 mx-auto text-center bg-gray-100">
        <ArrowUpIcon onClick={handleLike} className="h-6 cursor-pointer" />
        <p>{likes}</p>
        <ArrowDownIcon onClick={handleDisLike} className="h-6 cursor-pointer" />
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
