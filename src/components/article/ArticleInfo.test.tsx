import React from "react";
import { render } from "@testing-library/react";

import ArticleInfo from "./ArticleInfo";
import { ARTICLE } from "../../_mocks/article";

describe("ArticleInfo", () => {
  test("render Article's information", () => {
    const article = ARTICLE;

    const { container } = render(<ArticleInfo article={article} />);

    expect(container).toHaveTextContent(article.author.username);
    expect(container).toHaveTextContent(
      new Date(article.createdAt).toDateString()
    );
  });
});
