/* eslint-disable array-callback-return */
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Crew, { CrewType } from "./Crew";

const mockCrew: CrewType = {
  name: "",
  images: {
    png: "",
    webp: "",
  },
  role: "",
  bio: "",
};
describe("Crew", () => {
  beforeEach(() => {
    render(<Crew data={[{ ...mockCrew }]} />, { wrapper: BrowserRouter });
  });

  test("renders ", async () => {
    const crewComponent = screen.queryAllByTestId(/crew/i);
    crewComponent.map((elem) => expect(elem).toBeInTheDocument());
  });
});
