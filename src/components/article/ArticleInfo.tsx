import React from "react";
import { Link } from "react-router-dom";

import { Article } from "../../type";

export interface Props {
  article: Article;
}

export default function ArticleInfo({ article }: Props): JSX.Element {
  return (
    <div className="article-meta">
      <img src={article.author.image} alt={article.author.username} />

      <div className="info">
        <Link className="author" to={`/@${article.author.username}`}>
          {article.author.username}
        </Link>
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
}
