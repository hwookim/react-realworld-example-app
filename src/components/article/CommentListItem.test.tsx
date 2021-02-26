import React from "react";
import render from "../../_testUtils/render";

import CommentListItem from "./CommentListItem";
import { COMMENT } from "../../_testUtils/mockData";

describe("CommentListItem", () => {
  test("render Comment's information", async () => {
    const { findByText } = render(<CommentListItem comment={COMMENT} />);

    await findByText(COMMENT.body);
    await findByText(COMMENT.author.username);
  });
});
