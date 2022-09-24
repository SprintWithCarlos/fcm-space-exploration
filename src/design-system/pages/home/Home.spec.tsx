/* eslint-disable array-callback-return */
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />, { wrapper: BrowserRouter });
  });

  test("renders ", async () => {
    const homeComponent = screen.queryAllByTestId(/home/i);
    homeComponent.map((elem) => expect(elem).toBeInTheDocument());
  });
});
