import React, { useEffect } from "react";
import { COMMENTS_URL } from "../utils/constants";
import COMMENTS_MOCK_DATA2 from "../utils/mock/commentsMockData2";
import Comments from "./Comments";

function CommentsContainer() {
  const comments = COMMENTS_MOCK_DATA2[0].items;
  console.log("comments ", comments);
  // console.log(
  //   "comments display ",
  //   comments[0].snippet.topLevelComment.snippet.textOriginal
  // );

  console.log("reply ", comments[0].replies.comments[1].snippet.textOriginal);

  // comments.map((comment) => {
  //   console.log("MAP: ", comment.snippet.topLevelComment.snippet.textOriginal);
  //   if (comment.replies) {
  //     comment.replies.comments.map((reply) =>
  //       console.log("Reply: ", reply.snippet.textOriginal)
  //     );
  //   }
  // });

  // const addComment = comments.map((comment) => {
  //   <Comments comment={comment.snippet.topLevelComment.snippet.textOriginal} />;

  //   if (comment.replies) {
  //     comment.replies.comments.map((reply) => (
  //       <Comments comment={reply.snippet.textOriginal} />
  //     ));
  //   }
  // });

  // useEffect(() => {
  //   getComments();
  // }, []);

  // const getComments = async () => {
  //   const data = await fetch(COMMENTS_URL);
  //   const json = await data.json();
  //   // console.log("comments: ", json);
  // };

  return (
    <div>
      <h1 className="font-bold">CommentsContainer</h1>
      {comments.map((comment) => (
        <Comments
          comment={comment.snippet.topLevelComment.snippet.textOriginal}
          replies={comment.replies ? comment.replies.comments : "empty-reply"}
        />
      ))}
    </div>
  );
}

export default CommentsContainer;
