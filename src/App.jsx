import NavBar from "./components/HeroModel/NavBar.jsx"
import LogoSection from "./components/LogoSection.jsx"
import ShinyDivider from "./components/ShinyDivider.jsx"

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
    </>
  )
}

export default App