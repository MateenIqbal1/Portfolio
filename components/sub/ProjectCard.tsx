'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaLink } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

interface IconType {
  name: string;
  path: string;
}
interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
  gitLink?: string;
  technologies?: IconType[]; // <-- NEW

}

const ProjectCard = ({ src, title, description, link, gitLink ,technologies = []}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-40">
      {/* Image container with overlay */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={src}
          alt={title}
          width={1000}
          height={600}
          className="w-full h-auto object-cover"
        />

        {/* Overlay only on image */}
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-100 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#2A0E61] rounded-full hover:bg-[#3B1E8B] transition"
              onClick={(e) => e.stopPropagation()}
            >
              <FaLink className="text-white text-xl" />
            </a>
          )}
        </div>
      </div>

      {/* Title + Description */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>

        {/* Inline Visit Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-1 text-blue-400 hover:text-blue-300 transition underline truncate"
          >
            <FaLink className=' text-xl' />
            <span className="whitespace-nowrap text-gradient-to-r from-purple-500 to-cyan-500 ">Visit Web</span>
            <FaLink className=' text-xl' />
            <span className='text-white'>{"        "} : </span>
            <span className="truncate max-w-[160px] overflow-hidden text-ellipsis"> {link}</span>
          </a>
        )}

        {link && (
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-1 text-blue-400 hover:text-blue-300 transition underline truncate"
          >
            <FaLink className=' text-xl' />
            <FaGithub className=' text-xl text-white text-[25px]' />
            <span className="whitespace-nowrap text-gradient-to-r  from-purple-500 to-cyan-500 ">git</span>
            <FaLink className=' text-xl' />
            <span className='text-white'>{"        "} : </span>
            <span className="truncate max-w-[190px] overflow-hidden text-ellipsis"> {gitLink}</span>
          </a>
        )}



{technologies.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap items-center gap-2">
            <p className="text-purple-700 font-bold mb-1 text-xl">Tech:</p>

              {technologies.map((tech, index) => (
                <Image
                  key={index}
                  src={tech.path}
                  alt={tech.name}
                  title={tech.name}
                  width={40}
                  height={28}
                  className="rounded-md bg-white p-1"
                />
              ))}
            </div>
          </div>
        )}




        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
