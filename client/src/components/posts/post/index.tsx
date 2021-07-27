import React from "react";
import { IPost } from "../../../../../shared/types";

function Post({ title }: IPost) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

export default Post;
