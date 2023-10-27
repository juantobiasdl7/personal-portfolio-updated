import NavigationBar from "./Components/NavBar/NavBar";
import { Banner } from "./Components/Banner/Banner";
import { Skills } from "./Components/Skills/Skills";
import { Footer } from "./Components/Footer/Footer";
import { Project } from "./Components/Projects/Project";
import './App.css';

function App() {
  return (
    <>
      <NavigationBar />
      <Banner />
      <Project />
      <Skills />
      <Footer />
        {/* 
      <Projects />
      <Contact />
      <Footer /> */}
    </>

  );
}

export default App;
