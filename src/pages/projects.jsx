import React from 'react'
import HorizontalScroll from '../component/HorizontalScroll'


const Projects = () => {
    return (
        <div className='h-screen w-full bg-[#1e2125] text-[#e9dfce] font-[Yesteryear]'>
            <div className='pt-24'>
                <hr className='pt-12 text-[#e9dfce]'  />
                    <HorizontalScroll />
                <hr className='mt-12 text-[#e9dfce]  '  />
            </div>

        </div>
    )
}

export default Projects