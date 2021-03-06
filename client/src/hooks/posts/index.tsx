import { useMutation } from "@apollo/client";
import { REMOVE_POST } from "../../queries";

export const RemovePost = (_id: string) => {
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
