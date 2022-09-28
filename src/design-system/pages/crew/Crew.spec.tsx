/* eslint-disable array-callback-return */
import {
  fireEvent,
  getByDisplayValue,
  render,
  screen,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Crew from "./Crew";
import data from "@/data.json";

describe("Crew", () => {
  let originalObserver: any;
  let scrollIntoViewMock: any;
  beforeEach(() => {
    scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    originalObserver = global.IntersectionObserver;
    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: () => null,
      disconnect: () => null,

      unobserve: () => null,
    })) as jest.Mock;
    render(<Crew data={data.crew} />, { wrapper: BrowserRouter });
  });

  test("renders ", async () => {
    const crewComponent = screen.queryAllByTestId(/crew/i);
    crewComponent.map((elem) => expect(elem).toBeInTheDocument());
  });
  test("change crew member when button clicked", async () => {
    const firstRender = screen.getByTestId(/cm-name/i);
    console.log(firstRender);
    const button = screen.getByTestId(/selectcrewmember-2/i);
    fireEvent.click(button);
    expect(scrollIntoViewMock).toHaveBeenCalled();
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
  });
});
