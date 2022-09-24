import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Destinations, { DestinationType } from "./Destinations";

const mockDestinations: DestinationType = {
  name: "",
  images: {
    png: "",
    webp: "",
  },
  description: "",
  distance: "",
  travel: "",
};
describe("Destinations", () => {
  beforeEach(() => {
    render(<Destinations data={[{ ...mockDestinations }]} />, {
      wrapper: BrowserRouter,
    });
  });

  test("renders ", async () => {
    const destinationsComponent = screen.queryAllByTestId(/destination/i);
    destinationsComponent.map((elem) => expect(elem).toBeInTheDocument());
  });
});
