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
    <div className="flex flex-col items-center justify-between bg-gray-100">
      <button onClick={() => handleLike("like", like + 1)}>
        <ArrowUpIcon className={`h-6 cursor-pointer `} />
      </button>
      <p>{like}</p>
      <button onClick={() => handleLike("dislike", like - 1)}>
        <ArrowDownIcon className={`h-6 cursor-pointer `} />
      </button>
    </div>
  );
}

export default Likes;
