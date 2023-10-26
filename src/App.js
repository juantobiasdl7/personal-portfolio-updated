import NavigationBar from "./Components/NavBar/NavBar";
import { Banner } from "./Components/Banner/Banner";
import './App.css';

function App() {
  return (
    <>
      <NavigationBar />
      <Banner />
      <div style={{ backgroundColor: 'grey', height: '1000px'}}>


      </div>
      {/* <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </>

  );
}

export default App;
