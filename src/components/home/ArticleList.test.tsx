import React from "react";

import ArticleList from "./ArticleList";

import { ARTICLE_LIST_RESPONSE } from "../../_mocks/article";
import { renderWithRouter } from "../../_testUtils/render";

describe("ArticlePreview", () => {
  const renderArticleList = () => {
    return renderWithRouter(<ArticleList />);
  };

  test("render Article title", () => {
    const { articles } = ARTICLE_LIST_RESPONSE;

    const { container } = renderArticleList();
    articles.map(({ title }) => expect(container).toHaveTextContent(title));
  });
});
