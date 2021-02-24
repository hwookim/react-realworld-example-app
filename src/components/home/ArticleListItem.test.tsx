import React from "react";

import ArticleListItem from "./ArticleListItem";

import { ARTICLE } from "../../_mocks";
import { Article } from "../../type";
import { renderWithRouter } from "../../_testUtils/render";

describe("ArticleListItem", () => {
  const renderArticlePreview = (article: Article) => {
    return renderWithRouter(<ArticleListItem article={article} />);
  };

  test("render Article title", () => {
    const article = ARTICLE;

    const { container } = renderArticlePreview(article);
    expect(container).toHaveTextContent(article.title);
  });
});
