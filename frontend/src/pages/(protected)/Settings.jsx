import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthProvider';

const fieldBase = 'w-full h-11 rounded-lg border border-[#C6C5D5]/40 bg-[#F2F3FF]/50 px-4 text-[15px] leading-5 outline-none focus:outline-none focus:ring-0 focus:border-[#C6C5D5]/40 placeholder:text-[15px]'
const labelBase = 'font-semibold text-[14px] leading-5 tracking-[0.2px] text-[#131B2E]'

const Settings = () => {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();
    const { user, setUser } = useAuth();

    const currentPassword = watch('currentPassword');
    const newPassword = watch('newPassword');
    const confirmNewPassword = watch('confirmNewPassword');
    const passwordChangeStarted = Boolean(currentPassword || newPassword || confirmNewPassword);

    useEffect(() => {
        if (user) {
            reset({
                name: user.name,
                email: user.email
            });
        }
    }, [user, reset]);

    const onSubmit = async (data) => {
        console.log(data);
    }

    const handleEmailUpdate = () => onSubmit({ email: getValues('email') });
    const handleResumeUpdate = (event) => onSubmit({ resumes: event.target.value });

    return (
        <main className='box-border min-h-screen w-full min-w-0 overflow-x-hidden bg-radial from-[#EAF2FF] via-[#FAF8FF] to-[#FFF3F6] px-4 pb-4 pt-[calc(10vh+1.5rem)] pl-[calc(4rem+1rem)] sm:px-8 sm:pb-8 sm:pl-[calc(4rem+2rem)] lg:pl-[calc(20vw+4rem)] lg:pr-16'>
            <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10 sm:gap-8 sm:pb-12'>
                {/* Header */}
                <section className='flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[26px] font-semibold leading-9 tracking-[-0.5px] sm:text-[32px]'>Settings</h1>
                        <p className='text-[16px] leading-6 text-[#454653]'>Manage your account settings and preferences.</p>
                    </div>
                    <span className='flex w-fit items-center gap-1 rounded-lg border border-[#C6C5D5]/20 bg-[#F2F3FF] px-3 py-1.5'>
                        <span className='h-2 w-2 animate-pulse rounded-full bg-[#10B981]'></span>
                        <span className='text-nowrap text-[13px] font-semibold leading-5 tracking-[0.3px] text-[#454653]'>Account Active</span>
                    </span>
                </section>

                {/* Account Information */}
                <section className='rounded-xl border border-[#C6C5D5]/20 bg-white p-4 sm:p-6'>
                    <div className='flex items-center gap-2 border-b border-b-[#EAEDFF] pb-4'>
                        <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F2F3FF] text-[#4752C3]'>
                            <span className='material-symbols-outlined'>manage_accounts</span>
                        </span>
                        <div>
                            <h2 className='text-[18px] font-semibold leading-7 text-[#131B2E]'>Account Information</h2>
                            <p className='text-[15px] leading-5 text-[#454653]'>Update your primary identity credentials and access passkey.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6 pt-4'>
                        <div className='flex flex-col gap-3'>
                            <label className={labelBase} htmlFor='email'>
                                Email Address
                            </label>
                            <div className='flex flex-col gap-2 sm:flex-row'>
                                <span className='flex h-11 w-full items-center gap-2 rounded-lg border border-[#C6C5D5]/40 bg-[#F2F3FF]/50 pl-2 sm:flex-1'>
                                    <span className='material-symbols-outlined text-[#767681]'>mail</span>
                                    <input
                                        className='h-full w-full bg-transparent pr-3 outline-none focus:outline-none focus:ring-0'
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='alex.morgan@example.com'
                                        {...register('email')}
                                    />
                                </span>
                                <button type='button' disabled={isSubmitting} onClick={handleEmailUpdate} className={`h-11 w-full shrink-0 rounded-lg bg-[#4752C3] px-4 text-[14px] font-semibold leading-5 tracking-[0.2px] text-white sm:w-33.25 ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}`}>
                                    Update Email
                                </button>
                            </div>
                        </div>

                        <hr className='h-px w-full border-0 bg-[#E4EDFF]' />

                        <div className='flex flex-col gap-4'>
                            <div>
                                <h3 className='text-[18px] font-semibold leading-7 text-[#131B2E]'>Change Password</h3>
                                <p className='text-[15px] leading-5 text-[#454653]'>Ensure your account uses a secure password of at least 8 characters.</p>
                            </div>

                            <div className='flex flex-col gap-1.5 md:max-w-[calc(50%-0.5rem)]'>
                                <label htmlFor='currentPassword' className={labelBase}>
                                    Current Password
                                </label>
                                <input
                                    className={fieldBase}
                                    style={{ fontFamily: 'Arial, sans-serif' }}
                                    type='password'
                                    name='currentPassword'
                                    id='currentPassword'
                                    placeholder='••••••••'
                                    {...register("currentPassword", {
                                        required: passwordChangeStarted ? "This field is required." : false,
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
                                {errors.currentPassword && (
                                    <span className="text-red-500 text-sm pl-1">{errors.currentPassword.message}</span>
                                )}
                            </div>

                            <div className='flex flex-col gap-4 md:flex-row'>
                                <div className='flex w-full flex-col gap-1.5 md:flex-1'>
                                    <label className={labelBase} htmlFor='newPassword'>
                                        New Password
                                    </label>
                                    <input
                                        className={fieldBase}
                                        style={{ fontFamily: 'Arial, sans-serif' }}
                                        type='password'
                                        name='newPassword'
                                        id='newPassword'
                                        placeholder='Min. 8 characters'
                                        {...register("newPassword", {
                                            required: passwordChangeStarted ? "This field is required." : false,
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
                                            validate: (value) =>
                                                value != currentPassword || "Passwords should be different.",
                                        })}
                                    />
                                    {errors.newPassword && (
                                        <span className="text-red-500 text-sm pl-1">{errors.newPassword.message}</span>
                                    )}
                                </div>
                                <div className='flex w-full flex-col gap-1.5 md:flex-1'>
                                    <label className={labelBase} htmlFor='confirmNewPassword'>
                                        Confirm New Password
                                    </label>
                                    <input
                                        className={fieldBase}
                                        style={{ fontFamily: 'Arial, sans-serif' }}
                                        type='password'
                                        name='confirmNewPassword'
                                        id='confirmNewPassword'
                                        placeholder='Re-type new password'
                                        {...register("confirmNewPassword", {
                                            required: passwordChangeStarted ? "Confirm New Password is required." : false,
                                            validate: (value) =>
                                                value === newPassword || "Passwords do not match.",
                                        })}
                                    />
                                    {errors.confirmNewPassword && (
                                        <span className="text-red-500 text-sm pl-1">{errors.confirmNewPassword.message}</span>
                                    )}
                                </div>
                            </div>

                            <button type='button' disabled={isSubmitting} onClick={handleSubmit(onSubmit)} className={`flex h-10 w-full items-center justify-center gap-1 rounded-lg border border-[#C6C5D5]/30 bg-[#EAEDFF] px-4 sm:w-fit ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}`}>
                                <span className='material-symbols-outlined text-[#4752C3]'>key</span>
                                <span className='text-[14px] font-semibold leading-5 text-[#131B2E]'>Update Password</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Workspace Preferences */}
                <section className='flex flex-col gap-4 rounded-xl border border-[#C6C5D5]/20 bg-white p-4 sm:p-6'>
                    <div className='flex gap-2 border-b border-b-[#EAEDFF] pb-4'>
                        <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F2F3FF] text-[#4752C3]'>
                            <span className='material-symbols-outlined '>tune</span>
                        </span>
                        <div>
                            <h2 className='text-[18px] font-semibold leading-7 text-[#131B2E]'>Workspace Preferences</h2>
                            <p className='text-[15px] leading-5 text-[#454653]'>Configure automated parsing defaults and profile behaviors.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor='resumes' className='text-[14px] font-semibold leading-5 text-[#131B2E]'>
                            Default Resume
                        </label>
                        <p className='text-[15px] leading-5 text-[#454653]'>Selected resume is loaded automatically for quick Job Matching analyses.</p>

                        <div className='mt-1 flex h-11 w-full max-w-xl items-center gap-2 rounded-lg border border-[#C6C5D5]/40 bg-[#F2F3FF]/50 px-3'>
                            <span className='material-symbols-outlined text-[#4752C3]'>description</span>
                            <select
                                name='resumes'
                                id='resumes'
                                className={`h-full w-full bg-transparent text-[15px] outline-none focus:outline-none focus:ring-0 ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}`}
                                {...register('resumes')}
                                onChange={handleResumeUpdate}
                                disabled={isSubmitting}
                            >
                                <option value='resume1'>Resume1</option>
                                <option value='resume2'>Resume2</option>
                                <option value='resume3'>Resume3</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Delete Account */}
                <section className='flex flex-col gap-4 rounded-xl border border-[#BA1A1A]/20 bg-linear-to-b from-[#FFDAD6] via-[#FFFFFF] to-[#FFFFFF] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6'>
                    <div className='flex gap-2'>
                        <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFDAD6]/50 text-[#BA1A1A]'>
                            <span className='material-symbols-outlined'>error</span>
                        </span>
                        <div className='flex flex-col gap-0.5'>
                            <h2 className='text-[18px] font-semibold leading-6 text-[#BA1A1A]'>Delete Account</h2>
                            <p className='text-[16px] leading-6 text-[#454653]'>Once you delete your account, there is no going back. Please be certain.</p>
                        </div>
                    </div>

                    <button className='flex h-10 w-full shrink-0 items-center justify-center gap-1 rounded-lg border border-[#BA1A1A]/40 px-4 text-[#BA1A1A] sm:w-auto'>
                        <span className='material-symbols-outlined'>delete</span>
                        <span className='whitespace-nowrap text-[14px] font-semibold leading-5 tracking-[0.2px]'>Delete Account</span>
                    </button>
                </section>
            </div>
        </main>
    )
}

export default Settings
