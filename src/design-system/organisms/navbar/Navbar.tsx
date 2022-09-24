/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "@/icons/logo.svg";

import "./navbar.sass";

import Drawer from "@/design-system/molecules/drawer/Drawer";
import Icon from "@/design-system/atoms/icon/Icon";

import data from "@/data.json";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const routes = Object.keys(data).map((itemName: string) => ({
    name: itemName,
    url: `/${itemName}`,
  }));
  const content = [{ name: "home", url: "/" }, ...routes];

  return (
    <nav data-testid="navbar" className="navbar">
      <div className="navbar-mobile">
        <div className="left">
          <span className="logo">
            <NavLink to="/">
              <Icon
                src={<Logo />}
                name="logo"
                size={{ width: "40px", height: "40px" }}
              />
            </NavLink>
          </span>
        </div>
        <div className="right">
          <Drawer position="right" content={content} />
        </div>
      </div>
      <div className="navbar-tablet">
        <span className="left">
          <span className="logo">
            <NavLink to="/">
              <Icon
                src={<Logo />}
                name="logo"
                size={{ width: "40px", height: "40px" }}
              />
            </NavLink>
          </span>
        </span>

        <span className="right">
          <span className="menu">
            {content.map((item, i) => (
              <NavLink to={item.url} className="menu-item" key={item.url}>
                <span>{` ${item.name}`}</span>
              </NavLink>
            ))}
          </span>
        </span>
      </div>
      <div className="navbar-desktop">
        <span className="left">
          <span className="logo">
            <NavLink to="/">
              <Icon
                src={<Logo />}
                name="logo"
                size={{ width: "40px", height: "40px" }}
              />
            </NavLink>
          </span>
        </span>
        <span className="middle" />
        <span className="right">
          <span className="menu">
            {content.map((item, i) => (
              <NavLink to={item.url} className="menu-item" key={item.url}>
                <span>
                  <strong>{`0${i}`}</strong>
                  {` ${item.name}`}
                </span>
              </NavLink>
            ))}
          </span>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
