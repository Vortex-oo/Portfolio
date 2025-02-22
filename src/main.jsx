import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './pages/hero'
import Projects from './pages/projects'
import About from './pages/about'
import Contact from './pages/contact'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Projects />
    <About />
    <Contact/>
  </StrictMode>,
)
