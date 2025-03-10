import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import backgroundImage from "../assets/mask.svg"
import { motion, useScroll } from "framer-motion";
import { text } from 'framer-motion/client';
import { Navbar } from "../component/navbar.jsx";


const Hero = () => {


  // Create refs for each element you want to animate
  const welcomeRef = useRef(null)
  const creatingRef = useRef(null)
  const delightfulRef = useRef(null)
  const momentsRef = useRef(null)
  const locationRef = useRef(null)
  const workRef = useRef(null)
  const resumeRef = useRef(null)
  const navbarRef = useRef(null)

  const { scrollYProgress } = useScroll()

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])


  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })

    tl.fromTo(
      welcomeRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.7 }
    )
      .fromTo(
        [momentsRef.current, locationRef.current],
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.87 },
        "-=0.4"
      )
      .fromTo(
        [, workRef.current, resumeRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.2 },
        "-=0.4"
      )
      .fromTo(
        creatingRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.87 },
        "-=0.4"
      )
      .fromTo(
        delightfulRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.87 },
        "-=0.2  "
      )
      .fromTo(
        navbarRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.87 },
        "-=0.4"
      )
  }, [])


  const [cursorVariants, setCursorVariants] = useState("default")

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#B5514D",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28
      }
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 150,
      width: 150,
      // color:,
      backgroundColor: "#B5514D",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
        scale: {
          duration: 0.2
        }
      },
      scale: 1.2
    },
    text1: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      // color:,
      backgroundColor: "#B5514D",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
        scale: {
          duration: 0.2
        }
      },
      scale: 1.2
    },
    text2: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 16,
      height: 16,
      // color:,
      backgroundColor: "#B5514D",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
        scale: {
          duration: 0.2
        }
      },
      scale: 1.2
    }
  }

  const textEnter = () => {
    setCursorVariants("text")
  }
  const textLeave = () => {
    setCursorVariants("default")
  }



  return (
    <div id='home'>
      <div className='h-screen w-full bg-[#1e2125] text-[#e9dfce] font-[Yesteryear] text-4xl flex justify-center items-center flex-col leading-none px-4 md:w-full overflow-hidden '>

        {/* progress bar */}
        <motion.div
          className='bg-[#B5514D] w-full h-2 fixed top-0 left-0 rounded-full z-50 origin-left '
          style={{
            scaleX: scrollYProgress
          }}
          ></motion.div>
        <motion.div
          className='cursor  w-9 h-9 rounded-full bg-[#B5514D] fixed top-0 left-0 pointer-events-none z-20  hidden md:block'
          variants={variants}
          animate={cursorVariants}
        ></motion.div>

        <div className='absolute top-5 flex items-center w-full px-5' ref={navbarRef}
          onMouseEnter={() => {
            setCursorVariants("text2")
          }}
          onMouseLeave={textLeave}
        >
          <div className='flex items-center justify-center gap-2 '>
            <img src="https://utfs.io/f/2d51fe9c-199f-4de6-9d70-a8505c909c62-sg2m69.png" alt="logo" className='w-9 h-9 rounded-full' />
            <h1 className='font-bold text-xl'  >DEBJIT</h1>
          </div>
          <div className='ml-auto overflow-x-hidden'>
            <Navbar />
          </div>
        </div>


        <div ref={welcomeRef} onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <h1 className='text-sm md:text-base font-bold line'>Web Developer</h1>
        </div>

        <div
          className='  lg:text-[184px] italic font-extrabold mb-0 leading-[0.8] cursor-none'
          ref={creatingRef}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <h1 className='md:text-[160px]'  >CREATING</h1>
        </div>

        <div
          className=' md:text-[150px] lg:text-[184px] italic font-extrabold leading-[0.8] cursor-none'
          ref={delightfulRef}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <h1>DELIGHTFUL</h1>
        </div>

        <div
          className=' md:text-[50px] lg:text-[127px] italic leading-[0.5] mb-6 mt-1 cursor-none'
          ref={momentsRef}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          experiences
        </div>

        <div
          className='text-xl md:text-2xl flex items-center gap-2 cursor-none'
          ref={locationRef}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <h1>based in</h1>
          <span className='font-bold text-4xl md:text-6xl italic cursor-none'>INDIA</span>
        </div>

        <div
          className='absolute bottom-5 left-5 text-base md:text-xl font-mono indent-4 cursor-none'
          ref={workRef}
          onMouseEnter={() => setCursorVariants("text1")}
          onMouseLeave={textLeave}
        >
          <h1>Open for Work</h1>
        </div>

        <div
          className='absolute bottom-5 right-5 text-base md:text-xl font-mono indent-4 cursor-none'
          ref={resumeRef}
          onMouseEnter={() => setCursorVariants("text1")}
          onMouseLeave={textLeave}
        >
          <h1><a href="/" className='cursor-none'>Download Resume</a></h1>
        </div>
      </div>
    </div>
  )
}

export default Hero