import { useState } from "react";
import Main from "@/design-system/templates/main/Main";
import "./technology.sass";

type TechnologyType = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};
type TechnologyProps = {
  data: TechnologyType[];
};
const Technology: React.FC<TechnologyProps> = ({ data }: TechnologyProps) => {
  const [currentItem, setCurrentItem] = useState<number>(0);
  const renderTecnology = () => (
    <div key={data[currentItem].name} className="column">
      <div className="pic-container">
        <picture>
          <source
            srcSet={data[currentItem].images.landscape}
            type="image/jpg"
          />
          <source srcSet={data[currentItem].images.portrait} type="image/jpg" />
          <img
            src={data[currentItem].images.landscape}
            alt={`${data[currentItem].name}pic`}
          />
        </picture>
      </div>

      <ul>
        {data.map((technology: TechnologyType, i: number) => (
          <button
            type="button"
            onClick={() => setCurrentItem(i)}
            className="circle"
            key={technology.name}
          >
            <li
              key={technology.name}
              className={currentItem === i ? "menu__item active" : "menu__item"}
            >
              {i + 1}
            </li>
          </button>
        ))}
      </ul>

      <div className="subitem">
        <div className="nav__text">the terminology...</div>
        <div className="name">{data[currentItem].name}</div>
      </div>
      <p>{data[currentItem].description}</p>
    </div>
  );
  return (
    <Main pageName="technology">
      <div className="row">
        <span className="title__number">03 </span>
        <span className="nav__text"> space launch 101</span>
      </div>
      {renderTecnology()}
    </Main>
  );
};
export default Technology;
