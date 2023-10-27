import React from "react";
import CommentHoc from "./hoc/CommentHoc";

function Comments({ comment, replies }) {
  console.log("Comments component: ", comment);
  console.log("replies inside comment: ", replies);
  console.log("typeof replies: ", typeof replies);

  return (
    <>
      <div className="p-2 m-2">{comment}</div>
      {replies !== "empty-reply" &&
        replies.map((reply) => (
          // need to add higher order component
          <CommentHoc
            comment={reply.snippet.textOriginal}
            replies={"empty-reply"}
          />
        ))}
    </>
  );
}

export default Comments;
