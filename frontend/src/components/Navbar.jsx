import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    return (
        <>
            <div className='flex justify-between items-center md:px-14 px-5 pt-2.5 pb-2.5'>
                <div className="text-center flex items-center justify-center">
                    <h1 className="text-2xl sm:text-3xl font-bold leading-tight sm:leading-9.5 tracking-[-0.3px] text-[#4752c3] flex items-center gap-2">
                        <span
                            className="material-symbols-outlined text-xl sm:text-2xl rounded-full p-3 sm:p-4 bg-[#dde9ff]"
                            data-icon="auto_awesome"
                            data-weight="fill"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            auto_awesome
                        </span>
                        CareerAI
                    </h1>
                </div>
                <div className='flex justify-between items-center md:gap-10 gap-4'>
                    <Link to="/" className='text-[16px] font-medium hover:text-blue-600 transition-colors'>Home</Link>
                    <Link to="/about" className='text-[16px] font-medium hover:text-blue-600 transition-colors'>About</Link>
                    <Link to="/login" className='text-[16px] px-6 py-2.5 rounded-full bg-[#4752c3] text-white'>Log In</Link>
                    <Link to="/signup" className='text-[16px] px-6 py-2.5 rounded-full bg-[#4752c3] text-white'>Get Started</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
