/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable implicit-arrow-linebreak */
import { Link, useLocation } from "react-router-dom";
import Icon from "@/design-system/atoms/icon/Icon";
import { ReactComponent as CloseIcon } from "@/icons/icon-close.svg";
import "./sidebar.sass";

type SidebarProps = {
  content: {
    name: string;
    url: string;
  }[];
  state: {
    isOpen: boolean;
    setIsOpen: (arg0: boolean) => void;
  };
};
const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { content, state } = props;
  const location = useLocation();
  return (
    <div data-testid="sidebar" className="sidebar">
      <button
        type="button"
        data-testid="draw-c"
        className="close"
        onClick={() => state.setIsOpen(!state.isOpen)}
        aria-label="close menu"
      >
        <Icon src={<CloseIcon />} name="close" />
      </button>
      <ul>
        {content.map((item, i) => {
          const defineActive = (): boolean => {
            let name: string;
            if (location.pathname === "/") {
              name = "home";
            } else {
              name = location.pathname.slice(1);
            }
            return name === item.name;
          };

          return (
            <li className={defineActive() ? "active" : ""}>
              <Link to={item.url} key={item.name}>
                <span>
                  <strong>{`0${i}`}</strong>
                  {` ${item.name.toUpperCase()}`}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
