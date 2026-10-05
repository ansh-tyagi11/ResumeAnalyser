import React from 'react';

const data = [
    {
        title: "ATS",
        score: 88,
        icon: "verified",
        label: "Parsability & Syntax",
        status: "Excellent",
    },
    {
        title: "Content",
        score: 79,
        icon: "description",
        label: "Clarity & Impact",
        status: "Good",
    },
    {
        title: "Skills",
        score: 84,
        icon: "psychology",
        label: "Market Relevance",
        status: "Strong",
    },
    {
        title: "Experience",
        score: 81,
        icon: "work",
        label: "Career Progression",
        status: "Strong",
    },
    {
        title: "Education",
        score: 90,
        icon: "school",
        label: "Academic Standing",
        status: "Optimal",
    },
    {
        title: "Formatting",
        score: 76,
        icon: "format_align_left",
        label: "Layout Consistency",
        status: "Needs Attention",
    },
];


const ResumeAnalysis = () => {
    return (
        <>
            <main className="box-border min-h-screen w-full min-w-0 overflow-x-hidden bg-radial from-[#FAF8FF] to-[#E1E0FF]/30 px-4 pb-4 pt-[calc(10vh+1.5rem)] pl-20 sm:px-8 sm:pb-8 sm:pl-24 lg:pl-[calc(20vw+4rem)] lg:pr-16">
                <div className="flex flex-col gap-6 pt-4 sm:px-5 sm:pt-8 lg:px-10">

                    <section className='flex flex-col items-stretch gap-4 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6'>
                        <div className='flex min-w-0 flex-col gap-2'>
                            <h1 className='font-semibold text-[24px] leading-8 tracking-[-0.7px] text-[#131B2E] sm:text-[28px] sm:leading-9'>Resume Analysis</h1>
                            <div className='flex flex-wrap items-center gap-x-1 gap-y-2'>
                                <span className='flex min-w-0 items-center gap-1'>
                                    <span className='material-symbols-outlined shrink-0 text-[#4752c3] text-[16px]!'>description</span>
                                    <span className='break-all font-semibold text-[13px] leading-4 tracking-[0.3px] text-[#131b2e] sm:text-[16px]'>Alex_Morgan_Software_Engineer_Resume.pdf</span>
                                </span>
                                <span className='font-[Inter] font-semibold text-[13px] leading-4.5 text-[#C6C5D5]'>.</span>
                                <span className='text-[13px] leading-4.5 text-[#454653]'>Last analyzed: Oct 12, 2024</span>
                                <span className='font-[Inter] font-semibold text-[13px] leading-4.5 text-[#C6C5D5]'>.</span>
                                <span className='rounded-full bg-[#E2E7FF] px-2 py-0.5 text-[#040F90] font-semibold text-[11px] leading-3.5 tracking-[0.44px]'>ATS Optimized</span>
                            </div>
                        </div>
                        <button className='flex shrink-0 items-center justify-center gap-1 self-start whitespace-nowrap rounded-lg bg-[#7C87FB] px-6 py-2.5 text-white shadow-sm sm:self-auto'>
                            <span className='material-symbols-outlined text-[18px]!'>refresh</span>
                            <span className='font-semibold text-[12px] leading-4 tracking-[0.3px]'>Analyze Again</span>
                        </button>
                    </section>

                    <section className='flex w-full flex-col gap-6 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between! sm:p-8'>
                        <span className='min-w-0 flex flex-col gap-1'>
                            <div className='uppercase font-semibold text-[12px] leading-3 tracking-[0.6px] text-[#4752c3]'>Overall Evaluation</div>
                            <div className='flex items-baseline gap-1'>
                                <span className='font-bold text-[36px] leading-10 tracking-[-0.9px] text-[#131b2e]'>82</span>
                                <span className='font-semibold text-[20px] leading-7 tracking-[-0.3px] text-[#454653]'>/100</span>
                            </div>
                            <p className='text-[14px] leading-5.5 text-[#454653]'>
                                Strong professional profile with excellent technical keywords and ATS compatibility. Addressing minor narrative structure and verb precision will push this score into the top percentile.
                            </p>
                        </span>

                        <div className="relative mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-full sm:mx-0"
                            style={{ background: "conic-gradient(#4F7CFF 82%, #E6EEFF 82% 100%)" }}>

                            <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white">
                                <div className="font-bold text-[28px] leading-9 tracking-[-0.56px] text-[#131b2e]">
                                    82%
                                </div>

                                <div className="font-semibold text-[11px] leading-3.5 tracking-[0.44px] text-[#454653]">
                                    Benchmark
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='flex flex-col gap-4 '>
                        <div className='flex justify-between w-full items-center'>
                            <span className='font-semibold text-[16px] leading-6 tracking-[-0.16px] text-[#131b2e]'>Category Breakdown</span>
                            <span className='font-semibold text-[11px] leading-3.5 tracking-[0.44px] text-[#454653]'>6 Evaluated Dimensions</span>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                            {data.map((item) => (
                                <div key={item.title}
                                    className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:p-6">
                                    <div className="flex justify-between items-center">
                                        <span className="flex gap-2 items-center">
                                            <span className="rounded-lg bg-[#eaedff] text-[#4752c3] p-2">
                                                <span className="material-symbols-outlined text-[20px]!">
                                                    {item.icon}
                                                </span>
                                            </span>

                                            <span className="font-semibold text-[16px] leading-6 tracking-[-0.16px] text-[#131b2e]">
                                                {item.title}
                                            </span>
                                        </span>

                                        <span className="px-2.5 py-1 rounded-full bg-[#F0FDF4] text-[#15803D]">
                                            {item.score}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <div className="w-full h-2 rounded-full bg-[#EAEDFF] overflow-hidden">
                                            <div className="h-full rounded-full bg-[#7CB7FB]"
                                                style={{ width: `${item.score}%` }}
                                            />
                                        </div>

                                        <div className="flex items-start justify-between gap-3">
                                            <span className="min-w-0 font-semibold text-[11px] leading-3.5 tracking-[0.44px] text-[#454653]">
                                                {item.label}
                                            </span>

                                            <span className="shrink-0 text-right font-semibold text-[11px] leading-3.5 tracking-[0.44px] text-[#454653]">
                                                {item.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </section>

                    <section className='flex flex-col gap-4'>
                        <div className='flex justify-between w-full items-center'>
                            <span className='font-semibold text-[16px] leading-6 tracking-[-0.16px] text-[#131b2e]'>Analysis Findings</span>
                            <span className='font-semibold text-[11px] leading-3.5 tracking-[0.44px] text-[#454653]'>Detailed Diagnostics</span>
                        </div>

                        <div className='p-6 bg-white shadow-sm rounded-xl flex flex-col gap-4'>
                            <div className='flex gap-2 '>
                                <span className='rounded-lg flex justify-center items-center bg-[#f0fdf4] w-7 h-7 text-[#15803d]'>
                                    <span className="material-symbols-outlined text-[18px]!">check_circle</span>
                                </span>
                                <span className='font-semibold text-[16px] leading-6 tracking-[-0.16px] text-[#131b2e]'>Strengths</span>
                            </div>

                            <div className='pl-2 flex flex-col gap-2'>
                                <div className='flex gap-2'>
                                    <span className="material-symbols-outlined text-[#15803d] text-[18px]! mt-0.5">done</span>
                                    <p className='text-[#454653] text-[14px] leading-5.5'>
                                        Strong technical skill alignment with core backend frameworks (Node.js, PostgreSQL, Docker).
                                    </p>
                                </div>
                                <div className='flex gap-2'>
                                    <span className="material-symbols-outlined text-[#15803d] text-[18px]! mt-0.5">done</span>
                                    <p className='text-[#454653] text-[14px] leading-5.5'>
                                        Quantifiable impact highlighted in recent engineering roles with measurable performance gains.
                                    </p>
                                </div>
                                <div className='flex gap-2'>
                                    <span className="material-symbols-outlined text-[#15803d] text-[18px]! mt-0.5">done</span>
                                    <p className='text-[#454653] text-[14px] leading-5.5'>
                                        Clean structure with standard section headers recognized by ATS parsers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 bg-white shadow-sm rounded-xl flex flex-col gap-4'>
                            <div className='flex gap-2 '>
                                <span className='rounded-lg flex justify-center items-center bg-[#FFF1F2] w-7 h-7 text-[#BE123C]'>
                                    <span className="material-symbols-outlined text-[18px]!">error</span>
                                </span>
                                <span className='font-semibold text-[16px] leading-6 tracking-[-0.16px] text-[#131b2e]'>Areas to Improve</span>
                            </div>

                            <div className='pl-2 flex flex-col gap-2'>
                                <div className='flex gap-2'>
                                    <span className="material-symbols-outlined text-[#BE123C] text-[18px]! mt-0.5">warning</span>
                                    <p className='text-[#454653] text-[14px] leading-5.5'>
                                        Summary section is slightly generic and lacks a focused specialization hook.
                                    </p>
                                </div>
                                <div className='flex gap-2'>
                                    <span className="material-symbols-outlined text-[#BE123C] text-[18px]! mt-0.5">warning</span>
                                    <p className='text-[#454653] text-[14px] leading-5.5'>
                                        Action verbs in earlier work experience entries could be more active and metric-driven.
                                    </p>
                                </div>
                                <div className='flex gap-2'>
                                    <span className="material-symbols-outlined text-[#BE123C] text-[18px]! mt-0.5">warning</span>
                                    <p className='text-[#454653] text-[14px] leading-5.5'>
                                        Formatting contains inconsistent bullet margin spacing in the education section.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 bg-white shadow-sm rounded-xl flex flex-col gap-4'>
                            <div className='flex gap-2 '>
                                <span className='rounded-lg flex justify-center items-center bg-[#E2E7FF] w-7 h-7 text-[#4752C3]'>
                                    <span className="material-symbols-outlined text-[18px]!">lightbulb</span>
                                </span>
                                <span className='font-semibold text-[16px] leading-6 tracking-[-0.16px] text-[#131b2e]'>Suggestions</span>
                            </div>

                            <div className='pl-2 flex flex-col gap-2'>
                                <div className='flex gap-2'>
                                    <span className="material-symbols-outlined text-[#4752C3] text-[18px]! mt-0.5">arrow_forward</span>
                                    <p className='text-[#454653] text-[14px] leading-5.5'>
                                        Incorporate 2-3 additional domain-specific keywords into your skills summary.
                                    </p>
                                </div>
                                <div className='flex gap-2'>
                                    <span className="material-symbols-outlined text-[#4752C3] text-[18px]! mt-0.5">arrow_forward</span>
                                    <p className='text-[#454653] text-[14px] leading-5.5'>
                                        Standardize all date formats across experience entries to MM/YYYY.
                                    </p>
                                </div>
                                <div className='flex gap-2'>
                                    <span className="material-symbols-outlined text-[#4752C3] text-[18px]! mt-0.5">arrow_forward</span>
                                    <p className='text-[#454653] text-[14px] leading-5.5'>
                                        Quantify project outcomes in the open-source section with user or star metrics.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </section>

                </div>
            </main>
        </>
    )
}

export default ResumeAnalysis