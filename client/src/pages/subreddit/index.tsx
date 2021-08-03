import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import PostsList from "../../components/posts-list";
import PostsSidebar from "../../components/posts-sidebar";
import Sidebar from "../../components/sidebar";
import { FETCH_SUBREDDIT } from "../../queries";

function SubredditPage() {
  const params = useParams();

  const { loading, error, data, fetchMore } = useQuery(FETCH_SUBREDDIT, {
    variables: {
      name: params.name,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <Sidebar />
      <PostsList
        data={data.subreddit.posts}
        onLoadMore={() =>
          fetchMore({
            variables: {
              offset: data.posts.length,
            },
          })
        }
      />
      <PostsSidebar />
    </>
  );
}

export default SubredditPage;
