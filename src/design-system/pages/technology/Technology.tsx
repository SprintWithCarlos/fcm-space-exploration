import { useRef, useState } from "react";
import Main from "@/design-system/templates/main/Main";
import "./technology.sass";
import Slider from "@/design-system/organisms/slider/Slider";

export type TechnologyType = {
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
  const createRefs = data.map(() => useRef<HTMLPictureElement>(null));
  const pinRef = useRef<HTMLDivElement>(null);
  const renderTecnology = () => (
    <>
      <div id="mobile-tech">
        <Slider setCurrentItem={setCurrentItem}>
          <>
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
                      srcSet={item.images.landscape}
                      type="image/jpg"
                    />
                    <source
                      media="(min-width: 769px)"
                      srcSet={item.images.portrait}
                      type="image/jpg"
                    />
                    <img src={item.images.landscape} alt={`${item.name}pic`} />
                  </picture>
                ))}
              </div>
            </div>
            <div key={data[currentItem].name} className="column">
              <div
                role="group"
                aria-label="image slider controls"
                id="slider-controls"
              >
                {data.map((item: any, i: number) => (
                  <button
                    type="button"
                    onClick={() => {
                      createRefs[i].current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className={currentItem === i ? "active circle" : " circle"}
                    key={item.name}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </>
        </Slider>
        <div key={data[currentItem].name} className="column">
          <div id="block">
            <div className="subitem">
              <div className="nav__text-small">the terminology...</div>
              <div className="name">{data[currentItem].name}</div>
            </div>
            <p>{data[currentItem].description}</p>
          </div>
        </div>
      </div>
      <div id="desktop-tech">
        <div key={data[currentItem].name} className="column">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={data[currentItem].images.landscape}
              type="image/jpg"
            />
            <source
              media="(min-width: 769px)"
              srcSet={data[currentItem].images.portrait}
              type="image/jpg"
            />
            <img
              src={data[currentItem].images.landscape}
              alt={`${data[currentItem].name}pic`}
            />
          </picture>

          <div
            role="group"
            aria-label="image slider controls"
            id="slider-controls"
          >
            {data.map((item: any, i: number) => (
              <button
                type="button"
                onClick={() => setCurrentItem(i)}
                className={
                  currentItem === i ? "menu__item active" : "menu__item"
                }
                key={item.name}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div id="block">
            <div className="subitem">
              <div className="nav__text-small">the terminology...</div>
              <div className="name">{data[currentItem].name}</div>
            </div>
            <p>{data[currentItem].description}</p>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <Main pageName="technology">
      <div className="technology__header">
        <span className="title__number">03 </span>
        <span className="nav__text"> space launch 101</span>
      </div>
      {renderTecnology()}
    </Main>
  );
};
export default Technology;
