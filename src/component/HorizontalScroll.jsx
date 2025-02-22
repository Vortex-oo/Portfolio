import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { data } from "../assets/data/data.js";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = containerRef.current;

        if (scrollContainer) {
            // Duplicate the content to create an infinite effect
            const duplicatedContent = [...data, ...data];

            // Animate the container with GSAP
            gsap.to(scrollContainer, {
                x: () => -scrollContainer.scrollWidth / 2, // Move left
                ease: "none",
                duration: 10, // Adjust speed
                repeat: -1,  // Infinite loop
                modifiers: {
                    x: (x) => `${parseFloat(x) % scrollContainer.scrollWidth}px` // Loop smoothly
                }
            });
        }
    }, []);

    return (
        <div className="banner-wrapper w-full h-24 overflow-hidden">
            <div className="wrapper h-full flex items-center">
                <div 
                    ref={containerRef}
                    className="imgs flex whitespace-nowrap overflow-x-hidden h-full items-center"
                >
                    {[...data, ...data].map((d, index) => ( // Duplicate content for infinite effect
                        <div
                            key={index}
                            className="inline-flex items-center gap-2 mx-14 cursor-default"
                        >
                            <div className="text-5xl font-sans font-bold text-[#e9dfce]">
                                {d.name}
                            </div>
                            <img 
                                src={d.src} 
                                className="w-[48px] h-[48px] object-contain" 
                                alt={d.name} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
