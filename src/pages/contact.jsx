import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const welcomeRef = useRef(null);
    const creatingRef = useRef(null);
    const delightfulRef = useRef(null);
    const momentsRef = useRef(null);
    const locationRef = useRef(null);
    const instagramRef = useRef(null)
    const linkedinRef = useRef(null)
    const dribbleRef = useRef(null)
    const telegramRef = useRef(null)
    const githubRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            welcomeRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                scrollTrigger: {
                    trigger: welcomeRef.current,
                    start: "top 80%",
                    end: "top 40%",
                    scrub: 1.5,
                },
            }
        );

        gsap.fromTo(
            creatingRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: creatingRef.current,
                    start: "top 85%",
                    end: "top 40%",
                    scrub: 1.5,
                },
            }
        );

        gsap.fromTo(
            delightfulRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: delightfulRef.current,
                    start: "top 90%",
                    end: "top 50%",
                    scrub: 1.5,
                },
            }
        );

        gsap.fromTo(
            momentsRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: momentsRef.current,
                    start: "top 95%",
                    end: "top 55%",
                    scrub: 2,
                },
            }
        );

        gsap.fromTo(
            instagramRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: locationRef.current,
                    start: "top 100%",
                    end: "top 50%",
                    scrub: 2,
                },
            }
        );
        gsap.fromTo(
            linkedinRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: locationRef.current,
                    start: "top 100%",
                    end: "top 50%",
                    scrub: 2,
                },
            }
        );
        gsap.fromTo(
            dribbleRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: locationRef.current,
                    start: "top 100%",
                    end: "top 50%",
                    scrub: 2,
                },
            }
        );
        gsap.fromTo(
            githubRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: locationRef.current,
                    start: "top 100%",
                    end: "top 50%",
                    scrub: 2,
                },
            }
        );
        gsap.fromTo(
            telegramRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: locationRef.current,
                    start: "top 100%",
                    end: "top 50%",
                    scrub: 2,
                },
            }
        );
    }, []);

    return (
        <div id="contacts" className="relative h-screen w-full bg-[#1e2125] text-[#d5ccbb] font-[Serif] 
            flex justify-center items-center flex-col leading-none 
            px-4 sm:px-6 md:px-8  ">

            {/* Let's Create Section */}
            <div className="w-full flex flex-col items-center lg:items-center lg:justify-center 
                lg:text-[184px] italic font-bold mb-0 leading-[0.8] cursor-none lg:flex lg:flex-row lg:gap-14"
                ref={creatingRef}>
                <div className="text-[#B5514D] text-4xl sm:text-5xl md:text-6xl lg:text-6xl 
                    font-bold italic flex flex-row sm:flex-col items-center justify-center 
                    gap-2 sm:gap-0 mb-1  lg:mb-0">
                    <h1>Let's</h1>
                    <h1>Create</h1>
                </div>
                <h1 className="text-6xl sm:text-8xl md:text-[120px] lg:text-[150px] text-center lg:text-center">
                    SOMETHING
                </h1>
            </div>

            {/* Meaningful Text */}
            <div className="w-full text-center lg:text-center
                text-5xl sm:text-7xl md:text-[130px] lg:text-[175px] 
                italic font-extrabold leading-[0.8] cursor-none mb-1 lg:mb-0"
                ref={delightfulRef}>
                <h1>MEANINGFUL</h1>
            </div>

            {/* Together Text */}
            <div className="w-full text-center lg:text-center
                text-4xl sm:text-4xl md:text-[40px] lg:text-[127px] 
                italic lg:leading-[0.7] mb-0 lg:mb-3  cursor-none"
                ref={momentsRef}>
                together
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center lg:justify-centre gap-4 sm:gap-6 lg:gap-10 mt-5 w-full"
                ref={locationRef}>
                {/* Instagram */}
                <div className="bg-white rounded-full
                    w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16"
                    ref={instagramRef}>
                    <a href="https://www.instagram.com/dust_bi9?igsh=NThudGZiZW5zdWVx" target="_blank">
                        <img
                            src="https://cdn.prod.website-files.com/61b74db330d7740923e4176b/61e71dd63660128126610916_social-instagram.svg"
                            alt="instagram"
                            className="w-full h-full transition-transform duration-300 hover:scale-110"
                        /></a>

                </div>

                {/* LinkedIn */}
                <div className="bg-white rounded-full
                    w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16"
                    ref={linkedinRef}>
                    <a href="https://www.linkedin.com/in/debjit-sen-a37980282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                        <img
                            src="https://cdn.prod.website-files.com/61b74db330d7740923e4176b/61e9527d263afad4313cc5c2_Linekdin.svg"
                            alt="linkedin"
                            className="w-full h-full transition-transform duration-300 hover:scale-110"
                        /></a>

                </div>

                {/* Gmail */}
                <div className="bg-white rounded-full  flex justify-center items-center
                    w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16"
                    ref={dribbleRef}>
                    <a href="mailto:debjitsen.wrok@gmail.com?subject=Hello%20Debjit&body=I%20wanted%20to%20get%20in%20touch%20with%20you.">
                        <img
                            src="https://utfs.io/f/a238c12b-4125-4cc2-b994-96e4afd586d8-70rk5i.png"
                            alt="dribble"
                            className="w-8  sm:w-9 sm:h-9 md:w-6 md:h-10 lg:w-9 lg:h-7 
                                transition-transform duration-300 hover:scale-110"
                        />
                    </a>

                </div>

                {/* GitHub */}
                <div className="bg-white rounded-full flex justify-center items-center
                    w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16"
                    ref={githubRef}>
                    <a href="https://github.com/Vortex-oo" target="_blank">
                        <img
                            src="https://utfs.io/f/a05b28c5-e2ef-4d71-beb2-fbd6ee89cdab-61mg60.1023x1024.png"
                            alt="github"
                            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 
                                transition-transform duration-300 hover:scale-110"
                        />
                    </a>
                </div>

                {/* Telegram */}
                <div className="bg-white rounded-full flex justify-center items-center
                    w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16"
                    ref={telegramRef}>
                    <a href="https://t.me/b_aundule" target="_blank"  >
                        <img
                            src="https://utfs.io/f/a8f37fe8-adf0-4d32-8299-dadc90e43c67-mhzjlr.1024x919.png"
                            alt="telegram"
                            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-9 lg:h-9 
                            transition-transform duration-300 hover:scale-110"
                        /></a>

                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-5 w-full text-center text-gray-400 
                text-xs sm:text-sm lg:text-sm flex flex-col items-center">
                <p>&copy; 2025 Vortex. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Contact;
