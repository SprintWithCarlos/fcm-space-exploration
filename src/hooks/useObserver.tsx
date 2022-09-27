import { useEffect, useState, useRef, SetStateAction } from "react";

export const useObserver = (
  options?: IntersectionObserverInit | undefined
): [
  IntersectionObserver,
  React.Dispatch<SetStateAction<NodeList | undefined>>,
  NodeList | undefined
] => {
  const [elements, setElements] = useState<NodeList>();
  const [entries, setEntries] = useState<NodeList>();
  const callBack: any = (entries: NodeList) => {
    // console.log(entries);
    setEntries(entries);
  };
  const observer = useRef(new IntersectionObserver(callBack, options));
  // console.log(observer.current);
  useEffect(() => {
    const currentRef = observer.current;

    currentRef.disconnect();
    if (elements && elements.length > 0) {
      elements.forEach((element) => currentRef.observe(element));
    }
    return () => {
      if (currentRef) {
        console.log("cleanUp");
        return currentRef.disconnect();
      }
    };
  }, [elements]);

  return [observer.current, setElements, entries];
};
