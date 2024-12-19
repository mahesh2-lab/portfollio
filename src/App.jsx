import "./App.scss";
import Hero from "./component/Hero/hero";
import NavBar from "./component/NavBar/NavBar";
import Parallax from "./component/Parallax/Parallax";
import AboutMe from "./component/aboutMe/abooutMe";
import Contact from "./component/contact/Contact";
import Cursor from "./component/cursore/CustomCursor";
import { CursorContextProvider } from "./component/cursore/context/CursorContext";
import Portfolio from "./component/portfollio/Portfolio";

function App() {
  return (
    <>

      <div id="app">
        <CursorContextProvider>
          {/* <Cursor /> */}
          <div>
            <section id="Home">
              <NavBar />
              <Hero />
            </section>
            <section id="About">
              <Parallax type="services" />
            </section>
            <section>
              <AboutMe />
            </section>
            <section id="Projects">
              <Parallax type="portfolio" />
            </section>
            <Portfolio />
            <section id="Contact">
              <Contact />
            </section>
          </div>
        </CursorContextProvider>
      </div>
    </>
  );
}

export default App;
