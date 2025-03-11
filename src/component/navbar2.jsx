import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaPlus } from "react-icons/fa";

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

    return (
        <div
        >
            <div className='flex gap-1 justify-center items-center cursor-pointer'>
                <h1 className='text-base font-bold'  >
                    Menu
                </h1>
                <motion.div

                    variants={variants}
                    onClick={() => setPlusClicked(!plusClicked)}
                    className='bg-white text-black font-black  rounded-full w-3 h-3  p-2 flex justify-center items-center '
                    animate={
                        plusClicked ? 'default' : 'clicked'
                    }
                    transition={{
                        duration: 0.5
                    }} >
                    <h1 className='text-base font-extrabold'  ><FaPlus /></h1>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar2