import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { FETCH_SUBREDDIT, FETCH_SUBREDDITS } from "../../queries";

export const useFetchSubreddits = () => {
  const { loading, error, data } = useQuery(FETCH_SUBREDDITS);
  return { loading, error, data };
};

export const useFetchSubreddit = () => {
  const params = useParams();

  const { loading, error, data } = useQuery(FETCH_SUBREDDIT, {
    variables: {
      _id: params._id,
    },
  });

  return { loading, error, data };
};
