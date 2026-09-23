import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative flex justify-between items-center md:px-14 px-4 sm:px-5 pt-2.5 pb-2.5'>
            <div className="text-center flex items-center justify-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight sm:leading-9.5 tracking-[-0.3px] text-[#4752c3] flex items-center gap-2">
                    <span
                        className="material-symbols-outlined text-lg sm:text-xl md:text-2xl rounded-full p-2.5 sm:p-3 md:p-4 bg-[#dde9ff]"
                        data-icon="auto_awesome"
                        data-weight="fill"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        auto_awesome
                    </span>
                    CareerAI
                </h1>
            </div>

            {/* Desktop nav */}
            <div className='hidden md:flex justify-between items-center gap-6 lg:gap-10'>
                <Link to="/" className='text-[16px] font-medium hover:text-blue-600 transition-colors'>Home</Link>
                <Link to="/about" className='text-[16px] font-medium hover:text-blue-600 transition-colors'>About</Link>
                <Link to="/login" className='text-[16px] px-6 py-2.5 rounded-full bg-[#4752c3] text-white'>Log In</Link>
                <Link to="/signup" className='text-[16px] px-6 py-2.5 rounded-full bg-[#4752c3] text-white'>Get Started</Link>
            </div>

            {/* Mobile hamburger */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#dde9ff] text-[#4752c3]"
            >
                <span className="material-symbols-outlined text-2xl">
                    {isOpen ? "close" : "menu"}
                </span>
            </button>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 mt-1 mx-4 rounded-2xl bg-white shadow-[0_12px_28px_rgba(71,82,195,0.15)] flex flex-col gap-1 p-4 z-50">
                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className='text-[16px] font-medium py-2.5 px-2 rounded-lg hover:bg-[#EFF4FF] hover:text-blue-600 transition-colors'
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className='text-[16px] font-medium py-2.5 px-2 rounded-lg hover:bg-[#EFF4FF] hover:text-blue-600 transition-colors'
                    >
                        About
                    </Link>
                    <Link
                        to="/login"
                        onClick={() => setIsOpen(false)}
                        className='text-[16px] text-center px-6 py-2.5 mt-2 rounded-full bg-[#EFF4FF] text-[#4752c3] font-medium'
                    >
                        Log In
                    </Link>
                    <Link
                        to="/signup"
                        onClick={() => setIsOpen(false)}
                        className='text-[16px] text-center px-6 py-2.5 rounded-full bg-[#4752c3] text-white font-medium'
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Navbar