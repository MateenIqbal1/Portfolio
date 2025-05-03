import { Backend_skill, Frontend_skill } from '@/constants'
import React from 'react'
import SkillsDataProvider from '../sub/SkillsDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
    return (
      <section
        id='skills'
        className="relative w-full overflow-hidden py-20 px-4"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-[-10] opacity-30">
          <video
            className='w-full h-full object-cover'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'
          />
        </div>
  
        {/* Responsive container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-7xl mx-auto">
  
          {/* Text Section - centered on all screens */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <SkillText />
          </div>
  
          {/* Skills Grid */}
          <div className="w-full lg:w-2/3 flex flex-col gap-10 items-center justify-center">
            {/* Frontend Skills */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
              {Frontend_skill.map((image, index) => (
                <SkillsDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
  
            {/* Backend Skills */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
              {Backend_skill.map((image, index) => (
                <SkillsDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

export default Skills
