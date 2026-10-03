import React from 'react';

const rows = [
    {
        id: 1,
        name: 'Software_Engineer_v2.pdf',
        meta: '2.4 MB • ATS Ready',
        type: 'Resume Analysis',
        score: '82',
        icon: 'verified',
        date: 'Aug 18, 2023',
    },
    {
        id: 2,
        name: 'Product_Lead_Resume.pdf',
        meta: '1.8 MB • Executive',
        type: 'Job Match',
        score: '78%',
        icon: 'donut_large',
        date: 'Aug 18, 2023',
    },
    {
        id: 3,
        name: 'Tech_Resume_Final.pdf',
        meta: '3.1 MB • Full Stack',
        type: 'Resume Analysis',
        score: '85',
        icon: 'verified',
        date: 'Aug 18, 2023',
    },
];

const History = () => {
    return (
        <main className="box-border min-h-screen w-full min-w-0 overflow-x-hidden bg-radial from-[#FAF8FF] to-[#E1E0FF]/30 px-4 pb-4 pt-[calc(10vh+1.5rem)] pl-[calc(4rem+1rem)] sm:px-8 sm:pb-8 sm:pl-[calc(4rem+2rem)] lg:pl-[calc(20vw+4rem)] lg:pr-16">
            <div className="flex flex-col pt-4 sm:px-5 sm:pt-8 lg:px-10">

                <section className="flex flex-col justify-between gap-6 pb-8 sm:pb-12 lg:flex-row lg:items-end">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold leading-9 tracking-[-0.75px] text-[#1A1B20] sm:text-[30px]">
                            History
                        </h1>
                        <p className="text-base leading-6 text-[#454653]">View your previous analyses.</p>
                    </div>

                    <label className="flex w-full items-center gap-1 rounded-xl bg-white pl-2 shadow-sm lg:w-80">
                        <span className="material-symbols-outlined text-[#454653]">search</span>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            className="w-full py-3.5 pr-4 text-base text-[#454653] placeholder:text-base focus:outline-none"
                            placeholder="Search history..."
                        />
                    </label>
                </section>

                <section className="custom-scrollbar overflow-x-auto rounded-xl bg-white shadow-sm">
                    <table className="w-full min-w-215 table-auto text-left">
                        <thead>
                            <tr className="border-b border-[#E3E1EB] bg-[#f4f3fa] text-[13px] font-semibold uppercase leading-5 tracking-[0.38px] text-[#454653] sm:text-[15px]">
                                <th className="whitespace-nowrap px-6 py-4">Resume</th>
                                <th className="whitespace-nowrap px-6 py-4">Type</th>
                                <th className="whitespace-nowrap px-6 py-4">Score</th>
                                <th className="whitespace-nowrap px-6 py-4">Date</th>
                                <th className="whitespace-nowrap px-6 py-4">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-[#E3E1EB]">
                            {rows.map((row) => (
                                <tr key={row.id}>
                                    {/* Resume */}
                                    <td className="px-6 py-4 align-middle">
                                        <div className="flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E1E0FF] text-[#4648d4]">
                                                <span className="material-symbols-outlined">picture_as_pdf</span>
                                            </span>
                                            <div className="flex min-w-0 flex-col">
                                                <span className="whitespace-nowrap text-base font-semibold leading-6 text-[#1A1B20]">
                                                    {row.name}
                                                </span>
                                                <span className="whitespace-nowrap text-[11px] font-semibold leading-4 tracking-[0.33px] text-[#454653]">
                                                    {row.meta}
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Type */}
                                    <td className="px-6 py-4 align-middle">
                                        <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#EFEDF4] px-3 py-1.5 text-sm text-[#454653]">
                                            <span className="h-2 w-2 rounded-full bg-[#4752c3]" />
                                            {row.type}
                                        </span>
                                    </td>

                                    {/* Score and verified icon */}
                                    <td className="px-6 py-4 align-middle">
                                        <div className="flex items-center gap-1.5 whitespace-nowrap">
                                            <span className="flex items-baseline">
                                                <span className="text-[22px] font-bold leading-7 text-[#4752c3]">
                                                    {row.score}
                                                </span>
                                                {!String(row.score).includes('%') && (<span className="text-sm leading-5 tracking-[0.14px] text-[#454653]">
                                                    /100
                                                </span>)}
                                            </span>
                                            <span className="material-symbols-outlined text-[16px]! leading-none text-[#4752c3]">
                                                {row.icon}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Date */}
                                    <td className="whitespace-nowrap px-6 py-4 align-middle text-[#454653]">
                                        {row.date}
                                    </td>

                                    {/* Action */}
                                    <td className="px-6 py-4 align-middle">
                                        <button className="flex items-center gap-1 whitespace-nowrap rounded-lg bg-[#E1E0FF] px-5 py-2 text-[#07006c] transition-colors hover:bg-[#d3d1ff] hover:cursor-pointer">
                                            <span className="text-[15px] font-semibold leading-5 tracking-[0.15px]">View</span>
                                            <span className="material-symbols-outlined text-[20px]!">arrow_forward</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    );
};

export default History;