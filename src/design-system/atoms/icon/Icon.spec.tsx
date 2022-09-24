import { render, screen } from "@testing-library/react";
import Icon from "./Icon";
import { ReactComponent as BurgerIcon } from "@/icons/icon-hamburger.svg";

describe("Icon", () => {
  test("renders Icon ", async () => {
    render(<Icon src={<BurgerIcon />} name="burger" />);
    const iconComponent = screen.queryByTestId(/burger/i);
    expect(iconComponent).toBeInTheDocument();
  });
  test("renders Icon rounder", async () => {
    render(<Icon src={<BurgerIcon />} name="burger" rounded />);
    const iconComponent = screen.queryByTestId(/burger/i);
    expect(iconComponent).toBeInTheDocument();
    expect(iconComponent?.style.borderRadius).toBe("50%");
  });
});
