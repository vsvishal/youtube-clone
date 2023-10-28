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

  // console.log("reply ", comments[0].replies.comments[1].snippet.textOriginal);

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
      {comments.map((comment) => {
        const {
          authorDisplayName,
          textOriginal,
          authorProfileImageUrl,
          publishedAt,
        } = comment.snippet.topLevelComment.snippet;
        return (
          <Comments
            comment={textOriginal}
            authorDisplayName={authorDisplayName}
            authorProfileImageUrl={authorProfileImageUrl}
            publishedAt={publishedAt}
            replies={comment.replies ? comment.replies.comments : "empty-reply"}
            imgCss={"w-10 h-10 rounded-full"}
            paraCss={"ml-14 w-2/4"}
          />
        );
      })}
    </div>
  );
}

export default CommentsContainer;
