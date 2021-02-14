import React from "react";
import ArticlePreview from "./ArticlePreview";

import { Article } from "../../type";

import { ARTICLE_LIST_RESPONSE } from "../../_mocks/article";

export default function ArticleList(): JSX.Element {
  const { articles } = ARTICLE_LIST_RESPONSE;
  return (
    <div>
      {articles.map((article: Article) => (
        <ArticlePreview article={article} key={article.slug} />
      ))}
    </div>
  );
}
