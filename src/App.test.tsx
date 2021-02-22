import React from "react";
import { renderWithRouter } from "./_testUtils/render";
import { fireEvent } from "@testing-library/react";

import App from "./App";

import { APP_NAME } from "./utils/constants";
import $api from "./api";
import {
  ARTICLE,
  ARTICLE_LIST_RESPONSE,
  ARTICLE_TAG_LIST,
} from "./_mocks/article";

describe("App", () => {
  const { articles } = ARTICLE_LIST_RESPONSE;
  const tags = ARTICLE_TAG_LIST;

  beforeEach(() => {
    $api.article.getArticleList = jest.fn().mockResolvedValue({ articles });
    $api.article.getTagList = jest.fn().mockResolvedValue({ tags });
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

      $api.article.getArticleList = jest.fn().mockResolvedValue({ articles });
      $api.article.getArticle = jest.fn().mockResolvedValue({ article });

      const { findByText } = renderWithRouter(<App />);
      const articleLink = await findByText(article.description);

      fireEvent.click(articleLink);

      await findByText(article.body);
    });
  });
});
