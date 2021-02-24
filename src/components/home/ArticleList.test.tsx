import React from "react";
import { renderWithRouter } from "../../_testUtils/render";

import ArticleList from "./ArticleList";

import { ARTICLES_RESPONSE } from "../../_mocks";
import $api from "../../api";

jest.mock("../../api");

describe("ArticleListItem", () => {
  const renderArticleList = () => {
    return renderWithRouter(<ArticleList />);
  };

  test("render Article title", async () => {
    const { articles } = ARTICLES_RESPONSE;

    $api.article.getArticles = jest.fn().mockResolvedValue({ articles });

    const { findByText } = renderArticleList();
    for (const { title } of articles) {
      await findByText(title);
    }
  });
});
