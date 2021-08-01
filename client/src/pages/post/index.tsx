import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { IComment } from "../../../../shared/types";
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
    <div>
      <div>{data.post.title}</div>
      <div>
       
      </div>
    </div>
  );
}

export default PostPage;
