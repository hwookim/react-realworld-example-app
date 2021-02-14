import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import ArticleList from "./ArticleList";

import { ARTICLE_LIST_RESPONSE } from "../../_mocks/article";

describe("ArticlePreview", () => {
  const renderArticleList = () => {
    return render(
      <BrowserRouter>
        <ArticleList />
      </BrowserRouter>
    );
  };

  test("render Article title", () => {
    const { articles } = ARTICLE_LIST_RESPONSE;

    const { container } = renderArticleList();
    articles.map(({ title }) => expect(container).toHaveTextContent(title));
  });
});
