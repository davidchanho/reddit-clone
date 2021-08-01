import { useMutation } from "@apollo/client";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { IPost } from "../../../../shared/types";
import { UPDATE_POST } from "../../queries";

interface Props {
  post: IPost;
}

function Likes({ post }: Props) {
  const [status, setStatus] = useState("");
  const [like, setLike] = useState(post.likes);

  const [updatePost] = useMutation(UPDATE_POST, {
    variables: {
      _id: post._id,
      update: "",
    },
    refetchQueries: ["FETCH_POSTS"],
  });

  const handleLike = (statusProps: string, update: number) => {
    if (status !== statusProps) {
      setStatus(statusProps);
      setLike(update);
      updatePost({
        variables: {
          _id: post._id,
          update: JSON.stringify({ likes: update }),
        },
      });
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="h-1/5 flex flex-col items-center justify-between gap-3 p-2">
        <button onClick={() => handleLike("like", like + 1)}>
          <ArrowUpIcon className="h-6 cursor-pointer hover:text-red-500" />
        </button>
        <p>{like === 0 ? "Vote" : like}</p>
        <button onClick={() => handleLike("dislike", like - 1)}>
          <ArrowDownIcon className="h-6 cursor-pointer hover:text-blue-500" />
        </button>
      </div>
    </div>
  );
}

export default Likes;
