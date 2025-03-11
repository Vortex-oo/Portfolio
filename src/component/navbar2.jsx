import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from "react-icons/fa";
import { Link } from "react-scroll"; // Add this import


const Navbar2 = () => {
    const [plusClicked, setPlusClicked] = useState('default')

    const variants = {
        default: {
            rotate: 0,
        },
        clicked: {
            rotate: 45,
        }
    }

    const menuVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            y: -20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: -20,
            transition: {
                duration: 0.2
            }
        }
    }

    return (
        <div>
            <div className='flex gap-1 justify-center items-center cursor-pointer'>
                <h1 className='text-base font-bold'>Menu</h1>
                <motion.div
                    variants={variants}
                    onClick={() => setPlusClicked(!plusClicked)}
                    className='bg-white text-black font-black rounded-full w-3 h-3 p-2 flex justify-center items-center'
                    animate={plusClicked ? 'default' : 'clicked'}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className='text-base font-extrabold'><FaPlus /></h1>
                </motion.div>
            </div>

            <AnimatePresence>
                {!plusClicked && (
                    <motion.div
                        className='absolute right-3 font-mono backdrop-blur-md bg-[#1e2125]/90 rounded-lg shadow-2xl border border-gray-700/50'
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className='flex flex-col p-4 gap-4'>
                            {[
                                { name: 'Home', to: 'home' },
                                { name: 'Projects', to: 'projects' },
                                { name: 'About', to: 'about' },
                                { name: 'Contact', to: 'contacts' }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    className='text-[#e9dfce] text-2xl font-bold hover:text-[#B5514D] transition-colors cursor-pointer'
                                    whileHover={{ x: 10 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                        delay: index * 0.1,
                                        duration: 0.3 
                                    }}
                                >
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setPlusClicked(!plusClicked)}
                                        className="block w-full"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar2