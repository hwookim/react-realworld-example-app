import React from "react";
import { render } from "@testing-library/react";

import ArticleContainer from "./ArticleContainer";
import { ARTICLE } from "../../_mocks/article";

describe("ArticleInfo", () => {
  test("render Article's information", () => {
    const article = ARTICLE;

    const { container } = render(<ArticleContainer article={article} />);

    expect(container).toHaveTextContent(article.title);
    expect(container).toHaveTextContent(article.body);
  });
});
