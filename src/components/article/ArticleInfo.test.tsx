import React from "react";
import render from "../../_testUtils/render";

import ArticleInfo from "./ArticleInfo";
import { ARTICLE } from "../../_testUtils/mockData";

describe("ArticleInfo", () => {
  test("render Article's information", async () => {
    const article = ARTICLE;

    const { findByText } = render(<ArticleInfo article={article} />);

    await findByText(article.author.username);
    await findByText(new Date(article.createdAt).toDateString());
  });
});
