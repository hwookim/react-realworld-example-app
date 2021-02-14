import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { APP_NAME } from "./utils/constants";

describe("App", () => {
  test("render app name", () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent(APP_NAME);
  });
});
