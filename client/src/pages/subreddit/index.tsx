import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { IPost } from "../../../../shared/types";
import Post from "../../components/post";
import { FETCH_SUBREDDIT } from "../../queries";

function SubredditPage() {
  const params = useParams();
  
  const { loading, error, data } = useQuery(FETCH_SUBREDDIT, {
    variables: {
      _id: params._id,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div>
      {data.subreddit.posts.map((post: IPost) => {
        return <Post key={post._id} {...post} />;
      })}
    </div>
  );
}

export default SubredditPage;
