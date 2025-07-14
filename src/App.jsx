import { useEffect, useState } from "react";

import NavBar from "./components/models/HeroModel/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import ShinyDivider from "./components/ShinyDivider.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";

import Hero from "./sections/Hero.jsx";
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  const [cursorEnlarge, setCursorEnlarge] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty('--x', `${x}%`);
      document.documentElement.style.setProperty('--y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div id="mouse-light-effect" />
      <NavBar />
      <Hero />
      <ShinyDivider />
      <ShowCaseSection />
      <LogoSection />
      <FeatureCards />
      <TechStack />
      <Contact />
      <Footer />
      
    </>
  );
};

export default App;