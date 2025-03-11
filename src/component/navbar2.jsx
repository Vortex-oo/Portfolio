import React from 'react'
import { FaPlus } from "react-icons/fa";
const Navbar2 = () => {
  return (
    <div>
        <div className='flex gap-1 justify-center items-center cursor-pointer'>
            <h1 className='text-base font-bold'  >
                Menu
            </h1>
            <div className='bg-white text-black font-black  rounded-full w-3 h-3  p-3 flex justify-center items-center '  >
                <h1 className='text-base font-extrabold'  ><FaPlus /></h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar2