import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Subsections from "./components/Subsections";
import Footer from "./components/footer";
import Faq from "./components/Faq";
import Dhs from "./components/Dhs";
import SpinalManipulation from "./components/SpinalManipulation";
import SuccessStories from "./components/SuccessStories";
import ScrollTop from "./components/scrollTop";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <div>
        <>
          <Navbar id="nav" />
          <ScrollTop />
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="subsections">
            <Subsections />
          </section>
          <section id="dhs">
            <Dhs />
          </section>
          <section id="spinalManipulation">
            <SpinalManipulation />
          </section>
          <section id="successStories">
            <SuccessStories />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="faq">
            <Faq />
          </section>
          <footer id="contact">
            <Footer />
          </footer>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
