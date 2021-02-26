import React from "react";

import { render, RenderResult } from "@testing-library/react";
import { Router } from "react-router-dom";
import { RouterProps } from "react-router";
import { createMemoryHistory } from "history";
import { RecoilRoot } from "recoil";

export default function (
  ui: JSX.Element,
  history: RouterProps["history"] = createMemoryHistory()
): RenderResult {
  return render(
    <RecoilRoot>
      <Router history={history}>{ui}</Router>
    </RecoilRoot>
  );
}
