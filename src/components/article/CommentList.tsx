import React from "react";

import CommentListItem from "./CommentListItem";

import { Comment } from "../../type";

export interface Props {
  comments: Comment[];
}

export default function CommentList({ comments }: Props): JSX.Element {
  return (
    <div className="col-xs-12 col-md-8 offset-md-2">
      {comments.map((comment) => (
        <CommentListItem comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
