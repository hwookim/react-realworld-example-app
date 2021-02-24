import React from "react";

import { render, RenderResult } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

export default function (ui: JSX.Element): RenderResult {
  return render(
    <RecoilRoot>
      <BrowserRouter>{ui}</BrowserRouter>
    </RecoilRoot>
  );
}
