import React from "react";

import { Article } from "../../type";

export interface Props {
  article: Article;
}

export default function ArticleInfo({ article }: Props): JSX.Element {
  return (
    <div className="article-meta">
      <img src={article.author.image} alt={article.author.username} />

      <div className="info">
        {article.author.username}
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
}
