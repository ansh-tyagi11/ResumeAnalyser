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

    return (
        <>
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute left-[-10vw] top-[-10vw] h-[55vw] w-[55vw] rounded-full bg-[#BEC2FF]/60 blur-[100px] mix-blend-multiply">
                </div>
                <div
                    className="absolute right-[-10vw] top-[35vh] h-[50vw] w-[50vw] rounded-full bg-[#FFB2B9]/60 blur-[100px] mix-blend-multiply">
                </div>
            </div>
            <main className='relative flex min-w-0 flex-col gap-20 overflow-hidden'>

                {/* Hero Section */}
                <section className='h-75 w-full px-0 pb-0 pt-12 lg:px-32'>
                    <div className='w-full px-5 lg:px-16 flex flex-col'>

                        {/* Mission */}
                        <div className='pb-6 h-14 text-center'>
                            <span className='h-8 py-1.5 px-4 bg-[#FFDADC]/50 font-medium text-[14px] leading-5 tracking-[1.4px] text-[#A83349] rounded-full'>OUR MISSION</span>
                        </div>

                        {/* Heading */}
                        <div className='pb-6 h-34'>
                            <h1 className='lg:px-30 px-5 h-28 font-bold text-wrap text-center text-[32px] lg:text-[48px] lg:leading-14 md:leading-[24x] md:tracking-[-0.32px] lg:tracking-[-0.96px] shadow-[0px_0px_20px_0px_#4752C3/30] text-[#101C2C] '>
                                Your experience deserves to be understood.
                            </h1>

                        </div>

                        {/* Para */}
                        <div className="w-full px-4 lg:px-28.5">
                            <p className="mx-auto max-w-166.5 text-center text-[18px] leading-6 lg:leading-[29.3px] text-[#454653]">
                                We built AI Resume Analyzer to help people communicate their skills, experience,
                                and potential more clearly without turning resume improvement into guesswork.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Story Section */}
                <section className='mx-auto w-full max-w-3xl px-5 md:px-16'>
                    <div className='relative bg-white/80 p-12 backdrop-blur-md shadow-[0px_12px_32px_0px_rgb(29_41_57/3%)] md:p-12 rounded-4xl overflow-hidden'>
                        <div className='w-2 absolute left-0 top-0 h-full bg-linear-to-b from-[#4752c3] to-[#a83349]' />
                        <h3 className='pb-6 text-[#101C2C] leading-9.5 text-[30px] font-semibold tracking-[-0.3px] '>Why we build this.</h3>
                        <div className='gap-6 flex-col flex leading-7 text-[18px] text-[#454653] '>
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
                <section className='mx-auto w-full max-w-7xl px-5 md:px-16'>
                    <div className='flex gap-12 flex-col'>
                        <h3 className='leading-9.5 font-semibold text-[30px] tracking-[-0.3px] text-[#101C2C] text-center'>Our Core Principles</h3>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {
                                principles.map((principle) => (
                                    <div key={principle.id} className='p-8 pb-14 rounded-[48px] bg-white shadow-[0_12px_32px_rgba(29,41,57,0.05)]'>
                                        {/* Icon */}
                                        <div className='rounded-full flex justify-center items-center bg-[#E0E0FF] mb-6 w-12 h-12'>
                                            <span className="material-symbols-outlined [font-variation-settings:'FILL'_1] text-[#4752C3]">
                                                {principle.icon}
                                            </span>
                                        </div>

                                        {/* Heading */}
                                        <div className='pb-3 leading-8 font-semibold text-[24px] text-[#101C2C] '>
                                            {principle.heading}
                                        </div>

                                        {/* Para */}
                                        <div className='leading-6 text-[16px] text-[#454653] '>
                                            {principle.para}
                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>

                {/* AI Perspective Section */}
                <section className="w-full flex flex-col items-center justify-center gap-16 mx-auto max-w-full overflow-hidden px-16 py-20 bg-[#EFF4FF]">

                    <h2 className="font-semibold text-center text-[30px] leading-9.5 tracking-[-0.3px]">
                        "AI should guide you, not replace your voice."
                    </h2>

                    <div className="w-full flex md:flex-row flex-col justify-center gap-8 items-center">

                        <div className="uppercase w-48 h-11 px-6 py-3 rounded-full font-medium text-[14px] leading-5 tracking-[0.28px] text-center shadow-[0px_1px_2px_0px_#000000/5] bg-white text-[#454653]">
                            Your Experience
                        </div>

                        <span className="material-symbols-outlined text-[#4752c3] hidden! md:inline-block!">
                            arrow_forward
                        </span>

                        <span className="material-symbols-outlined text-[#4752c3] inline-block! md:hidden!">
                            arrow_downward
                        </span>

                        <div className="uppercase w-48 h-11 px-6 py-3 rounded-full font-medium text-[14px] leading-5 tracking-[0.28px] text-center bg-[#4752C3] text-white shadow-[0px_4px_6px_-1px_#000000/10]">
                            AI Analysis
                        </div>

                        <span className="material-symbols-outlined text-[#4752c3] hidden! md:inline-block!">
                            arrow_forward
                        </span>

                        <span className="material-symbols-outlined text-[#4752c3] inline-block! md:hidden!">
                            arrow_downward
                        </span>

                        <div className="uppercase w-48 h-11 px-6 py-3 rounded-full font-medium text-[14px] leading-5 tracking-[0.28px] text-center shadow-[0px_1px_2px_0px_#000000/5] bg-[#FE7488] text-[#101C2C]">
                            Clear Insights
                        </div>

                        <span className="material-symbols-outlined text-[#4752c3] hidden! md:inline-block!">
                            arrow_forward
                        </span>

                        <span className="material-symbols-outlined text-[#4752c3] inline-block! md:hidden!">
                            arrow_downward
                        </span>

                        <div className="uppercase w-48 h-11 px-6 py-3 rounded-full font-medium text-[14px] leading-5 tracking-[0.28px] text-center shadow-[0px_1px_2px_0px_#000000/5] bg-[#D7E3F9] text-[#101C2C]">
                            Your Decisions
                        </div>

                    </div>
                </section>

                {/* Analytical Constellation */}
                <section className='w-full max-w-full overflow-hidden'>
                    HI
                </section>

                {/* Final Promise & CTA */}
                <section className='w-full max-w-full overflow-hidden'>
                    HI
                </section>

            </main>

        </>
    )
}

export default About