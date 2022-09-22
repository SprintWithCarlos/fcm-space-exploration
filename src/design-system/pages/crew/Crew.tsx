import { useState } from "react";
import Main from "@/design-system/templates/main/Main";
import "./crew.sass";

type CrewType = {
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
      <picture>
        <source srcSet={data[currentItem].images.webp} type="image/webp" />
        <source srcSet={data[currentItem].images.png} type="image/png" />
        <img
          src={data[currentItem].images.png}
          alt={`${data[currentItem].name}pic`}
        />
      </picture>
      <hr />
      <ul>
        {data.map((crew: CrewType, i: number) => (
          <button
            type="button"
            onClick={() => setCurrentItem(i)}
            className="circle"
            key={crew.name}
          >
            <li
              key={crew.name}
              className={currentItem === i ? "menu__item active" : "menu__item"}
            />
          </button>
        ))}
      </ul>

      <div className="subitem">
        <div className="role">{data[currentItem].role}</div>
        <div className="name">{data[currentItem].name}</div>
      </div>
      <p>{data[currentItem].bio}</p>
    </div>
  );
  return (
    <Main pageName="crew">
      <div className="row">
        <span className="title__number">02</span>
        <span className="nav__text">meet your crew</span>
      </div>
      {renderCrew()}
    </Main>
  );
};
export default Crew;
