import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import Comments from "../../components/comments";
import CreateComment from "../../components/create-comment";
import { FETCH_POST } from "../../queries";

function PostPage() {
  const params = useParams();

  const { loading, error, data } = useQuery(FETCH_POST, {
    variables: {
      _id: params._id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="w-full">
      <div>{data.post.title}</div>
      <div className="w-full">
        <CreateComment />
        <Comments post={data.post} />
      </div>
    </div>
  );
}

export default PostPage;
