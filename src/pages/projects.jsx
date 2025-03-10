import React from 'react'
import HorizontalScroll from '../component/HorizontalScroll'
import Show from '../component/show'


const Projects = () => {
    return (
        <div id='projects' className=' w-full bg-[#1e2125] text-[#e9dfce] font-[Serif] pt-24'>
            <div className=' w-full bg-[#1e2125] text-[#e9dfce] font-[Serif] px-9 '>
                <Show />
            </div>
            <div className='pt-24'>
                <hr className='mb-8 text-[#e9dfce]' />
                <HorizontalScroll />
                <hr className='mt-8 text-[#e9dfce]  ' />
            </div>
        </div>

    )
}

export default Projects