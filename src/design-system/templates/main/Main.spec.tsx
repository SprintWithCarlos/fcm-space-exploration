import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

describe("Main", () => {
  beforeEach(() => {
    render(
      <Main pageName="home">
        <p>Test</p>
      </Main>,
      { wrapper: BrowserRouter }
    );
  });

  test("renders ", async () => {
    const mainComponent = screen.getByRole("main");
    expect(mainComponent).toBeInTheDocument();
  });
});
