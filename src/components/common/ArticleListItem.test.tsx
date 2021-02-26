import React from "react";
import render from "../../_testUtils/render";
import { createMemoryHistory } from "history";
import { fireEvent } from "@testing-library/react";

import ArticleListItem from "./ArticleListItem";

import { ARTICLE } from "../../_testUtils/mockData";

describe("ArticleListItem", () => {
  test("render Article title", async () => {
    const article = ARTICLE;

    const { findByText } = render(<ArticleListItem article={article} />);
    await findByText(article.title);
  });

  describe("click link", () => {
    test("route to /article/:slug", async () => {
      const history = createMemoryHistory();
      history.push = jest.fn();

      const article = ARTICLE;

      const { findByText } = render(
        <ArticleListItem article={article} />,
        history
      );
      const articleLink = await findByText(article.title);

      fireEvent.click(articleLink);

      expect(history.push).toHaveBeenCalledWith(`/article/${article.slug}`);
    });
  });
});
