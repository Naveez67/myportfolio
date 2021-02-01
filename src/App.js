
import './App.css';
import MyCarousal from './component/myCarousel/my-carousal.component';
import Container from "react-bootstrap/Container";
import MyNavbar from './component/mynavbar/navbar';
import Titlemeassage from './component/title-meassage/titlemeassage';
import About from './pages/About/about';
import Slide from "react-reveal/Slide";
//import Slide from "react-reveal/Slide"
import { Parallax } from "react-parallax";
import Skills from './pages/Skills/skill';
import Expernice from './pages/Experince/expernice';
import Projects from './component/projects/projecttimeline';
import Contact from './pages/Contact/contact';
import Footer from './component/footer/footer';
import Particles from "react-particles-js";
import { particles } from "./particles";
function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <Particles
        className="particles particles-box"
        params={particles}
      />
      <Titlemeassage />
      
      <div className="backimg">
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/img.jpg")}
          bgImageAlt=""
          strength={-200}
        >
          <div >
            <Container className="container-box rounded">
              <Slide duration={500}>
                <About />
              </Slide>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
            <Container  className="container-box rounded">
              <Slide duration={500}>
              <Skills />
              </Slide>
            </Container>
      </div>
      <div>
            <Container  className="container-box rounded">
              <Slide duration={500}>
              <Expernice />
              </Slide>
            </Container>
      </div>
      <div>
            <Container  className="container-box rounded">
              <Slide duration={500}>
              <Projects />
              </Slide>
            </Container>
      </div>
      <div>
            <Container  className="container-box rounded">
              <Slide duration={500}>
              <Contact />
              </Slide>
            </Container>
      </div>
      <div>
            
              <Footer />
      </div>
    </div> 
  );
}

export default App;
