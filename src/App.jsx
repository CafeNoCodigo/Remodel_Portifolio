import NavBar from "./components/HeroModel/NavBar.jsx"
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
    </>
  )
}

export default App