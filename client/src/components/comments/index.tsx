import { IComment } from "../../../../shared/types";
import { CommentsProps } from "../../types";

function Comments({ comments }: CommentsProps) {
  return (
    <div>
      {comments.map((comment: IComment) => {
        return <div key={comment._id}>{comment.body}</div>;
      })}
    </div>
  );
}

export default Comments;
