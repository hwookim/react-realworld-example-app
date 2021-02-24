import React from "react";
import render from "../../_testUtils/render";

import ArticleTagList from "./ArticleTagList";
import { ARTICLE_TAGS } from "../../_mocks";
import $api from "../../api";

jest.mock("../../api");

describe("ArticleListItem", () => {
  const renderArticleTagList = () => {
    return render(<ArticleTagList />);
  };

  test("render Article title", async () => {
    const tags = ARTICLE_TAGS;

    $api.article.getTags = jest.fn().mockResolvedValue({ tags });

    const { findByText } = renderArticleTagList();
    for (const tag of tags) {
      await findByText(tag);
    }
  });
});
