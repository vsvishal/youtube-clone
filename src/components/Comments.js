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
  return (
    <>
      <div className="mb-4 font-Roboto">
        <div className="flex">
          <img className={imgCss} src={authorProfileImageUrl} alt="profile" />
          <h3 className="mt-1 ml-4 font-semibold text-xs md:text-sm">
            {authorDisplayName}
          </h3>
          <h3 className="text-gray-500 mt-1 ml-2 text-xs md:text-sm">
            {publishedAt}
          </h3>
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
              paraCss={"ml-10 w-52 md:w-[500px] text-sm"}
            />
          );
        })}
    </>
  );
}

export default Comments;
