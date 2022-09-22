import "./home.sass";
import { Link } from "react-router-dom";
import Main from "@/design-system/templates/main/Main";

const Home: React.FC = () => (
  <Main pageName="home">
    {/* <div className="box"> */}

    <Link to="/destinations" className="explore">
      explore
    </Link>
    <div id="first">
      <div className="nav__text">SO, YOU WANT TO TRAVEL TO</div>
      <h1>SPACE</h1>
    </div>
    <div id="second">
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    {/* </div> */}
    {/* <div className="box"> */}

    {/* </div> */}
  </Main>
);
export default Home;
