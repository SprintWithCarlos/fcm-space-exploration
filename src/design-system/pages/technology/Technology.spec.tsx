import { render, screen } from "@testing-library/react";
import Technology from "./Technology";

describe("Technology", () => {
  beforeEach(() => {
    render(<Technology />);
  });

  test("renders ", async () => {
    const technologyComponent = screen.queryByTestId(/technology/i);
    expect(technologyComponent).toBeInTheDocument();
  });
});

