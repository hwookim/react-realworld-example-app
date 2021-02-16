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

  describe("click item", () => {
    test("render Article", async () => {
      const article = ARTICLE;
      const articles = [article];

      $api.article.getArticleList = jest.fn().mockResolvedValue({ articles });

      const { findByText, findByTestId } = renderWithRouter(<App />);
      const articleLink = await findByText(article.description);

      fireEvent.click(articleLink);

      await findByTestId("article-page");
    });
  });
});
