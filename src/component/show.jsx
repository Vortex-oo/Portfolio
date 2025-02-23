"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Show = () => {
    const scanImageRef = useRef(null);
    const scanTextRef = useRef(null);
    const chessImageRef = useRef(null);
    const chessTextRef = useRef(null);

    useEffect(() => {
        // Image Animation (Scale-Up & Fade-In when entering viewport)
        gsap.fromTo(
            scanImageRef.current,
            { scale: 0.6, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: scanImageRef.current,
                    start: "top bottom",
                    end: "bottom top", // Animation lasts until the image fully leaves viewport
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            chessImageRef.current,
            { scale: 0.6, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: chessImageRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );

        // Text Animation (Fade & Slide-Up)
        gsap.fromTo(
            scanTextRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: scanTextRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            chessTextRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: chessTextRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className="w-full px-6 py-10 relative">
            {/* ScanNGrub Section */}
            <div className="Qr flex flex-col md:flex-row items-center justify-between gap-x-10 mb-16 relative">
                <div className="absolute font-sans italic font-extrabold text-8xl top-72 right-0 z-10">
                    <h1>SCANnGRUB</h1>
                </div>

                <p ref={scanTextRef} className="text-xl max-w-[600px] font-semibold opacity-0">
                    ScanNGrub is a modern solution designed to revolutionize the way customers interact with local food stalls. By simply scanning a QR code, users are directed to a seamless digital experience where they can explore restaurant menus after logging in. This eliminates the need for physical menus, making the ordering process more efficient and hygienic. With a user-friendly interface and smooth navigation, ScanNGrub enhances customer convenience while helping food stall owners streamline their services.
                </p>

                <div>
                    <img
                        ref={scanImageRef}
                        src="https://images.unsplash.com/photo-1739993655680-4b7050ed2896?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="ScanNGrub"
                        className="rounded-4xl w-[500px] h-[400px] object-cover mx-12 scale-75 opacity-0"
                    />
                </div>
            </div>

            {/* ChessMaster Section */}
            <div className="Qr flex flex-col md:flex-row items-center justify-between gap-x-10 mb-16">
                <div>
                    <img
                        ref={chessImageRef}
                        src="https://images.unsplash.com/photo-1739993655680-4b7050ed2896?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="ChessMaster"
                        className="rounded-4xl w-[500px] h-[400px] object-cover scale-75 opacity-0"
                    />
                </div>

                <div className="absolute font-sans italic font-extrabold text-8xl bottom-36 left-0">
                    <h1>Chess Clone</h1>
                </div>

                <p ref={chessTextRef} className="text-xl max-w-[600px] font-semibold opacity-0">
                    ChessMaster is a sleek and intuitive chess clone designed for both casual players and enthusiasts. Built with a responsive UI and smooth gameplay mechanics, it offers a seamless experience across devices. Whether you're a beginner learning the game or a seasoned player looking for a challenge, ChessMaster provides a strategic and engaging environment. Featuring real-time move validation, piece animations, and a clean modern design, it captures the essence of classic chess while integrating the convenience of digital play.
                </p>
            </div>
        </div>
    );
};

export default Show;
