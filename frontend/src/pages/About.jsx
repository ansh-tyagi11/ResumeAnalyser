import React from 'react'

const About = () => {
    const principles =
        [
            {
                id: "1",
                icon: "visibility",
                heading: "Clarity",
                para: "No confusing jargon or arbitrary scores. We provide straight forward explanations of what works, what doesn't, and why."
            },
            {
                id: "2",
                icon: "fact_check",
                heading: "Evidence",
                para: "Our feedback is grounded in current hiring trends and ATS algorithms. We don't guess; we analyze against proven data models."
            },
            {
                id: "3",
                icon: "bolt",
                heading: "Action",
                para: "Identifying a problem is only half the battle. Every piece of feedback comes with a concrete suggestion on how to improve it immediately."
            }
        ];

    const analytical = [
        {
            id: "1",
            icon: "robot_2",
            color: "text-[#4752C3]",
            word: "ATS Compatibility"
        },
        {
            id: "2",
            icon: "model_training",
            color: "text-[#A83349]",
            word: "Skills Extraction"
        },
        {
            id: "3",
            icon: "key",
            color: "text-[#C58500]",
            word: "Key Optimization"
        },
        {
            id: "4",
            icon: "work_history",
            color: "text-[#4752C3]",
            word: "Experience Phrasing"
        },
        {
            id: "5",
            icon: "emoji_events",
            color: "text-[#A83349]",
            word: "Achievements"
        },
        {
            id: "6",
            icon: "format_align_left",
            color: "text-[#C58500]",
            word: "Formatting & Flow"
        },
        {
            id: "7",
            icon: "join_inner",
            color: "text-[#4752C3]",
            word: "Job Description Match"
        }
    ];

    return (
        <>
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute left-[-20vw] top-[-20vw] h-[70vw] w-[70vw] rounded-full bg-[#BEC2FF]/60 blur-[100px] mix-blend-multiply sm:left-[-10vw] sm:top-[-10vw] sm:h-[55vw] sm:w-[55vw]">
                </div>
                <div
                    className="absolute right-[-20vw] top-[45vh] h-[70vw] w-[70vw] rounded-full bg-[#FFB2B9]/60 blur-[100px] mix-blend-multiply sm:right-[-10vw] sm:top-[35vh] sm:h-[50vw] sm:w-[50vw]">
                </div>
            </div>

            <main className='relative flex min-w-0 flex-col gap-16 overflow-hidden bg-linear-to-r from-[#BEC2FF]/60 to-[#FFB2B9]/60 sm:gap-20'>

                {/* Hero Section */}
                <section className='w-full px-5 pb-0 pt-12 sm:px-8 lg:px-32'>
                    <div className='flex w-full flex-col lg:px-16'>

                        {/* Mission */}
                        <div className='pb-6 text-center'>
                            <span className='inline-block rounded-full bg-[#FFDADC]/50 px-4 py-1.5 text-[13px] font-medium leading-5 tracking-[1.4px] text-[#A83349] sm:text-[14px]'>OUR MISSION</span>
                        </div>

                        {/* Heading */}
                        <div className='pb-6'>
                            <h1 className='mx-auto max-w-4xl px-1 text-center text-[28px] font-bold leading-9 text-wrap text-[#101C2C] shadow-[0px_0px_20px_0px_#4752C3/30] sm:text-[36px] sm:leading-11 md:tracking-[-0.32px] lg:px-0 lg:text-[48px] lg:leading-14 lg:tracking-[-0.96px]'>
                                Your experience deserves to be understood.
                            </h1>
                        </div>

                        {/* Para */}
                        <div className="w-full px-2 sm:px-6 lg:px-28.5">
                            <p className="mx-auto max-w-166.5 text-center text-[16px] leading-6 text-[#454653] sm:text-[18px] lg:leading-[29.3px]">
                                We built AI Resume Analyzer to help people communicate their skills, experience,
                                and potential more clearly without turning resume improvement into guesswork.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Story Section */}
                <section className='mx-auto w-full max-w-3xl px-5 sm:px-8 md:px-16'>
                    <div className='relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-[0px_12px_32px_0px_rgb(29_41_57/3%)] backdrop-blur-md sm:p-8 md:rounded-4xl md:p-12'>
                        <div className='absolute left-0 top-0 h-full w-2 bg-linear-to-b from-[#4752c3] to-[#a83349]' />
                        <h3 className='pb-4 text-[22px] font-semibold leading-8 tracking-[-0.3px] text-[#101C2C] sm:pb-6 sm:text-[26px] md:text-[30px] md:leading-9.5'>Why we build this.</h3>
                        <div className='flex flex-col gap-4 text-[16px] leading-6.5 text-[#454653] sm:gap-6 sm:text-[18px] sm:leading-7'>
                            <p>
                                For too long, the job application process has been a black box.
                                Brilliant professionals submit carefully crafted resumes, only to be
                                met with automated silence. The feedback loop is broken.
                            </p>

                            <p>
                                We realized that the barrier isn't a lack of talent; it's a translation
                                problem. Resumes are a highly specific format, and translating
                                years of complex, nuanced experience into ATS-friendly bullet
                                points is a skill entirely separate from actually doing the job.
                            </p>

                            <p>
                                We created this platform to bridge that gap. By leveraging
                                advanced language models, we decode the obscure rules of
                                resume parsing and provide you with actionable, human-centric
                                insights to make your true capabilities shine through.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className='mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-16'>
                    <div className='flex flex-col gap-8 sm:gap-12'>
                        <h3 className='text-center text-[24px] font-semibold leading-8 tracking-[-0.3px] text-[#101C2C] sm:text-[26px] md:text-[30px] md:leading-9.5'>Our Core Principles</h3>
                        <div className='grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3'>
                            {
                                principles.map((principle) => (
                                    <div key={principle.id} className='rounded-4xl bg-white p-6 pb-10 shadow-[0_12px_32px_rgba(29,41,57,0.05)] sm:rounded-[40px] sm:p-8 sm:pb-14 md:rounded-[48px]'>
                                        {/* Icon */}
                                        <div className='mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#E0E0FF] sm:mb-6 sm:h-12 sm:w-12'>
                                            <span className="material-symbols-outlined [font-variation-settings:'FILL'_1] text-[#4752C3]">
                                                {principle.icon}
                                            </span>
                                        </div>

                                        {/* Heading */}
                                        <div className='pb-2 text-[20px] font-semibold leading-7 text-[#101C2C] sm:pb-3 sm:text-[24px] sm:leading-8'>
                                            {principle.heading}
                                        </div>

                                        {/* Para */}
                                        <div className='text-[15px] leading-6 text-[#454653] sm:text-[16px]'>
                                            {principle.para}
                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>

                {/* AI Perspective Section */}
                <section className="mx-auto flex w-full max-w-full flex-col items-center justify-center gap-10 overflow-hidden bg-[#EFF4FF] px-5 py-14 sm:gap-16 sm:px-8 sm:py-20 md:px-16">

                    <h2 className="max-w-2xl text-center text-[22px] font-semibold leading-8 tracking-[-0.3px] sm:text-[26px] md:text-[30px] md:leading-9.5">
                        "AI should guide you, not replace your voice."
                    </h2>

                    <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-6 md:flex-row md:gap-8">

                        <div className="w-44 rounded-full bg-white px-5 py-3 text-center text-[13px] font-medium uppercase leading-5 tracking-[0.28px] text-[#454653] shadow-[0px_1px_2px_0px_#000000/5] sm:w-48 sm:px-6 sm:text-[14px]">
                            Your Experience
                        </div>

                        <span className="material-symbols-outlined hidden! text-[#4752c3] md:inline-block!">
                            arrow_forward
                        </span>

                        <span className="material-symbols-outlined inline-block! text-[#4752c3] md:hidden!">
                            arrow_downward
                        </span>

                        <div className="w-44 rounded-full bg-[#4752C3] px-5 py-3 text-center text-[13px] font-medium uppercase leading-5 tracking-[0.28px] text-white shadow-[0px_4px_6px_-1px_#000000/10] sm:w-48 sm:px-6 sm:text-[14px]">
                            AI Analysis
                        </div>

                        <span className="material-symbols-outlined hidden! text-[#4752c3] md:inline-block!">
                            arrow_forward
                        </span>

                        <span className="material-symbols-outlined inline-block! text-[#4752c3] md:hidden!">
                            arrow_downward
                        </span>

                        <div className="w-44 rounded-full bg-[#FE7488] px-5 py-3 text-center text-[13px] font-medium uppercase leading-5 tracking-[0.28px] text-[#101C2C] shadow-[0px_1px_2px_0px_#000000/5] sm:w-48 sm:px-6 sm:text-[14px]">
                            Clear Insights
                        </div>

                        <span className="material-symbols-outlined hidden! text-[#4752c3] md:inline-block!">
                            arrow_forward
                        </span>

                        <span className="material-symbols-outlined inline-block! text-[#4752c3] md:hidden!">
                            arrow_downward
                        </span>

                        <div className="w-44 rounded-full bg-[#D7E3F9] px-5 py-3 text-center text-[13px] font-medium uppercase leading-5 tracking-[0.28px] text-[#101C2C] shadow-[0px_1px_2px_0px_#000000/5] sm:w-48 sm:px-6 sm:text-[14px]">
                            Your Decisions
                        </div>

                    </div>
                </section>

                {/* Analytical Constellation */}
                <section className='w-full max-w-full overflow-hidden px-5 sm:px-8 md:px-16 lg:px-32'>
                    <div className='flex flex-col gap-8 py-2 sm:gap-12 md:px-16'>
                        <h2 className='text-center text-[24px] font-semibold leading-8 tracking-[-0.3px] text-[#101C2C] sm:text-[26px] md:text-[30px] md:leading-9.5'>Comprehensive Analysis</h2>

                        <div className='mx-auto flex max-w-4xl flex-row flex-wrap justify-center gap-3 sm:gap-4'>
                            {
                                analytical.map((analysis, id) => (
                                    <div key={id} className='flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] sm:gap-3 sm:px-6 sm:py-4'>
                                        <span className={`material-symbols-outlined h-4 w-4 sm:h-4.5 sm:w-4.5 ${analysis.color}`}>{analysis.icon}</span>
                                        <span className='whitespace-nowrap text-[14px] leading-6 text-[#101C2C] sm:text-[16px]'>{analysis.word}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                {/* Final Promise & CTA */}
                <section className='w-full px-5 pb-16 pt-0 sm:px-8 md:px-16 lg:px-32'>
                    <div className='relative mx-auto flex w-full max-w-3xl flex-col justify-center gap-4 overflow-hidden rounded-4xl border border-white/50 bg-[#faf4f9] p-8 shadow-[0px_20px_40px_0px_rgba(71,82,195,0.08)] backdrop-blur-xl sm:gap-6 sm:rounded-[3rem] sm:p-12'>

                        <div className='absolute right-[-5vw] top-[-5vw] h-35 w-35 rounded-full bg-[#FE7488]/20 blur-2xl sm:h-48 sm:w-48' />
                        <div className='absolute bottom-[-5vw] left-[-5vw] h-35 w-35 rounded-full bg-[#4752C3]/10 blur-2xl sm:h-48 sm:w-48' />

                        <h2 className='flex flex-col justify-center text-center text-[30px] font-bold leading-9 tracking-[-0.6px] text-[#101C2C] sm:text-[38px] sm:leading-11 md:text-[48px] md:leading-14 md:tracking-[-0.96px]'>
                            <span>No vague advice. </span>
                            <span>No meaningless scores.</span>
                        </h2>
                        <p className='pb-2 text-center text-[16px] leading-6.5 text-[#454653] sm:pb-4 sm:text-[18px] sm:leading-7'>
                            Just clear feedback you can act on.
                        </p>
                        <button className='mx-auto flex h-12 items-center justify-center gap-2 rounded-full bg-[#4752c3] px-8 py-4 text-[13px] font-medium leading-5 tracking-[0.28px] text-white shadow-[0px_4px_14px_0px_rgba(71,82,195,0.39)] sm:h-13 sm:px-10 sm:text-[14px]'>
                            <span>Analyze My Resume</span>
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                    </div>
                </section>

            </main>

        </>
    )
}

export default About