import React from "react";

import ArticlePreview from "./ArticlePreview";

import { ARTICLE } from "../../_mocks";
import { Article } from "../../type";
import { renderWithRouter } from "../../_testUtils/render";

describe("ArticlePreview", () => {
  const renderArticlePreview = (article: Article) => {
    return renderWithRouter(<ArticlePreview article={article} />);
  };

  test("render Article title", () => {
    const article = ARTICLE;

    const { container } = renderArticlePreview(article);
    expect(container).toHaveTextContent(article.title);
  });
});
