import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import CommentListItem from "./CommentListItem";
import { COMMENT } from "../../_mocks";

describe("CommentListItem", () => {
  test("render Comment's information", async () => {
    const { findByText } = render(<CommentListItem comment={COMMENT} />, {
      wrapper: BrowserRouter,
    });

    await findByText(COMMENT.body);
    await findByText(COMMENT.author.username);
  });
});
