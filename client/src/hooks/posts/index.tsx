import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { FETCH_POST, FETCH_POSTS, REMOVE_POST } from "../../queries";

export const useFetchPosts = () => {
  const { loading, error, data } = useQuery(FETCH_POSTS);

  return { loading, error, data };
};

export const useFetchPost = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(FETCH_POST, {
    variables: {
      _id: params._id,
    },
  });

  return { loading, error, data };
};

export const useRemovePost = (_id: string) => {
  const [removePost] = useMutation(REMOVE_POST, {
    variables: {
      _id,
    },
  });

  const handleRemove = () => {
    removePost();
  };

  return { handleRemove };
};
