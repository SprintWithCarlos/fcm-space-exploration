/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/aria-role */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./design-system/pages/home/Home";
import NoMatch from "./design-system/pages/noMatch/NoMatch";
import data from "@/data.json";
import Crew from "./design-system/pages/crew/Crew";
import Destinations from "./design-system/pages/destinations/Destinations";
import Technology from "./design-system/pages/technology/Technology";
import Test from "./design-system/pages/test/Test";

function App() {
  const elements = [
    <Destinations data={data.destinations} />,
    <Crew data={data.crew} />,
    <Technology data={data.technology} />,
  ];
  const customRoutes = () =>
    Object.keys(data).map((itemName: string, i: number) => (
      <Route path={itemName} element={elements[i]} key={itemName} />
    ));
  useEffect(() => {
    document.title = "Frontend Mentor | Space tourism website";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/test" element={<Test data={data.technology} />} />
        {customRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
