import React from "react";
import render from "../../_testUtils/render";

import ArticleList from "./ArticleList";

import { ARTICLES_RESPONSE } from "../../_testUtils/mockData";
import $api from "../../api";
import { Article } from "../../type";
import { NO_ARTICLES_MESSAGE } from "../../utils/constants";

jest.mock("../../api");

describe("ArticleList", () => {
  const renderArticleList = () => {
    return render(<ArticleList />);
  };

  describe("render", () => {
    test("each article title", async () => {
      const { articles } = ARTICLES_RESPONSE;
      $api.article.getArticles = jest.fn().mockResolvedValue({ articles });

      const { findByText } = renderArticleList();
      for (const { title } of articles) {
        await findByText(title);
      }
    });
  });

  describe("with no articles", () => {
    test("render no articles message", async () => {
      const articles = [] as Article[];
      $api.article.getArticles = jest.fn().mockResolvedValue({ articles });

      const { findByText } = renderArticleList();
      await findByText(NO_ARTICLES_MESSAGE);
    });
  });
});
