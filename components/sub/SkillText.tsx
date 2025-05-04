"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {
  return (
    <div className='w-full flex flex-col items-start justify-center px-4'>
      <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-2'
      >
        <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
      </motion.div>

      <motion.h2
        variants={slideInFromLeft(0.5)}
        className='text-[40px] lg:text-[50px] text-white font-medium'
      >
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
          My Skills
        </span>
      </motion.h2>
    </div>
  );
};

export default SkillText;
