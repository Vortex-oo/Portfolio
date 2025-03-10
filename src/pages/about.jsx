import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const textRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()

        tl.fromTo(
            imageRef.current,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 5,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 65%",
                    end: "top 20%",
                    scrub: true,
                }
            }
        ).fromTo(
            textRef.current,
            {
                opacity: 0,
                x: 100
            },
            {
                opacity: 1,
                x: 0,
                duration: 10,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 35%",
                    end: "top 20%",
                    scrub: true,
                }
            },
            "-=0.5"
        )
    }, [])

    return (
        <div id='about' className='relative min-h-screen w-full bg-[#1e2125] text-[#e9dfce] font-[Yesteryear] flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-20 xl:px-80 py-36 md:py-0 gap-6 md:gap-10 overflow-hidden'>
            <img
                ref={imageRef}
                src="https://utfs.io/f/54659ee3-630f-490f-babe-ed59dfabadcd-l7j6gz.webp"
                alt="Profile"
                className='rounded-full w-72 md:w-64 lg:w-80'
            />
            <div ref={textRef} className='max-w-2xl z-30 cursor-default'>
                <p className='font-mono font-bold text-sm md:text-base lg:text-lg'>
                    <span className='block text-white mb-4 text-lg md:text-xl lg:text-2xl'>
                        <h1>(About ME)</h1>
                    </span>
                    "Hi, I'm Debjit, a passionate frontend developer based in India, specializing in crafting engaging and user-friendly web experiences. With expertise in the MERN stack and a strong foundation in Next.js, I love turning ideas into sleek, high-performance applications. My interest in DevOps allows me to optimize workflows and enhance deployment efficiency, ensuring seamless scalability. Beyond coding, I have a keen eye for design and enjoy photography, which fuels my creativity in UI/UX. Currently, I'm working on ScanNGrub, a QR-based food stall menu system that blends technology with convenience. Always eager to learn and explore new technologies, I'm open to exciting projects and collaborations!"
                </p>
            </div>

            <div className='absolute bottom-5 left-16 font-mono text-white text-sm md:text-lg font-bold hidden md:block'>
                <h1>[Scroll Down For Contacts]</h1>
            </div>
        </div>
    )
}

export default About
