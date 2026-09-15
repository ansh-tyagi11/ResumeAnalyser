import React, { useState } from 'react';
import { Link } from 'react-router';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const onSubmit = () => {
        console.log(email);
    }

    return (
        <>
            <main className="min-h-screen w-full p-16 sm:p-10 md:p-16 bg-[#f8f9ff] bg-[radial-gradient(at_40%_20%,hsla(235,100%,88%,1)_0px,transparent_50%),radial-gradient(at_80%_0%,hsla(220,100%,94%,1)_0px,transparent_50%),radial-gradient(at_0%_50%,hsla(240,100%,96%,1)_0px,transparent_50%)]">
                <section className='flex flex-col gap-8 w-full max-w-120 items-center justify-center mx-auto'>
                    {/* Logo */}
                    <div className="text-center mb-6 sm:mb-8 flex items-center justify-center">
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
                    {/* Form */}
                    <form
                        className='p-10 w-full flex flex-col gap-8 rounded-4xl bg-white/70 shadow-[0px_12px_32px_0px_rgba(29,41,57,0.05)] bg-blur-[20px]'
                        action={onSubmit}
                    >
                        {/* Heading */}
                        <div className='w-full flex flex-col gap-2'>
                            <h2 className='w-full font-semibold text-[30px] leading-9.5 tracking-[-0.3px] text-[#101C2C] '>Forgot Your Password?</h2>
                            <p className='w-full leading-6 text-[16px] text-[#454653] '>Enter your email address and we'll send you a link to reset your password.</p>
                        </div>

                        {/* Email */}
                        <div className='flex flex-col gap-6 w-full '>
                            <div className='gap-2 flex flex-col'>
                                <label
                                    className='font-medium leading-5 tracking-[0.28px] text-[14px] text-[#454653]'
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                                <div className='relative h-12 bg-white pt-3.25 pl-12 pr-4 pb-3.5 rounded-[18px] flex items-center focus-within:ring-2 focus-within:ring-[#4752c3] transition-all duration-200'>
                                    <span className="absolute material-symbols-outlined text-outline text-[#767684] left-4">
                                        mail
                                    </span>

                                    <input
                                        className='text-[16px] placeholder:text-[#6B7280] w-full focus:outline-none bg-transparent '
                                        type="email"
                                        name="email"
                                        required
                                        autoComplete='email'
                                        placeholder='you@email.com'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button type='submit' className='flex items-center justify-center rounded-full bg-linear-to-r from-[#4752C3] to-[#7C87FB] px-6 py-4 gap-2 text-white shadow-[0px_4px_12px_0px_rgba(71,82,195,0.2)] cursor-pointer'>
                                <p className='font-medium text-[14px] leading-5 tracking-[0.28px]'>Send Reset Link</p>
                                <span className="material-symbols-outlined text-center w-4 h-4">arrow_forward</span>
                            </button>
                        </div>

                        {/* Back to Login */}
                        <Link className='flex gap-3 justify-center text-[#454653] '>
                            <span className='material-symbols-outlined text-[18px] leading-none'>arrow_back</span>
                            <p className='font-medium text-[14px] leading-5 tracking-[0.28px] '>Back to Log In</p>
                        </Link>
                    </form>
                </section>
            </main>
        </>
    )
}

export default ForgotPassword