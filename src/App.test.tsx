import React from "react";
import { renderWithRouter } from "./_testUtils/render";

import App from "./App";
import { APP_NAME } from "./utils/constants";

describe("App", () => {
  test("render app name", () => {
    const { container } = renderWithRouter(<App />);
    expect(container).toHaveTextContent(APP_NAME);
  });
});
