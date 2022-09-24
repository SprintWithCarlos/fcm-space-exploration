/* eslint-disable implicit-arrow-linebreak */
import { useState } from "react";
import Main from "@/design-system/templates/main/Main";
import "./destinations.sass";

export type DestinationType = {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
};
type DestinationsProps = {
  data: DestinationType[];
};
const Destinations: React.FC<DestinationsProps> = ({
  data,
}: DestinationsProps) => {
  const [currentItem, setCurrentItem] = useState<number>(0);
  const renderDestination = () => (
    <div key={data[currentItem].name} className="column">
      <div id="block1">
        <picture>
          <source srcSet={data[currentItem].images.webp} type="image/webp" />
          <source srcSet={data[currentItem].images.png} type="image/png" />
          <img
            src={data[currentItem].images.png}
            alt={`${data[currentItem].name}pic`}
          />
        </picture>
      </div>
      <div id="block2">
        <div className="menu">
          <ul>
            {data.map((destination: DestinationType, i: number) => (
              <li
                key={destination.name}
                className={
                  currentItem === i ? "menu__item active" : "menu__item"
                }
              >
                <button type="button" onClick={() => setCurrentItem(i)}>
                  {destination.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <h3>{data[currentItem].name}</h3>
        <p>{data[currentItem].description}</p>
        <hr />
        <div className="description__row">
          <span className="subitem">
            <div className="nav__text-small">avg. distance</div>
            <h4>{data[currentItem].distance}</h4>
          </span>
          <span className="subitem">
            <div className="nav__text-small">est. travel time</div>
            <h4>{data[currentItem].travel}</h4>
          </span>
        </div>
      </div>
    </div>
  );
  return (
    <Main pageName="destination">
      <div className="destination__header">
        <span className="title__number">01</span>
        <span className="nav__text">pick your destination</span>
      </div>
      {renderDestination()}
    </Main>
  );
};
export default Destinations;
