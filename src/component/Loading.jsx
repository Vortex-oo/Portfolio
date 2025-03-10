import { motion } from 'framer-motion'
import React from 'react'

const Loading = () => {
    const loadingVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }
    }

    return (
        <div className="min-h-screen w-full bg-[#1e2125] 
            flex justify-center items-center">
            <motion.h1 
                variants={loadingVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl 
                    font-[Yesteryear] italic text-[#B5514D]"
            >
                Loading...
            </motion.h1>
        </div>
    )
}

export default Loading