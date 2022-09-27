import { render, screen } from "@testing-library/react";
import Test from "./Test";

describe("Test", () => {
  beforeEach(() => {
    render(<Test />);
  });

  test("renders ", async () => {
    const testComponent = screen.queryByTestId(/test/i);
    expect(testComponent).toBeInTheDocument();
  });
});

