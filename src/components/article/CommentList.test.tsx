import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import CommentList from "./CommentList";
import { COMMENT } from "../../_mocks";

describe("CommentList", () => {
  test("render All Comments", async () => {
    const comments = [COMMENT];

    const { findByText } = render(<CommentList comments={comments} />, {
      wrapper: BrowserRouter,
    });

    for (const comment of comments) {
      await findByText(comment.body);
    }
  });
});
