import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Particles from "react-particles-js"
import About from "./components/About"
import Services from "./components/Services"
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles:{
            number:{
              value : 30,
              density:{
                enable: true,
                value_area:900
              }
            },
            shape:{
              type: "star",
              stroke:{
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Services/>
      <Portfolio/>
      <Testimonials/>
    </>
  );
}

export default App;
