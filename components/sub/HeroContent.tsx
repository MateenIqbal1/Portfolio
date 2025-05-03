"use client";
import React from 'react'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion';
import Image from 'next/image';
const HeroContent = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="  flex flex-row items-center justify-center px-20 mt-10 w-full z-[20] ">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div variants={slideInFromTop} className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'>
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
          <h1 className='Welcome-text text-[13px]'>
            FullStack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='
    flex flex-col gap-3
    mt-[40px] sm:mt-3
    w-[350px] sm:w-auto
    text-[45px] sm:text-6xl
    font-bold
    ml-[-30px] sm:ml-0
    text-white
    max-w-[600px]
    h-auto
  '
        >
          <span>
          I&apos;m
            <span className='text-transparent bg-clip-text text bg-gradient-to-r from-purple-500 to-cyan-500'>
              {' '}Mateen Iqbal
            </span>
            , a Full Stack Developer
          </span>
        </motion.div>


        <motion.p variants={slideInFromLeft(0.8)}
          className='text-lg text-gray-400 my-3 max-w-[600px] ml-[-30px] sm:ml-0'
        >
          I am a Full Stack Developer With Skills in Web Dev , MERN Stack development . Check out my projects and skills
        </motion.p>
        <motion.a variants={slideInFromLeft(1)} className='py-2 button-primary text-center ml-[-30px] sm:ml-0 text-white cursor-pointer rounded-lg max-w-[200px]'>
          Learn More!
        </motion.a>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className='w-full h-full  flex justify-center items-center'>
        <Image src='/mainIconsdark.svg' alt='work icons' height={650} width={650} />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
