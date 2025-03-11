import React from 'react'

const Navbar2 = () => {
  return (
    <div>
        <div className='flex gap-1 justify-center items-center cursor-pointer'>
            <h1 className='text-base font-bold'  >
                Menu
            </h1>
            <div className='bg-white text-black font-black  rounded-full w-3 h-3  p-1 flex justify-center items-center '  >
                <h1 className='text-base font-extrabold'  >+</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar2