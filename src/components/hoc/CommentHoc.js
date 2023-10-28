import React from "react";
import Comments from "../Comments";

function CommentHoc({
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
      <div className="mx-4 px-4">
        {/* <h1 className="font-bold px-2 mx-2 -mb-3">Reply</h1> */}
        <Comments
          comment={comment}
          authorDisplayName={authorDisplayName}
          authorProfileImageUrl={authorProfileImageUrl}
          publishedAt={publishedAt}
          replies={replies}
          imgCss={imgCss}
          paraCss={paraCss}
        />
      </div>
    </>
  );
}

export default CommentHoc;
