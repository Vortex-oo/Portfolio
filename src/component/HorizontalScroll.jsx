import { useEffect, useRef } from "react";

const HorizontalScroll = () => {
    const skills = ["REACT", "JAVASCRIPT", "CSS", "HTML", "NODE.JS", "MONGO DB", "TAILWIND", "GIT", "NEXT.JS"];

    return (
        <div className="banner-wrapper">
            <div className="wrapper">
                <div className="imgs flex whitespace-nowrap overflow-x-auto">
                    {
                        skills.map((skill, index) => {
                            return (
                                <div
                                    key={index}
                                    className="inline-block px-6 py-3 m-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-all"
                                >
                                    {skill}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default HorizontalScroll;