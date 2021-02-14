import React from "react";

import { render, RenderResult } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

function renderWithRouter(ui: JSX.Element): RenderResult {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

export { renderWithRouter };
