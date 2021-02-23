import React from "react";

import { Link } from "react-router-dom";

import { Comment } from "../../type";

export interface Props {
  comment: Comment;
}

export default function CommentListItem({ comment }: Props): JSX.Element {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <Link to="" className="comment-author">
          <img
            src={comment.author.image}
            className="comment-author-img"
            alt={comment.author.username}
          />
        </Link>
        <Link to="" className="comment-author">
          {comment.author.username}
        </Link>
        <span className="date-posted">
          {new Date(comment.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
}
