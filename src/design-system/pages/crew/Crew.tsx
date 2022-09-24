import { useState } from "react";
import Main from "@/design-system/templates/main/Main";
import "./crew.sass";

export type CrewType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};
type CrewProps = {
  data: CrewType[];
};
const Crew: React.FC<CrewProps> = ({ data }: CrewProps) => {
  const [currentItem, setCurrentItem] = useState<number>(0);
  const renderCrew = () => (
    <div key={data[currentItem].name} className="column">
      <div id="block1">
        <div id="first">
          <picture>
            <source srcSet={data[currentItem].images.webp} type="image/webp" />
            <source srcSet={data[currentItem].images.png} type="image/png" />
            <img
              src={data[currentItem].images.png}
              alt={`${data[currentItem].name}pic`}
            />
          </picture>
          <hr />
        </div>
      </div>
      <div id="block2">
        <div id="second">
          <ul>
            {data.map((crew: CrewType, i: number) => (
              <button
                type="button"
                data-testid={`selectCrewMember-${i}`}
                onClick={() => {
                  console.log("button clicked!");
                  setCurrentItem(i);
                }}
                className="circle"
                key={crew.name}
              >
                <li
                  key={crew.name}
                  className={
                    currentItem === i ? "menu__item active" : "menu__item"
                  }
                />
              </button>
            ))}
          </ul>
        </div>

        <div id="third">
          <div className="subitem">
            <div className="role">{data[currentItem].role}</div>
            <div className="name" data-testid="cm-name">
              {data[currentItem].name}
            </div>
          </div>
          <p>{data[currentItem].bio}</p>
        </div>
      </div>
    </div>
  );
  return (
    <Main pageName="crew">
      <div className="crew__header">
        <span className="title__number">02</span>
        <span className="nav__text">meet your crew</span>
      </div>
      <div className="crew__container">{renderCrew()}</div>
      {/* <div className="crew__container" /> */}
      {/* {renderCrew()} */}
    </Main>
  );
};
export default Crew;
