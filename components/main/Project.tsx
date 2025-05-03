import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Project = () => {
    return (
        <div className='flex flex-col items-center justify-center py-10 md:py-20'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10'>
                My Projects
            </h1>
            {/* Changed to grid layout */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
                <ProjectCard
                    src="/NextWebsite.png"
                    title="Modern Next.js Portfolio"
                    description="Lorem ipsum dolor sit amet..."
                />
                <ProjectCard
                    src="/NextWebsite.png"
                    title="Modern Next.js Portfolio"
                    description="Lorem ipsum dolor sit amet..."
                />
                <ProjectCard
                    src="/NextWebsite.png"
                    title="Modern Next.js Portfolio"
                    description="Lorem ipsum dolor sit amet..."
                />
                
            </div>
        </div>
    )
}

export default Project
