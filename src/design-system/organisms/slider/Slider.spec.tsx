import { render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider", () => {
  // const [currentItem, setCurrentItem] = useState(0);
  let originalObserver: any;
  beforeEach(() => {
    originalObserver = global.IntersectionObserver;
    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: () => null,
      disconnect: () => null,

      unobserve: () => null,
    })) as jest.Mock;
    render(
      <Slider setCurrentItem={() => {}}>
        <p>Test</p>
      </Slider>
    );
  });

  test("renders ", async () => {
    const sliderComponent = screen.queryByTestId(/slider/i);
    expect(sliderComponent).toBeInTheDocument();
  });
});
