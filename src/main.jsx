import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './pages/hero'
import Projects from './pages/projects'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Projects />
  </StrictMode>,
)
