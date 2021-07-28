import { useQuery } from "@apollo/client";
import React from "react";
import { useLocation, useParams } from "react-router";
import { PostQuery } from "../../queries";

function PostPage() {
  const params = useParams();

  const { loading, error, data } = useQuery(PostQuery, {
    variables: {
      _id: params._id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <div>{data.post.title}</div>;
}

export default PostPage;
