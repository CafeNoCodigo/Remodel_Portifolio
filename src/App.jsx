import NavBar from "./components/HeroModel/NavBar.jsx"
import LogoSection from "./sections/LogoSection.jsx"
import ShinyDivider from "./components/ShinyDivider.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"

import Hero from "./sections/Hero.jsx"
import ShowCaseSection from "./sections/ShowCaseSection.jsx"


const App = () => {
  return (
    <>
    <NavBar />
    <Hero/>
    <ShinyDivider />
    <ShowCaseSection />
    <LogoSection />
    <FeatureCards />
    </>
  )
}

export default App