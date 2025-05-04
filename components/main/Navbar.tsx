'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Socials } from '@/constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when clicking on a link
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    // Close menu on outside click
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            const nav = document.getElementById('mobile-menu');
            if (menuOpen && nav && !nav.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [menuOpen]);

    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5'>
            <div className='w-full h-full flex items-center justify-between m-auto'>
                {/* Logo */}
                <a href="#skills" className='h-auto w-auto flex items-center'>
                    <Image src='/NavLogo.png' alt='logo' width={70} height={70} className='cursor-pointer hover:animate-slowspin' />
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        MERN Stack dev
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className='hidden md:flex w-[500px] h-full items-center justify-between md:mr-20'>
                    <div className='flex items-center justify-between w-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href="#about-me" className='cursor-pointer' onClick={handleLinkClick}>About me</a>
                        <a href="#skills" className='cursor-pointer' onClick={handleLinkClick}>Skills</a>
                        <a href="#projects" className='cursor-pointer' onClick={handleLinkClick}>Projects</a>
                    </div>
                </div>

                {/* Socials */}
                <div className="hidden md:flex flex-row gap-5">
                    {Socials.map(({ name, icon: Icon, href }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 text-[20px]"
                            title={name}
                        >
                            <Icon />
                        </a>
                    ))}
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden text-white text-[24px] cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
    <div
        id="mobile-menu"
        className="absolute top-[65px] left-0 w-full bg-[#030014e6] backdrop-blur-sm flex flex-col items-center py-5 z-40 text-gray-200 text-lg"
    >
        <a href="#about-me" onClick={handleLinkClick} className="py-2 w-full text-center hover:text-gray-300">
            About me
        </a>
        <hr className="border-t border-gray-600 w-4/5 my-1" />

        <a href="#skills" onClick={handleLinkClick} className="py-2 w-full text-center hover:text-gray-300">
            Skills
        </a>
        <hr className="border-t border-gray-600 w-4/5 my-1" />

        <a href="#projects" onClick={handleLinkClick} className="py-2 w-full text-center hover:text-gray-300">
            Projects
        </a>
        <hr className="border-t border-gray-600 w-4/5 my-2" />

        {/* Social Icons with responsive gap */}
        <div className="flex gap-8 sm:gap-12 md:gap-16 pt-4">
            {Socials.map(({ name, icon: Icon, href }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 text-xl sm:text-2xl"
                    title={name}
                    onClick={handleLinkClick}
                >
                    <Icon />
                </a>
            ))}
        </div>
    </div>
)}

        </div>
    );
};

export default Navbar;
