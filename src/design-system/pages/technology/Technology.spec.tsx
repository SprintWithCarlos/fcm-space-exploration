import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Technology, { TechnologyType } from "./Technology";

const mockTechnology: TechnologyType = {
  name: "",
  images: {
    portrait: "",
    landscape: "",
  },
  description: "",
};
describe("Technology", () => {
  beforeEach(() => {
    render(<Technology data={[{ ...mockTechnology }]} />, {
      wrapper: BrowserRouter,
    });
  });

  test("renders ", async () => {
    const technologyComponent = screen.queryAllByTestId(/technology/i);
    technologyComponent.map((elem) => expect(elem).toBeInTheDocument());
  });
});
