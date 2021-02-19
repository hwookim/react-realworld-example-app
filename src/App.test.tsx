import React from "react";
import { renderWithRouter } from "./_testUtils/render";
import { fireEvent } from "@testing-library/react";

import App from "./App";

import { APP_NAME } from "./utils/constants";
import $api from "./api";
import { ARTICLE } from "./_mocks/article";

describe("App", () => {
  test("render app name", () => {
    const { container } = renderWithRouter(<App />);
    expect(container).toHaveTextContent(APP_NAME);
  });

  describe("click article preview", () => {
    test("render ArticlePage", async () => {
      const article = ARTICLE;
      const articles = [article];

      $api.article.getArticleList = jest.fn().mockResolvedValue({ articles });
      $api.article.getArticle = jest.fn().mockResolvedValue({ article });

      const { findByText } = renderWithRouter(<App />);
      const articleLink = await findByText(article.description);

      fireEvent.click(articleLink);

      await findByText(article.body);
    });
  });
});
