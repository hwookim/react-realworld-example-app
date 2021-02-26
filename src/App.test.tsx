import React from "react";
import render from "./_testUtils/render";
import { createMemoryHistory } from "history";

import App from "./App";

import $api from "./api";
import {
  ARTICLE,
  ARTICLES_RESPONSE,
  ARTICLE_TAGS,
  PROFILE,
} from "./_testUtils/mockData";

describe("App", () => {
  const { articles } = ARTICLES_RESPONSE;
  const tags = ARTICLE_TAGS;

  beforeEach(() => {
    $api.article.getArticles = jest.fn().mockResolvedValue({ articles });
    $api.article.getTags = jest.fn().mockResolvedValue({ tags });
  });

  describe("route to /", () => {
    test("render LoginPage", async () => {
      const history = createMemoryHistory();
      history.push(`/`);

      const { findByTestId } = render(<App />, history);

      await findByTestId("home-page");
    });
  });

  describe("route to /login", () => {
    test("render LoginPage", async () => {
      const history = createMemoryHistory();
      history.push(`/login`);

      const { findByTestId } = render(<App />, history);

      await findByTestId("login-page");
    });
  });

  describe("route to /register", () => {
    test("render RegisterPage", async () => {
      const history = createMemoryHistory();
      history.push(`/register`);

      const { findByTestId } = render(<App />, history);

      await findByTestId("register-page");
    });
  });

  describe("route to /article/:slug", () => {
    test("render ArticlePage", async () => {
      const article = ARTICLE;

      const history = createMemoryHistory();
      history.push(`/article/${article.slug}`);

      $api.article.getArticle = jest.fn().mockResolvedValue({ article });

      const { findByTestId } = render(<App />, history);

      await findByTestId("article-page");
    });
  });

  describe("route to /@:username", () => {
    test("render ProfilePage", async () => {
      const profile = PROFILE;

      const history = createMemoryHistory();
      history.push(`/@${profile.username}`);

      $api.user.getProfile = jest.fn().mockResolvedValue({ profile });

      const { findByTestId } = render(<App />, history);

      await findByTestId("profile-page");
    });
  });
});
