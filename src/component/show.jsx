"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Show = () => {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            sectionsRef.current.forEach((section) => {
                if (!section) return;

                const image = section.querySelector(".animated-image");
                const text = section.querySelector(".animated-text");

                if (image) {
                    gsap.fromTo(
                        image,
                        { scale: 0.6, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "center center",
                                scrub: 1.5,
                            },
                        }
                    );
                }

                if (text) {
                    gsap.fromTo(
                        text,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "center center",
                                scrub: 1.5,
                            },
                        }
                    );
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 relative overflow-x-hidden">
            {/* ScanNGrub Section */}
            <div
                ref={(el) => (sectionsRef.current[0] = el)}
                className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-x-10 mb-8 sm:mb-12 lg:mb-16 relative"
            >
                {/* Mobile Title (Unaffected) */}
                <div className="lg:hidden w-full text-center mb-6">
                    <h1 className="font-sans italic font-extrabold text-5xl sm:text-6xl">SCANnGRUB</h1>
                </div>
                {/* Desktop Title (Restored Position) */}
                <div className="hidden lg:block absolute font-sans italic font-extrabold text-5xl xl:text-8xl top-72 right-0 z-10">
                    <h1>SCANnGRUB</h1>
                </div>
                <p className="animated-text text-base sm:text-lg lg:text-xl max-w-[600px] font-semibold px-4 sm:px-0 text-center lg:text-left mb-6 lg:mb-0">
                    ScanNGrub is a modern solution designed to revolutionize the way customers interact with local food stalls. By simply scanning a QR code, users are directed to a seamless digital experience where they can explore restaurant menus after logging in. This eliminates the need for physical menus, making the ordering process more efficient and hygienic. With a user-friendly interface and smooth navigation, ScanNGrub enhances customer convenience while helping food stall owners streamline their services.
                </p>
                <div className="w-full lg:w-auto">
                    <img
                        src="https://utfs.io/f/ee1cbae9-d812-489d-9705-181b77408caf-cszuk1.png"
                        alt="ScanNGrub"
                        className="animated-image rounded-2xl sm:rounded-3xl lg:rounded-4xl w-full sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[350px] lg:h-[400px] object-cover mx-auto lg:mx-12"
                    />
                </div>
            </div>

            {/* Cloud Drop Section */}
            <div
                ref={(el) => (sectionsRef.current[1] = el)}
                className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-x-10 mb-8 sm:mb-12 lg:mb-16 relative"
            >
                {/* Mobile Title (Unaffected) */}
                <div className="lg:hidden w-full text-center mb-6">
                    <h1 className="font-sans italic font-extrabold text-5xl sm:text-6xl z-10">Cloud Drop</h1>
                </div>
                <div className="w-full lg:w-auto order-2 lg:order-1">
                    <img
                        src="https://res.cloudinary.com/dooekcvv0/image/upload/v1746072523/bxsj6fr7hldpyc3tb21t.png"
                        alt="Cloud Drop"
                        className="animated-image rounded-2xl sm:rounded-3xl lg:rounded-4xl w-full sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[350px] lg:h-[400px] object-cover mx-auto lg:mx-0"
                    />
                </div>
                {/* Desktop Title (Restored Position) */}
                <div className="hidden lg:block absolute font-sans italic font-extrabold text-5xl xl:text-8xl bottom-3 -left-8 z-10">
                    <h1>CLOUD DROP</h1>
                </div>
                <p className="animated-text text-base sm:text-lg lg:text-xl max-w-[600px] font-semibold px-4 sm:px-0 text-center lg:text-right order-1 lg:order-2">
                    Cloud Drop is an innovative cloud storage solution designed to simplify file management for users. With a user-friendly interface and robust security features, it ensures seamless access to your files across devices. Whether you're organizing personal documents or collaborating on team projects, Cloud Drop provides a reliable and efficient platform. Featuring real-time synchronization, advanced sharing options, and scalable storage plans, it redefines the way you manage and store your data in the digital age.
                </p>
            </div>

            {/* ANOMSG Section */}
            <div
                ref={(el) => (sectionsRef.current[2] = el)}
                className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-x-10 mb-8 sm:mb-12 lg:mb-16 relative"
            >
                {/* Mobile Title (Unaffected) */}
                <div className="lg:hidden w-full text-center mb-6">
                    <h1 className="font-sans italic font-extrabold text-5xl sm:text-6xl">ANOMSG</h1>
                </div>
                {/* Desktop Title (Restored Position) */}
                <div className="hidden lg:block absolute font-sans italic font-extrabold text-5xl xl:text-8xl top-72 right-16 z-10">
                    <h1>ANOMSG</h1>
                </div>
                <p className="animated-text text-base sm:text-lg lg:text-xl max-w-[600px] font-semibold px-4 sm:px-0 text-center lg:text-left mb-6 lg:mb-0">
                    ANOMSG is a platform that lets you receive anonymous messages. Simply sign up to get a unique link, share it with friends or followers, and see what they have to say. It creates a safe space for honest feedback, compliments, or confessions. You can read all your secret messages in a secure, private dashboard.
                </p>
                <div className="w-full lg:w-auto">
                    <img
                        src="https://res.cloudinary.com/dooekcvv0/image/upload/v1757123878/dn5rarcfcxb4zdlj7crm.png"
                        alt="ANOMSG"
                        className="animated-image rounded-2xl sm:rounded-3xl lg:rounded-4xl w-full sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[350px] lg:h-[400px] object-cover mx-auto lg:mx-12"
                    />
                </div>
            </div>
        </div>
    );
};

export default Show;