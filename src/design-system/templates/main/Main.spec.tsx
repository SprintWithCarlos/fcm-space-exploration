import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("Main", () => {
  beforeEach(() => {
    render(<Main />);
  });

  test("renders ", async () => {
    const mainComponent = screen.queryByTestId(/main/i);
    expect(mainComponent).toBeInTheDocument();
  });
});

