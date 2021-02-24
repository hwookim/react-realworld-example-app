import React from "react";
import { renderWithRouter } from "./_testUtils/render";
import { fireEvent } from "@testing-library/react";

import App from "./App";

import { APP_NAME } from "./utils/constants";
import $api from "./api";
import { ARTICLE, ARTICLES_RESPONSE, ARTICLE_TAGS } from "./_mocks";

describe("App", () => {
  const { articles } = ARTICLES_RESPONSE;
  const tags = ARTICLE_TAGS;

  beforeEach(() => {
    $api.article.getArticles = jest.fn().mockResolvedValue({ articles });
    $api.article.getTags = jest.fn().mockResolvedValue({ tags });
  });

  describe("render", () => {
    test("app name", () => {
      const { findAllByText } = renderWithRouter(<App />);
      findAllByText(APP_NAME);
    });
  });

  describe("click article preview", () => {
    test("render ArticlePage", async () => {
      const article = ARTICLE;
      const articles = [article];

      $api.article.getArticles = jest.fn().mockResolvedValue({ articles });
      $api.article.getArticle = jest.fn().mockResolvedValue({ article });

      const { findByText } = renderWithRouter(<App />);
      const articleLink = await findByText(article.description);

      fireEvent.click(articleLink);

      await findByText(article.body);
    });
  });
});
