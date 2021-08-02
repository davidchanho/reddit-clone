import { useMutation, useQuery } from "@apollo/client";
import { FETCH_COMMENTS, REMOVE_COMMENT } from "../../queries/comments";
import { PostProps } from "../../types/posts";

function Comments({ post }: PostProps) {
  const { loading, error, data } = useQuery(FETCH_COMMENTS, {
    variables: {
      _id: post._id,
    },
  });

  const [removeComment] = useMutation(REMOVE_COMMENT, {
    variables: {
      post: post._id,
    },
  });

  if (loading) return <div>Loading..</div>;
  if (error) return null;

  if (data.comments) {
    return null;
  }

  return data.comments.map((comment: any) => {
    return (
      <div key={comment._id}>
        {comment.body}
        <button onClick={() => removeComment()}>remove</button>
      </div>
    );
  });
}

export default Comments;
