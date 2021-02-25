import React from "react";
import render from "../../_testUtils/render";

import ArticleListPagination from "./ArticleListPagination";

describe("ArticleListPagination", () => {
  test("render page btn 1 ~ count/10", async () => {
    const articleCount = 100;
    const { findByText } = render(
      <ArticleListPagination articlesCount={articleCount} />
    );

    for (let i = 1; i <= articleCount / 10; i++) {
      await findByText(i);
    }
  });
});
