import React from "react";
import { renderWithRouter } from "../../_testUtils/render";

import ArticleList from "./ArticleList";

import { ARTICLE_LIST_RESPONSE } from "../../_mocks";
import $api from "../../api";

jest.mock("../../api");

describe("ArticlePreview", () => {
  const renderArticleList = () => {
    return renderWithRouter(<ArticleList />);
  };

  test("render Article title", async () => {
    const { articles } = ARTICLE_LIST_RESPONSE;

    $api.article.getArticleList = jest.fn().mockResolvedValue({ articles });

    const { findByText } = renderArticleList();
    for (const { title } of articles) {
      await findByText(title);
    }
  });
});
