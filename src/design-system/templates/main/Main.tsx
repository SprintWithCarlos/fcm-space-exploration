import { ReactNode } from "react";
import Navbar from "@/design-system/organisms/navbar/Navbar";
import { useWindowSize } from "@/hooks/useWindowSize";
import { getDevice } from "@/utils";
import "./main.sass";

type MainProps = {
  pageName: string;
  children: ReactNode;
};
const Main: React.FC<MainProps> = ({ pageName, children }: MainProps) => {
  const [width, height] = useWindowSize();

  return (
    <main
      data-testid={pageName}
      className={pageName}
      style={{
        background: `url(assets/${pageName}/background-${pageName}-${getDevice(
          width
        )}.jpg) no-repeat center / cover, #000`,
      }}
    >
      <div className="layout">
        <Navbar />
        <section className={pageName} data-testid={pageName}>
          {children}
        </section>
      </div>
    </main>
  );
};

export default Main;
