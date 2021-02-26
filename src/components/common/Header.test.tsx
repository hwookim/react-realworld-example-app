import React from "react";
import render from "../../_testUtils/render";
import { createMemoryHistory } from "history";
import { fireEvent } from "@testing-library/react";

import Header from "./Header";

import { APP_NAME } from "../../utils/constants";

describe("Header", () => {
  describe("click Title", () => {
    test("route to /", async () => {
      const history = createMemoryHistory();
      history.push = jest.fn();

      const { findByText } = render(<Header />, history);
      const title = await findByText(APP_NAME);

      fireEvent.click(title);

      expect(history.push).toHaveBeenCalledWith("/");
    });
  });

  describe("click Home", () => {
    test("route to /", async () => {
      const history = createMemoryHistory();
      history.push = jest.fn();

      const { findByText } = render(<Header />, history);
      const home = await findByText("Home");

      fireEvent.click(home);

      expect(history.push).toHaveBeenCalledWith("/");
    });
  });

  describe("click Sign in", () => {
    test("route to /login", async () => {
      const history = createMemoryHistory();
      history.push = jest.fn();

      const { findByText } = render(<Header />, history);
      const login = await findByText("Sign in");

      fireEvent.click(login);

      expect(history.push).toHaveBeenCalledWith("/login");
    });
  });

  describe("click Sign up", () => {
    test("route to /register", async () => {
      const history = createMemoryHistory();
      history.push = jest.fn();

      const { findByText } = render(<Header />, history);
      const register = await findByText("Sign up");

      fireEvent.click(register);

      expect(history.push).toHaveBeenCalledWith("/register");
    });
  });
});
