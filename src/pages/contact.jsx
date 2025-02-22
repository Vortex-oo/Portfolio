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
        <div className="h-screen w-full bg-[#1e2125] text-[#e9dfce] font-[Yesteryear] text-4xl flex justify-center items-center flex-col leading-none px-4 md:w-full">
            <div
                className="lg:text-[184px] italic font-bold mb-0 leading-[0.8] cursor-none flex items-center gap-14"
                ref={creatingRef}
            >
                <div className="text-[#B5514D] text-6xl font-bold italic flex flex-col items-center justify-center">
                    <h1>Let's</h1>
                    <h1>Create</h1>
                </div>
                <h1 className="md:text-[140px]">SOMETHING</h1>
            </div>

            <div
                className="md:text-[150px] lg:text-[170px] italic font-extrabold leading-[0.8] cursor-none"
                ref={delightfulRef}
            >
                <h1>MEANINGFUL</h1>
            </div>

            <div
                className="md:text-[50px] lg:text-[127px] italic leading-[0.5] mb-6 cursor-none"
                ref={momentsRef}
            >
                together
            </div>

            <div
                className="text-xl md:text-2xl flex items-center gap-10 mt-5  cursor-none"
                ref={locationRef}
            >
                <div className="bg-white w-16 h-16 rounded-full" ref={instagramRef}  >
                    <img
                        src="https://cdn.prod.website-files.com/61b74db330d7740923e4176b/61e71dd63660128126610916_social-instagram.svg"
                        alt="instagram"
                        className="w-16 h-16 hover:scale-110"
                    />
                </div>

                <div className="bg-white w-16 h-16 rounded-full" ref={linkedinRef}  >
                    <img
                        src="https://cdn.prod.website-files.com/61b74db330d7740923e4176b/61e9527d263afad4313cc5c2_Linekdin.svg"
                        alt="linkedin"
                        className="w-16 h-16 hover:scale-110"
                    />
                </div>

                <div className="bg-white w-16 h-16 rounded-full" ref={dribbleRef}  >
                    <img
                        src="https://cdn.prod.website-files.com/61b74db330d7740923e4176b/61e9527d81a5bc73ee81ff5e_Dribbble.svg"
                        alt="dribble"
                        className="w-16 h-16 hover:scale-110"
                    />
                </div>

                <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center" ref={githubRef}  >
                    <a href="https://github.com/Vortex-oo">
                        <img
                            src="https://utfs.io/f/a05b28c5-e2ef-4d71-beb2-fbd6ee89cdab-61mg60.1023x1024.png"
                            alt="github"
                            className="w-10 h-10 hover:scale-110"
                        />
                    </a>
                </div>

                <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center" ref={telegramRef}  >
                    <img
                        src="https://utfs.io/f/a8f37fe8-adf0-4d32-8299-dadc90e43c67-mhzjlr.1024x919.png"
                        alt="telegram"
                        className="w-9 h-9 hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
