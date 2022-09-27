import { useState } from "react";
import Slider from "@/design-system/organisms/slider/Slider";
import "./test.sass";

type TestProps = {
  data: any[];
};
const Test: React.FC<TestProps> = ({ data }: TestProps) => {
  console.log("Component");
  const [currentItem, setCurrentItem] = useState<number>(0);
  return (
    <div data-testid="test" className="test">
      <Slider
        data={data}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </div>
  );
};
export default Test;
