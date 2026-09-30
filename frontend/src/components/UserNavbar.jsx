import React from 'react';
import { useState } from 'react';
import { useAuth } from '../context/AuthProvider';

const UserNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();

    return (
        <>
            <header className="fixed z-10 bg-red-50 h-[10vh] w-full flex justify-between items-center px-4">
                <div className="text-center flex items-center justify-center">
                    <h1
                        className="text-2xl sm:text-3xl font-bold leading-tight sm:leading-9.5 tracking-[-0.3px] text-[#4752c3] flex items-center gap-2">
                        <span className="text-xl flex justify-center items-center sm:text-2xl rounded-full h-14 w-14 bg-[#dde9ff]">
                            <span className="material-symbols-outlined " style={{ fontVariationSettings: "'FILL' 1" }}>
                                auto_awesome
                            </span>
                        </span>
                        CareerAI
                    </h1>
                </div>
                <div className="relative">
                    <img onClick={() => setIsOpen((open) => !open)} className="flex h-14 w-14 shrink-0 box-border items-center justify-center rounded-full border text-xs"
                        src="https://ui-avatars.com/api/?name=AT" alt="" />
                </div>
                <div className={`absolute top-full bg-white/80 shadow-[0px_10px_12px_0px_#FFFFFF] overflow-hidden max-w-[320px] p-4 right-[5%] border rounded-2xl ${isOpen ? "block" : "hidden"}`}>
                    <div className="w-full">Hi, {user.name}</div>
                    <div className="w-full">{user.email}</div>
                </div>
            </header>
        </>
    )
}

export default UserNavbar