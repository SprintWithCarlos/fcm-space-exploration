import { useEffect, useRef } from "react";
import { useObserver } from "@/hooks/useObserver";
import "./slider.sass";
import { TechnologyType } from "@/design-system/pages/technology/Technology";
import { CrewType } from "@/design-system/pages/crew/Crew";

type SliderProps = {
  data: TechnologyType[] | CrewType[];
  currentItem: number;
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
};
const Slider: React.FC<SliderProps> = (props: SliderProps) => {
  const { data, currentItem, setCurrentItem } = props;
  const createRefs = data.map(() => useRef<HTMLPictureElement>(null));
  const pinRef = useRef<HTMLDivElement>(null);
  const [observer, setter, entries] = useObserver({
    root: null,
    threshold: 0.25,
  });
  useEffect(() => {
    const pictures = document.querySelectorAll("picture");
    setter(pictures);
  }, [setter]);
  useEffect(() => {
    console.log("Triggers observer useEffect", { entries });
    entries?.forEach((entry: any) => {
      if (entry.isIntersecting) {
        const item = entry.target;
        console.log("Currently intersecting", item.id);
        setCurrentItem(Number(item.id.slice(-1)));
      }
    });
  }, [observer, entries]);
  return (
    <div data-testid="slider" className="slider">
      <div className="slider-window">
        <div className="pic-strip" ref={pinRef}>
          {data?.map((item, i) => (
            <picture id={`picture-${i}`} key={item.name} ref={createRefs[i]}>
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
    </div>
  );
};
export default Slider;
