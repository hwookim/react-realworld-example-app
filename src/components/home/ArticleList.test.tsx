import React from "react";
import { renderWithRouter } from "../../_testUtils/render";

import ArticleList from "./ArticleList";

import { ARTICLE_LIST_RESPONSE } from "../../_mocks/article";
import $api from "../../api";

jest.mock("../../api");

describe("ArticlePreview", () => {
  const renderArticleList = () => {
    return renderWithRouter(<ArticleList />);
  };

  test("render Article title", () => {
    const { articles } = ARTICLE_LIST_RESPONSE;

    $api.article.getArticleList = jest.fn().mockResolvedValue({ articles });

    const { findByText } = renderArticleList();
    articles.forEach(({ title }) => findByText(title));
  });
});
