import { useRef, useState } from "react";
import Main from "@/design-system/templates/main/Main";
import Slider from "@/design-system/organisms/slider/Slider";

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
  const createRefs = data.map(() => useRef<HTMLPictureElement>(null));
  const pinRef = useRef<HTMLDivElement>(null);

  return (
    <Main pageName="crew">
      <div className="crew__header">
        <span className="title__number">02</span>
        <span className="nav__text">meet your crew</span>
      </div>
      {/* <div className="crew__container">{renderCrew()}</div> */}
      <div className="crew__container">
        <Slider setCurrentItem={setCurrentItem}>
          <div className="slider-window">
            <div className="pic-strip" ref={pinRef}>
              {data?.map((item, i) => (
                <picture
                  id={`picture-${i}`}
                  key={item.name}
                  ref={createRefs[i]}
                >
                  <source
                    media="(max-width: 768px)"
                    srcSet={item.images.webp}
                    type="image/webp"
                  />
                  <source
                    media="(min-width: 769px)"
                    srcSet={item.images.png}
                    type="image/png"
                  />
                  <img src={item.images.png} alt={`${item.name}pic`} />
                </picture>
              ))}
            </div>
          </div>
          <hr />
          <ul>
            {data.map((crew: CrewType, i: number) => (
              <button
                aria-label={`link to ${crew.name} section`}
                type="button"
                data-testid={`selectCrewMember-${i}`}
                onClick={() => {
                  createRefs[i].current?.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                  });
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
        </Slider>
        <div className="wrapper">
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
      {/* <div className="crew__container" /> */}
      {/* {renderCrew()} */}
    </Main>
  );
};
export default Crew;
