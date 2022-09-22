import { render, screen } from "@testing-library/react";
import Crew from "./Crew";

describe("Crew", () => {
  beforeEach(() => {
    render(<Crew />);
  });

  test("renders ", async () => {
    const crewComponent = screen.queryByTestId(/crew/i);
    expect(crewComponent).toBeInTheDocument();
  });
});

