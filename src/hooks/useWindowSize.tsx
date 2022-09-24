import { useEffect, useState } from "react";

export const useWindowSize = (): [width: number, height: number] => {
  const getWindowSize = (): { width: number; height: number } => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width,
      height,
    };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    const handleSize = () => {
      setWindowSize(getWindowSize());
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  const { width, height } = windowSize;
  return [width, height];
};
