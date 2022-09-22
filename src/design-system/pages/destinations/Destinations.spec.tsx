import { render, screen } from "@testing-library/react";
import Destinations from "./Destinations";

describe("Destinations", () => {
  beforeEach(() => {
    render(<Destinations />);
  });

  test("renders ", async () => {
    const destinationsComponent = screen.queryByTestId(/destinations/i);
    expect(destinationsComponent).toBeInTheDocument();
  });
});

