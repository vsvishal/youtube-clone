import React from "react";
import Comments from "./Comments";
import { useSearchParams } from "react-router-dom";
import useGetComments from "../utils/hook/useGetComments";
import { getDifferenceBetweenDates } from "../utils/helper";

function CommentsContainer({ totalComment }) {
  const [searchParams] = useSearchParams();
  const comments = useGetComments(searchParams.get("v"));

  return (
    <div>
      <h1 className="text-base md:text-xl font-bold my-0 md:my-2 mb-2 md:mb-5 font-Roboto">
        {totalComment} Comments
      </h1>
      {comments.map((comment) => {
        const {
          authorDisplayName,
          textOriginal,
          authorProfileImageUrl,
          publishedAt,
        } = comment.snippet.topLevelComment.snippet;
        return (
          <Comments
            key={comment.id}
            comment={textOriginal}
            authorDisplayName={authorDisplayName}
            authorProfileImageUrl={authorProfileImageUrl}
            publishedAt={getDifferenceBetweenDates(publishedAt)}
            replies={comment.replies ? comment.replies.comments : "empty-reply"}
            imgCss={"w-6 md:w-8 h-6 md:h-8 rounded-full"}
            paraCss={"ml-10 md:ml-12 w-72 md:w-[600px] text-xs md:text-sm"}
          />
        );
      })}
    </div>
  );
}

export default CommentsContainer;
