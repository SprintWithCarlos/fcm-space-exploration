/* eslint-disable array-callback-return */
import {
  fireEvent,
  getByDisplayValue,
  render,
  screen,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Crew, { CrewType } from "./Crew";
import data from "@/data.json";

describe("Crew", () => {
  beforeEach(() => {
    render(<Crew data={data.crew} />, { wrapper: BrowserRouter });
  });

  test("renders ", async () => {
    const crewComponent = screen.queryAllByTestId(/crew/i);
    crewComponent.map((elem) => expect(elem).toBeInTheDocument());
  });
  test("change crew member when button clicked", () => {
    const firstRender = screen.getByTestId(/cm-name/i);
    const button = screen.getByTestId(/selectcrewmember-2/i);
    fireEvent.click(button);
    const name = screen.getByTestId(/cm-name/i);
    expect(name.innerHTML).toBe("Victor Glover");
    expect(name.innerHTML).not.toEqual(firstRender.innerHTML);
  });
});
