import { useState } from 'react'
import './App.css'
import Hero from './components/sections/Hero';   
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import ThemeToggle from "./components/common/ThemeToggle";
import Navbar from "./components/layout/Navbar";
import BackTOTop from "./components/common/BackToTop"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="pt-12">
      <Navbar />


      <Hero />
      <About />
      <Projects />
      <Contact />
      <BackTOTop />
    </main>
  )
}

export default App
