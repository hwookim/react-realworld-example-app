import React from "react";
import render from "../../_testUtils/render";

import CommentList from "./CommentList";
import { COMMENT } from "../../_mocks";

describe("CommentList", () => {
  test("render All Comments", async () => {
    const comments = [COMMENT];

    const { findByText } = render(<CommentList comments={comments} />);

    for (const comment of comments) {
      await findByText(comment.body);
    }
  });
});
