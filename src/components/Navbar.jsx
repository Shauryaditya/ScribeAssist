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
                    <button className="outline-none mobile-menu-button">
                        <svg
                            className="w-6 h-6 text-gray-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
