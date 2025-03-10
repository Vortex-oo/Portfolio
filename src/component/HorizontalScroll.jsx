import { useEffect, useRef } from "react";
import { data } from "../assets/data/data.js";

const HorizontalScroll = () => {
    const containerRef = useRef(null);
    
    useEffect(() => {
        const scrollContainer = containerRef.current;
        let animationFrame;

        if (scrollContainer) {
            const scrollAnimation = () => {
                scrollContainer.scrollLeft += 1.8; 

                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0; 
                }

                animationFrame = requestAnimationFrame(scrollAnimation);
            };

            animationFrame = requestAnimationFrame(scrollAnimation);

            return () => cancelAnimationFrame(animationFrame);
        }
    }, []);

    return (
        <div className="banner-wrapper w-full h-10  md:h-24 overflow-hidden">
            <div className="wrapper h-full flex items-center">
                <div 
                    ref={containerRef}
                    className="imgs flex whitespace-nowrap overflow-x-hidden h-full items-center"
                >
                    {[...data, ...data].map((d, index) => ( // Duplicate content for seamless effect
                        <div
                            key={index}
                            className="inline-flex items-center gap-2 mx-14 cursor-none"
                        >
                            <div className=" text-3xl  md:text-5xl font-sans font-bold text-[#e9dfce]">
                                {d.name}
                            </div>
                            <img 
                                src={d.src} 
                                className=" w-[38px] h-[38px]   md:w-[48px] md:h-[48px] object-contain" 
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
