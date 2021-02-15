import React from "react";
import { render } from "@testing-library/react";

import ArticleTagList from "./ArticleTagList";
import { ARTICLE_TAG_LIST } from "../../_mocks/article";
import $api from "../../api";

jest.mock("../../api");

describe("ArticlePreview", () => {
  const renderArticleTagList = () => {
    return render(<ArticleTagList />);
  };

  test("render Article title", async () => {
    const tags = ARTICLE_TAG_LIST;

    $api.article.getTagList = jest.fn().mockResolvedValue({ tags });

    const { findByText } = renderArticleTagList();
    for (const tag of tags) {
      await findByText(tag);
    }
  });
});
