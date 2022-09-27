import { useEffect, useRef } from "react";
import { useObserver } from "@/hooks/useObserver";
import "./slider.sass";
import { TechnologyType } from "@/design-system/pages/technology/Technology";
import { CrewType } from "@/design-system/pages/crew/Crew";

type SliderProps = {
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
};
const Slider: React.FC<SliderProps> = (props: SliderProps) => {
  const { setCurrentItem, children } = props;

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
      {children}
    </div>
  );
};
export default Slider;
