import { useForm } from 'react-hook-form';
import useProfile from '../../hooks/useProfile';

const fieldWrap = 'py-[12.5px] pl-4 flex items-center rounded-lg gap-1.5 shadow-[0px_1px_2px_0px_rgb(0_0_0_/5%)]';
const labelCls = 'font-semibold text-[13px] leading-4 tracking-[0.2px]';
const hintCls = 'font-medium text-[13px] leading-4 tracking-[0.2px] text-[#454653]';
const inputCls = 'text-[15px] placeholder:text-[15px] focus:outline-none w-full';

const Profile = () => {
    const {
        profileUser: userProfile,
        isError,
        isPending,
        updateProfile,
        isUpdating,
        isUpdateError,
        isSuccess,
    } = useProfile();

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, isValid, errors },
    } = useForm({
        mode: 'onChange',
        values: {
            name: userProfile?.name ?? '',
            email: userProfile?.email ?? '',
            targetRole: userProfile?.targetRole ?? '',
            experienceLevel: userProfile?.experienceLevel ?? 'Student',
        },
    });

    const onSubmit = (data) => {
        updateProfile(data);
    };

    if (isPending) return <p>Loading...</p>;
    if (isError) return <p>Currently we are facing issue.</p>

    return (
        <>
            <main className="font-['Hanken_Grotesk'] box-border min-h-screen w-full min-w-0 overflow-x-hidden bg-radial from-[#EAF2FF] via-[#FAF8FF] to-[#FFF3F6] px-4 pb-4 pt-[calc(10vh+1.5rem)] pl-[calc(4rem+1rem)] sm:px-8 sm:pb-8 sm:pl-[calc(4rem+2rem)] lg:pl-[calc(20vw+4rem)] lg:pr-16">
                <div className='flex flex-col gap-6 mx-auto w-full max-w-4xl'>
                    <section className='flex flex-col gap-1'>
                        <h1 className='font-semibold text-[30px] leading-9 tracking-[-0.5px] text-[#131B2E]'>Profile</h1>
                        <p className='text-[15px] leading-6 text-[#454653]'>Manage your account credentials and default target role for tailored resume diagnostics.</p>
                    </section>

                    <form onSubmit={handleSubmit(onSubmit)} className='p-6 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgb(0_0_0_/5%)]'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-4'>
                                <img
                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userProfile?.name ?? '')}`}
                                    alt=""
                                    className='h-16 w-16 rounded-full'
                                />
                                <div>
                                    <div className='font-semibold text-[17px] leading-6 tracking-[-0.1px]'>{userProfile?.name}</div>
                                    <div className='font-medium text-[13px] leading-6 text-[#454653]'>{userProfile?.email}</div>
                                </div>
                            </div>

                            <div className='flex gap-1 flex-col'>
                                <div className='flex justify-between'>
                                    <label className={labelCls} htmlFor="name">Name</label>
                                    <span className={hintCls}>Required</span>
                                </div>
                                <div className={fieldWrap}>
                                    <span className='material-symbols-outlined text-[#767684]'>badge</span>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder='e.g. Alex Morgan'
                                        className={inputCls}
                                        {...register('name', { required: 'Name is required.' })}
                                    />
                                </div>
                                {errors.name && <p className='text-sm text-red-600'>{errors.name.message}</p>}
                            </div>

                            <div className='flex gap-1 flex-col'>
                                <div className='flex justify-between'>
                                    <label className={labelCls} htmlFor="email">Email Address</label>
                                    <span className={hintCls}>Required</span>
                                </div>
                                <div className={fieldWrap}>
                                    <span className='material-symbols-outlined text-[#767684]'>mail</span>
                                    <input
                                        disabled
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="name@example.com"
                                        className={inputCls}
                                        {...register('email')}
                                    />
                                </div>
                            </div>

                            <div className='flex gap-1 flex-col'>
                                <div className='flex justify-between'>
                                    <label className={labelCls} htmlFor="targetRole">Target Role</label>
                                    <span className={hintCls}>Used for AI Job Matching</span>
                                </div>
                                <div className={fieldWrap}>
                                    <span className='material-symbols-outlined text-[#767684]'>work</span>
                                    <input
                                        type="text"
                                        name="targetRole"
                                        id="targetRole"
                                        placeholder="e.g. Software Engineer"
                                        className={inputCls}
                                        {...register('targetRole')}
                                    />
                                </div>
                            </div>

                            <div className='flex gap-1 flex-col'>
                                <div className='flex justify-between'>
                                    <label className={labelCls} htmlFor="experienceLevel">Experience Level</label>
                                </div>
                                <div className={fieldWrap}>
                                    <span className='material-symbols-outlined text-[#767684]'>trending_up</span>
                                    <select className='text-[15px] focus:outline-none w-full'
                                        name="experienceLevel"
                                        id="experienceLevel"
                                        defaultValue="Student"
                                        {...register('experienceLevel')}
                                    >
                                        <option value="Student">Student</option>
                                        <option value="Entry Level">Entry Level</option>
                                        <option value="Mid Level">Mid Level</option>
                                        <option value="Senior">Senior</option>
                                    </select>
                                </div>
                            </div>

                            {isUpdateError && <p role="alert" className='text-sm text-red-600'>Unable to update your profile. Please try again.</p>}
                            {isSuccess && <p role="status" className='text-sm text-green-700'>Profile updated successfully.</p>}

                            <div className='flex justify-end'>
                                <button
                                    type="submit"
                                    disabled={isSubmitting || isUpdating || !isValid}
                                    className='flex items-center gap-1 h-10 px-6 rounded-lg bg-[#7C87FB] text-white cursor-pointer shadow-[0px_1px_3px_0px_#0F172A,0px_4px_16px_-2px_rgb(15_23_42_/4%)] disabled:cursor-not-allowed disabled:opacity-50'
                                >
                                    <span className='material-symbols-outlined text-[18px]'>save</span>
                                    <span className='font-semibold text-[13px] leading-4 tracking-[0.2px]'>
                                        {isSubmitting || isUpdating ? 'Saving...' : 'Save Changes'}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Profile