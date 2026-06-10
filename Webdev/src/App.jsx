import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SportsCards from "./components/SportsCards";
import PopularSports from "./components/PopularSports";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SportsCards />
      <PopularSports />
      <Footer />
    </>
  );
}

export default App;