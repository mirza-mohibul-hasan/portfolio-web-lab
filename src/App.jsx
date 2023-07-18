import About from "./components/About"
import { Bot } from "./components/Bot"
import { Contact } from "./components/Contact"
import { Education } from "./components/Education"
import { Exprience } from "./components/Exprience"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import Navbar from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Bot></Bot>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <div id="education">
        <h3 className="text-4xl font-semibold mt-20 mb-3 text-center">
          Education & <span className="text-cyan-600">Exprience</span>
        </h3>
        <div className='lg:flex justify-between gap-10 w-10/12 mx-auto'>
          <Education></Education>
          <Exprience></Exprience>
        </div>
      </div>   
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
