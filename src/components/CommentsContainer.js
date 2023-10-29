import React from "react";
import Comments from "./Comments";
import { useSearchParams } from "react-router-dom";
import useGetComments from "../utils/hook/useGetComments";

function CommentsContainer({ totalComment }) {
  const [searchParams] = useSearchParams();
  const comments = useGetComments(searchParams.get("v"));
  console.log("comments: ", comments);

  return (
    <div>
      <h1 className="font-bold my-2 font-Roboto">{totalComment} Comments</h1>
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
            publishedAt={publishedAt}
            replies={comment.replies ? comment.replies.comments : "empty-reply"}
            imgCss={"w-10 h-10 rounded-full"}
            paraCss={"ml-14 w-[720px] text-sm"}
          />
        );
      })}
    </div>
  );
}

export default CommentsContainer;
