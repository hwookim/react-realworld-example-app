import React from "react";
import render from "../../_testUtils/render";

import ArticleListItem from "./ArticleListItem";

import { ARTICLE } from "../../_mocks";
import { Article } from "../../type";

describe("ArticleListItem", () => {
  const renderArticlePreview = (article: Article) => {
    return render(<ArticleListItem article={article} />);
  };

  test("render Article title", async () => {
    const article = ARTICLE;

    const { findByText } = renderArticlePreview(article);
    await findByText(article.title);
  });
});
