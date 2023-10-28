import React from "react";
import CommentHoc from "./hoc/CommentHoc";

function Comments({
  comment,
  authorDisplayName,
  authorProfileImageUrl,
  publishedAt,
  replies,
  imgCss,
  paraCss,
}) {
  // console.log("Comments component: ", comment);
  // console.log("replies inside comment: ", replies);
  // console.log("typeof replies: ", typeof replies);

  return (
    <>
      <div className="mb-4">
        <div className="flex">
          <img className={imgCss} src={authorProfileImageUrl} alt="profile" />
          <h1 className="mt-1 ml-4 font-bold">{authorDisplayName}</h1>
          <h3 className="mt-1 ml-4">{publishedAt}</h3>
        </div>
        <p className={paraCss}>{comment}</p>
      </div>
      {replies !== "empty-reply" &&
        replies.map((reply) => {
          const {
            authorDisplayName,
            textOriginal,
            authorProfileImageUrl,
            publishedAt,
          } = reply.snippet;
          return (
            <CommentHoc
              key={reply.id}
              comment={textOriginal}
              authorDisplayName={authorDisplayName}
              authorProfileImageUrl={authorProfileImageUrl}
              publishedAt={publishedAt}
              replies={"empty-reply"}
              imgCss={"w-6 h-6 rounded-full"}
              paraCss={"ml-10 w-2/4"}
            />
          );
        })}
    </>
  );
}

export default Comments;
