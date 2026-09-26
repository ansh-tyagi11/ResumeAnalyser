import React from 'react';
import { Link } from 'react-router';
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        const hasEmptyField = Object.values(data).some(
            (value) => value == null || value == undefined || value == " "
        );

        if (hasEmptyField) {
            return;
        }

        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(async (response) => {
            if (!response.ok) {
                const body = await response.json();
                throw new Error(body.error || JSON.stringify(body.details) || "Request failed");
            }

            return response.json();
        })
            .then((result) => {
                console.log("Success:", result);
                reset();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <>
            <main className="w-full min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-16 bg-[linear-gradient(180deg,#EAF2FF_0%,#FFF3F6_100%)]">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full max-w-120 mx-auto bg-white/60 rounded-3xl sm:rounded-4xl p-6 sm:p-8 backdrop-blur-[20px] shadow-[0px_12px_32px_0px_rgba(29,41,57,0.05)]'
                >
                    <div className='w-full flex flex-col justify-center items-center h-auto min-h-49 pb-8'>
                        <div className='mb-6 w-12 h-12 rounded-full flex justify-center items-center bg-[#dde9ff]'>
                            <span className="material-symbols-outlined text-[#4752c3] text-2xl" data-icon="auto_awesome"
                                data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                        </div>

                        <h1 className="w-full text-center font-bold text-4xl sm:text-5xl leading-tight sm:leading-14 bg-[linear-gradient(90deg,#AB8C95_8%,#000000_47%,#8E97C5_89%)] pb-2 bg-clip-text text-transparent tracking-[-0.96px]">
                            Welcome Back
                        </h1>
                        <div className='w-full text-center leading-7 text-base sm:text-[18px] text-[#454653]'>
                            Log In to Continue Your Job Resume
                        </div>
                    </div>

                    <div className='w-full flex-col gap-6 flex'>
                        <div className='w-full flex flex-col gap-2'>
                            <label
                                className='w-full h-5 pl-1 leading-5 tracking-[0.28px] text-[#454653]'
                                htmlFor="email">Email Address</label>
                            <div className="bg-white w-full h-12 px-4 rounded-[18px] flex items-center gap-2 focus-within:ring-2 focus-within:ring-[#4752c3] transition-all duration-200">

                                <span className="material-symbols-outlined text-[#C6C5D5]">
                                    mail
                                </span>

                                <input
                                    className="flex-1 h-5.25 bg-transparent focus:outline-none"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    {...register("email", {
                                        required: "This field is required.",
                                    })}
                                />

                            </div>
                            {errors.email && (
                                <span className='text-red-500 text-sm pl-1'>{errors.email.message}</span>
                            )}
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <div className='flex justify-between w-full h-5 pl-1 leading-5 tracking-[0.28px]'>
                                <label className='text-[#454653]' htmlFor="password">Password</label>
                                <Link to='/forgot-password' className='text-[#4752C3]'>Forgot Password?</Link>
                            </div>

                            <div className='bg-white w-full h-12 pt-3.25 pb-3.5 pr-4 pl-5 rounded-[18px] flex items-center focus-within:ring-[#4752c3] focus-within:ring-2 transition-all duration-200'>

                                <span className='text-[#C6C5D5] material-symbols-outlined'>
                                    lock
                                </span>
                                <input
                                    className='w-full h-5.25 focus:outline-none bg-transparent'
                                    type="password"
                                    name="password"
                                    placeholder='••••••••'
                                    {...register("password", {
                                        required: "This field is required.",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Password must be at least 8 characters.",
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-])[A-Za-z\d@$!%*?&#^()_+\-]{8,}$/,
                                            message:
                                                "Password must contain A-Z, a-z, number, symbol & no spaces.",
                                        },
                                        maxLength: {
                                            value: 12,
                                            message:
                                                "Password max is 12 characters.",
                                        },
                                    })}
                                />
                            </div>
                            {errors.password && (
                                <span className='text-red-500 text-sm pl-1'>{errors.password.message}</span>
                            )}
                        </div>

                        <div className='w-full pt-4'>
                            <button
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-full bg-[#4752C3] shadow-[0px_4px_14px_0px_rgba(71,82,195,0.25)] ${isSubmitting ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}>
                                <span className='leading-5 tracking-[0.28px] font-medium text-[14px] text-white'>Log In</span>
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap gap-1 justify-center items-center pt-8'>
                        <p className='text-[#454653] leading-6 text-base'>Don't have an account?</p>
                        <Link to='/signup' className='text-[14px] leading-5 tracking-[0.28px] hover:underline text-[#4752C3] font-bold'>Sign Up</Link>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Login