import React from 'react'

const stats = [
    { label: 'Overall Resume Score', icon: 'grade', value: '82', suffix: '/100' },
    { label: 'ATS Score', icon: 'fact_check', value: '88', suffix: '/100' },
    { label: 'Total Resumes', icon: 'description', value: '3' },
    { label: 'Total Analyses', icon: 'troubleshoot', value: '8' },
]

const resumes = [
    { name: 'Software_Engineer_Resume_v2.pdf', date: 'Aug 18, 2023', score: 82 },
    { name: 'Product_Manager_Resume_Final.pdf', date: 'Oct 12, 2023', score: 78 },
    { name: 'Senior_Frontend_Developer.pdf', date: 'Oct 08, 2023', score: 88 },
]

const activity = [
    { text: 'Resume Analysis completed for', file: 'Software_Engineer_Resume_v2.pdf', time: '2 hours ago' },
    { text: 'Job Match completed for', file: 'Product_Manager.pdf', time: 'Yesterday' },
    { text: 'Resume Analysis completed for', file: 'Senior_Frontend_Developer.pdf', time: '3 days ago' },
]

const Dashboard = () => {
    return (
        <main className='box-border min-h-screen w-full min-w-0 overflow-x-hidden bg-radial from-[#FAF8FF] to-[#E1E0FF]/30 px-4 pb-4 pt-[calc(10vh+1.5rem)] pl-[calc(4rem+1rem)] sm:px-8 sm:pb-8 sm:pl-[calc(4rem+2rem)] lg:pl-[calc(20vw+4rem)] lg:pr-16'>
            <div className='flex flex-col gap-6 pb-6 sm:gap-9'>
                <section className='flex flex-col gap-1'>
                    <h1 className='text-2xl font-bold leading-8 tracking-[-0.7px] text-[#1A1B20] sm:text-[28px] sm:leading-9'>Dashboard</h1>
                    <p className='text-[15px] leading-6 text-[#454653] sm:text-[16px]'>Manage and improve your resume.</p>
                </section>

                <section className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4'>
                    {stats.map((s) => (
                        <div key={s.label} className='flex min-w-0 flex-col justify-between gap-4 rounded-xl bg-white p-4 shadow-sm sm:p-6'>
                            <div className='flex items-start justify-between gap-3'>
                                <span className='text-[16px] font-medium leading-6 text-[#454653] sm:text-[18px]'>{s.label}</span>
                                <span className='material-symbols-outlined shrink-0 rounded-lg bg-[#EFEDF4] p-1 text-[#4752C3]'>{s.icon}</span>
                            </div>
                            <div className='flex items-baseline gap-1'>
                                <span className='text-[32px] font-bold leading-10 tracking-[-0.75px] text-[#1A1B20] sm:text-[36px] sm:leading-11'>{s.value}</span>
                                {s.suffix && <span className='text-[18px] font-medium text-[#454653] sm:text-[20px]'>{s.suffix}</span>}
                            </div>
                        </div>
                    ))}
                </section>

                <section className='flex w-full flex-col gap-4'>
                    <h2 className='text-xl font-semibold leading-7 text-[#1A1B20] sm:text-[22px] sm:leading-7.5'>Recent Resumes</h2>
                    <div className='flex flex-col gap-2'>
                        {resumes.map((r) => (
                            <div key={r.name} className='flex w-full flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6'>
                                <div className='flex min-w-0 items-center gap-4'>
                                    <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FAF3FA] text-center text-[#4752C3]'>
                                        <span className='material-symbols-outlined'>article</span>
                                    </span>
                                    <div className='min-w-0'>
                                        <div className='break-words text-[16px] font-semibold leading-6 text-[#1A1B20] sm:truncate'>{r.name}</div>
                                        <div className='text-[14px] leading-5 tracking-[0.14px] text-[#454653]'>Analyzed {r.date}</div>
                                    </div>
                                </div>
                                <div className='flex shrink-0 items-center justify-between gap-4 sm:justify-end'>
                                    <span className='flex h-8 items-center rounded-full bg-[#E1E0FF] px-4 py-1.5 text-[15px] font-bold leading-5 tracking-[0.15px] text-[#07006C]'>{r.score}/100</span>
                                    <button className='h-10 whitespace-nowrap rounded-lg bg-[#7C87FB] px-4 py-2.5 text-[15px] font-medium leading-5 tracking-[0.15px] text-[#040F90] shadow-sm sm:px-6'>
                                        View Analysis
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold leading-7 text-[#1A1B20] sm:text-[22px] sm:leading-7.5'>Recent Activity</h2>
                    <div className='overflow-hidden rounded-xl bg-white shadow-sm'>
                        {activity.map((a, i) => (
                            <div
                                key={i}
                                className={`flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-6 ${i === 1 ? 'bg-[#FAF3FA]' : ''}`}
                            >
                                <div className='flex min-w-0 items-start gap-3 sm:items-center sm:gap-4'>
                                    <span className='mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4752C3] sm:mt-0' />
                                    <p className='min-w-0 wrap-break-word text-[15px] leading-6 text-[#1A1B20] sm:text-[16px]'>
                                        {a.text} <span className='font-semibold'>{a.file}</span>
                                    </p>
                                </div>
                                <span className='pl-[1.375rem] text-[14px] leading-6 text-[#454653] sm:shrink-0 sm:pl-0 sm:text-[16px]'>{a.time}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Dashboard