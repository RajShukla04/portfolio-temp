import About from "./components/About/About";
import GetInTouch from "./components/GetInTouch/getInTouch";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Work />
      <Skills />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
