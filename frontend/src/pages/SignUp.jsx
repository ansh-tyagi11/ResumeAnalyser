import React from 'react';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const password = watch('password');

    const onSubmit = (data) => {
        const hasEmptyField = Object.values(data).some(
            (value) => value === "" || value === null || value === undefined
        );

        if (hasEmptyField) {
            return;
        }

        fetch("http://localhost:3000/api/auth/sign-up", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(async (response) => {
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
            <main className="isolate overflow-x-hidden min-h-screen w-full bg-[linear-gradient(135deg,#eff4ff_0%,#ffdad6_100%)] flex items-center justify-center text-[#101c2c] p-4">
                <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[5%] left-[5%] w-[50%] sm:w-[35%] h-[35%] rounded-full bg-[#7c87fb] opacity-30 blur-[100px]" />
                    <div className="absolute bottom-[5%] right-[5%] w-[50%] sm:w-[35%] h-[35%] rounded-full bg-[#fe7488] opacity-20 blur-[120px]" />
                </div>

                <section className="w-full max-w-120">
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
                        className="p-6 sm:p-10 rounded-4xl sm:rounded-[48px] flex flex-col gap-6 bg-white/60 backdrop-blur-[20px] shadow-[0_12px_32px_0_rgb(29_41_57/5%)]"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="text-center gap-2">
                            <h2 className="text-[#101C2C] leading-tight sm:leading-9.5 tracking-[-0.3px] font-semibold text-2xl sm:text-[30px]">
                                Create Your Account
                            </h2>
                            <p className="text-sm sm:text-[16px] leading-6 text-[#454653]">
                                Start building a stronger resume with AI.
                            </p>
                        </div>

                        <div className="pt-2 flex flex-col gap-5 sm:gap-6">

                            {/* Name Input */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-[14px] leading-5 tracking-[0.28px] font-medium text-[#454653]"
                                    htmlFor="name"
                                >
                                    Full Name
                                </label>

                                <div className="relative rounded-[18px] py-3 sm:py-3.5 px-4 bg-white shadow-[0px_2px_4px_1px_#000000_2%] flex items-center focus-within:ring-2 focus-within:ring-[#4752c3] transition-all duration-200 border border-[#767684]">
                                    <span className="absolute left-4 material-symbols-outlined text-outline text-[#767684]">
                                        person
                                    </span>

                                    <input
                                        id="name"
                                        className="pl-8 focus:outline-none bg-transparent w-full min-w-0 placeholder:text-[#C6C5D5]"
                                        type="text"
                                        placeholder="Jane Doe"
                                        {...register("name", {
                                            required: { value: true, message: "This field is required." },
                                            pattern: {
                                                value: /^[A-Za-z ]+$/,
                                                message: "Only letters are allowed (A-Z,a-z)",
                                            },
                                        })}
                                    />
                                </div>
                                {errors.name && (
                                    <span className="text-red-500 text-sm pl-1">{errors.name.message}</span>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-[14px] leading-5 tracking-[0.28px] font-medium text-[#454653]"
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>

                                <div className="relative rounded-[18px] py-3 sm:py-3.5 px-4 bg-white shadow-[0px_2px_4px_1px_#000000_2%] flex items-center focus-within:ring-2 focus-within:ring-[#4752c3] transition-all duration-200 border border-[#767684]">
                                    <span className="absolute left-4 material-symbols-outlined text-outline text-[#767684]">
                                        mail
                                    </span>

                                    <input
                                        id="email"
                                        className="pl-8 focus:outline-none bg-transparent w-full min-w-0 placeholder:text-[#C6C5D5]"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="jane@example.com"
                                        {...register("email", {
                                            required: "This field is required.",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Enter a valid email address.",
                                            },
                                        })}
                                    />
                                </div>
                                {errors.email && (
                                    <span className="text-red-500 text-sm pl-1">{errors.email.message}</span>
                                )}
                            </div>

                            {/* Password Input */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-[14px] leading-5 tracking-[0.28px] font-medium text-[#454653]"
                                    htmlFor="password"
                                >
                                    Password
                                </label>

                                <div className="relative rounded-[18px] py-3 sm:py-3.5 px-4 bg-white shadow-[0px_2px_4px_1px_#000000_2%] flex items-center focus-within:ring-2 focus-within:ring-[#4752c3] transition-all duration-200 border border-[#767684]">
                                    <span className="absolute left-4 material-symbols-outlined text-outline text-[#767684]">
                                        lock
                                    </span>

                                    <input
                                        id="password"
                                        className="pl-8 focus:outline-none bg-transparent w-full min-w-0 placeholder:text-[#C6C5D5]"
                                        type="password"
                                        placeholder="••••••••"
                                        {...register("password", {
                                            required: "This field is required.",
                                            minLength: {
                                                value: 8,
                                                message: "Password must be at least 8 characters.",
                                            },
                                            maxLength: {
                                                value: 12,
                                                message: "Password max is 12 characters.",
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-])[A-Za-z\d@$!%*?&#^()_+\-]{8,}$/,
                                                message: "Password must contain A-Z, a-z, number, symbol & no spaces.",
                                            },
                                        })}
                                    />
                                </div>
                                {errors.password && (
                                    <span className="text-red-500 text-sm pl-1">{errors.password.message}</span>
                                )}
                            </div>

                            {/* Confirm Password Input */}
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-[14px] leading-5 tracking-[0.28px] font-medium text-[#454653]"
                                    htmlFor="confirmPassword"
                                >
                                    Confirm Password
                                </label>

                                <div className="relative rounded-[18px] py-3 sm:py-3.5 px-4 bg-white shadow-[0px_2px_4px_1px_#000000_2%] flex items-center focus-within:ring-2 focus-within:ring-[#4752c3] transition-all duration-200 border border-[#767684]">
                                    <span className="absolute left-4 material-symbols-outlined text-outline text-[#767684]">
                                        lock
                                    </span>

                                    <input
                                        id="confirmPassword"
                                        className="pl-8 focus:outline-none bg-transparent w-full min-w-0 placeholder:text-[#C6C5D5]"
                                        type="password"
                                        placeholder="••••••••"
                                        {...register("confirmPassword", {
                                            required: "Confirm password is required",
                                            validate: (value) =>
                                                value === password || "Passwords do not match.",
                                        })}
                                    />
                                </div>
                                {errors.confirmPassword && (
                                    <span className="text-red-500 text-sm pl-1">{errors.confirmPassword.message}</span>
                                )}
                            </div>

                            {/* Button */}
                            <button
                                disabled={isSubmitting}
                                className={`rounded-full gap-2 h-12 py-3.5 bg-[linear-gradient(120deg,#4752C3_0%,#7C87FB_100%)] w-full text-white text-center items-center flex justify-center ${isSubmitting ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
                                type="submit"
                            >
                                <span className="leading-5 tracking-[0.28px] font-medium text-[14px]">
                                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                                </span>
                                {!isSubmitting && (
                                    <span className="material-symbols-outlined text-center">arrow_forward</span>
                                )}
                            </button>
                        </div>

                        <div className="flex items-center gap-4 h-6 pt-2">
                            <hr className="flex-1 text-[#C6C5D5]" />
                            <span className="shrink-0 h-4 font-semibold leading-4 tracking-[0.6px] text-[12px] text-[#767684]">
                                OR
                            </span>
                            <hr className="flex-1 text-[#C6C5D5]" />
                        </div>

                        <div className="leading-6 text-sm sm:text-[16px] flex flex-wrap justify-center items-center gap-2 text-center">
                            <p className="text-[#454653]">Already have an account?</p>
                            <Link className="text-[#4752C3] font-medium" to="/login">Log In</Link>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
};

export default SignUp;