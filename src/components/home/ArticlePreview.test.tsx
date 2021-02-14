import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import ArticlePreview from "./ArticlePreview";

import { ARTICLE } from "../../_mocks/article";
import { Article } from "../../type";

describe("ArticlePreview", () => {
  const renderArticlePreview = (article: Article) => {
    return render(
      <BrowserRouter>
        <ArticlePreview article={article} />
      </BrowserRouter>
    );
  };

  test("render Article title", () => {
    const article = ARTICLE;

    const { container } = renderArticlePreview(article);
    expect(container).toHaveTextContent(article.title);
  });
});
