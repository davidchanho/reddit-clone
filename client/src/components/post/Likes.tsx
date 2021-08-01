import { useMutation } from "@apollo/client";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { IPost } from "../../../../shared/types";
import { DISLIKE_POST, LIKE_POST } from "../../queries";

interface Props {
  post: IPost;
}

interface ILikeStatus {
  status: "idle" | "like" | "dislike";
}

function Likes({ post }: Props) {
  const [like, setLike] = useState<ILikeStatus>({ status: "idle" });

  const [likePost] = useMutation(LIKE_POST, {
    variables: {
      _id: post._id,
    },
    refetchQueries: ["FETCH_POSTS"],
  });

  const [dislikePost] = useMutation(DISLIKE_POST, {
    variables: {
      _id: post._id,
    },
    refetchQueries: ["FETCH_POSTS"],
  });

  const handleLike = () => {
    if (like.status === "idle" || like.status === "dislike") {
      setLike({ status: "like" });
      likePost({
        variables: { _id: post._id },
      });
    }
  };

  const handleDisLike = () => {
    if (post.likes > 0 && (like.status === "idle" || like.status === "like")) {
      setLike({ status: "dislike" });
      dislikePost({
        variables: { _id: post._id },
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-between bg-gray-100">
      <button onClick={handleLike}>
        <ArrowUpIcon className={`h-6 cursor-pointer `} />
      </button>
      <p>{post.likes}</p>
      <button onClick={handleDisLike}>
        <ArrowDownIcon className={`h-6 cursor-pointer `} />
      </button>
    </div>
  );
}

export default Likes;
