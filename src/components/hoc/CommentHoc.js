import React from "react";
import Comments from "../Comments";

function CommentHoc({ comment, replies }) {
  return (
    <>
      <div className="mx-4 px-4">
        <h1 className="font-bold">Reply</h1>
        <Comments comment={comment} replies={replies} />
      </div>
    </>
  );
}

export default CommentHoc;
