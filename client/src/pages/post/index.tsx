import React from "react";
import { useParams } from "react-router-dom";
import { IComment } from "../../../../shared/types";
import { useFetchPost } from "../../hooks";

function PostPage() {
  const { loading, error, data } = useFetchPost();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <div>{data.post.title}</div>
      <div>
        {data.post.comments?.map((comment: IComment) => {
          return <div key={comment._id}>{comment.body}</div>;
        })}
      </div>
    </div>
  );
}

export default PostPage;
