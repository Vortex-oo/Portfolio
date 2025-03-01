import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const Hero = React.lazy(() => import('./pages/hero'))
const Projects = React.lazy(() => import('./pages/projects'))
const About = React.lazy(() => import('./pages/about'))
const Contact = React.lazy(() => import('./pages/contact'))
const Layout = React.lazy(() => import('./component/Layout'))
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './component/ErrorFallback'
import Loading from './component/Loading'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary
      fallbackRender={ErrorFallback}
      onReset={(details) => {
        window.location.reload()
      }}
    >
      <Suspense fallback={<Loading />}> 
        <Hero />
        <Projects />
        <About />
        <Contact />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
)
