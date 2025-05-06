import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    return (
        <div className='w-full bg-transparent text-gray-200 shadow-lg p-4 md:p-6'>
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h1 className='text-3xl md:text-4xl font-semibold font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-6 md:pb-8'>
                    About me
                </h1>

                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Github */}
                    <div className='flex flex-col items-center'>
                        <div className='font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Github</div>
                        <a
                            href="https://github.com/MateenIqbal1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center my-3 text-white hover:text-gray-300 transition-colors  z-50"
                        >
                            <FaGithub className="text-xl mr-2" />
                            <span>Get repo</span>
                        </a>


                    </div>

                    {/* Linkedin */}
                    <div className='flex flex-col items-center'>
                        <div className='font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Linkedin</div>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center my-3 text-white hover:text-gray-300 transition-colors "
                        >
                            <FaLinkedin className="text-xl mr-2" />
                            <span>Linkedin</span>
                        </a>
                    </div>

                    {/* Gmail */}
                    <div className='flex flex-col items-center'>
                        <div className='font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Gmail</div>
                        <a
                            href="mailto:mateeniqbal840@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center my-3 text-white hover:text-gray-300 transition-colors text-center cursor-pointer z-50"
                        >
                            <SiGmail className="text-xl mr-2" />
                            <span className='break-all cursor-pointer'>mateeniqbal840@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;