import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './pages/hero'
import Projects from './pages/projects'
import About from './pages/about'
import Contact from './pages/contact'
import Layout from './component/Layout'
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './component/ErrorFallback'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary
      fallbackRender={ErrorFallback}
      onReset={(details) => {
        window.location.reload()
      }}
    >
      <Hero />
      <Projects />
      <About />
      <Contact />
    </ErrorBoundary>
  </StrictMode>,
)
