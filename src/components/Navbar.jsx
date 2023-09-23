'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header id='header' className='sticky top-0 z-50 backdrop-blur-sm'>
            <nav className='max-w-6xl mx-auto flex justify-between items-center font-sans p-5'>
                <Link href='/' className='text-lg text-white font-bold'>
                    ScribeAssistAI
                </Link>
                <div className='hidden md:flex gap-2'>
                    <Link
                        href='/'
                        className='cursor-pointer text-base text-white py-2 px-6 rounded-lg hover:bg-white hover:bg-opacity-10'
                    >
                        Home
                    </Link>
                    <a
                        onClick={() => scrollToSection('#features')}
                        className='cursor-pointer text-base text-white py-2 px-6 rounded-lg hover:bg-white hover:bg-opacity-10'
                    >
                        Features
                    </a>
                    <a
                        onClick={() => scrollToSection('#pricing')}
                        className='cursor-pointer text-base text-white py-2 px-6 rounded-lg hover.bg-white hover.bg-opacity-10'
                    >
                        Pricing
                    </a>
                    <a
                        onClick={() => scrollToSection('#footer')}
                        className='cursor-pointer text-base text-white py-2 px-6 rounded-lg hover.bg-white hover.bg-opacity-10'
                    >
                        About
                    </a>
                </div>
                <button className="hidden md:block cursor-pointer text-base text-white py-2 px-6 rounded-xl bg-white bg-opacity-10 text-opacity-100 hover:text-gray-900 hover:bg-white  transition-all duration-300">
                    <Link href="/login">Login</Link>
                </button>
                <div
                    onClick={toggleMobileMenu}
                    className="md:hidden flex items-center"
                >
                    <Link href="/login">
                    <button className="outline-none mobile-menu-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                    </button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
