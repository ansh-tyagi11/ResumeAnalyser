import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    const anatomy = [
        {
            id: "1",
            numbering: "01 / RECOGNITION",
            semantic: "Semantic Parsing",
            text: "text-[#4752C3]",
            bg: "bg-[#EFF4FF]",
            h3: "Neural Taxonomies vs. Regex Scanners",
            para: "Outdated ATS systems search for verbatim keyword clones. Modern systems like Greenhouse, Workday, and Lever utilize semantic embeddings. We align your resume's relational syntax so it indexes as a Tier-1 match without keyword stuffing.",
            logo: "account_tree",
            element: "Eliminates multi-column parsing crashes and ghost tables"
        },
        {
            id: "2",
            numbering: "02 / OUTCOMES",
            semantic: "Revenue Calibration",
            text: "text-[#A83349]",
            bg: "bg-[#FFDADC]",
            h3: "Impact Quantification Engine",
            para: "Passive duty statements ('responsible for', 'worked on') trigger recruiter fatigue in seconds. Our engine isolates your core actions and pairs them with high-fidelity quantifiable outputs: ARR expansion, latency reduction, and headcount scale.",
            logo: "query_stats",
            element: "Automatic conversion of 85+ passive duty patterns into verified ROI bullets"
        },
        {
            id: "3",
            numbering: "03 / POSITIONING",
            semantic: "Executive Tone",
            text: "text-[#815600]",
            bg: "bg-[#FFDD81]",
            h3: "Seniority Calibration & Posture",
            para: "Applying for Director or Staff-level roles with junior phrasing is the silent interview killer. We calibrate vocabulary from operational tasks to organizational orchestration, governance, and bottom-line capital efficiency.",
            logo: "military_tech",
            element: "Calibrated against 12,000+ accepted offers at FAANG & High-Growth Startups"
        },
        {
            id: "4",
            numbering: "04 / ALIGNMENT",
            semantic: "Vector Alignment",
            text: "text-[#4752C3]",
            bg: "bg-[#DDE9FF]",
            h3: "Role-to-JD Real-Time Similarity",
            para: "Every job description carries unstated priorities. We run high-dimensional cosine similarity across target requisitions to identify the exact technical competencies and strategic signals hiring committees are actively screening for.",
            logo: "radar",
            element: "Dynamic multi-job tailoring without altering historical authenticity"
        },
    ];

    const metrics = [
        {
            id: "1",
            icon: "filter_center_focus",
            text: "text-[#000569]",
            bg: "bg-[#E0E0FF]",
            vector: "VECTOR 01",
            width: "bg-[linear-gradient(90deg,#7C87FB_0%,#4752C3_100%)] w-[94%]",
            h4: "Keyword Density",
            p: "Measures high-intent contextual matches across industry taxonomies.",
            target: "Target Standard",
            percentage: "94%"
        },
        {
            id: "2",
            icon: "bolt",
            text: "text-[#400010]",
            bg: "bg-[#FFDADC]",
            width: "bg-[#FE7488] w-[98%]",
            vector: "VECTOR 02",
            h4: "Action-Verb Vigor",
            p: "Evaluates leadership intensity and eliminates weak passive phraseology.",
            target: "Executive Rank",
            percentage: "A+ Tier"
        },
        {
            id: "3",
            icon: "menu_book",
            text: "text-[#291800]",
            bg: "bg-[#FFDD81]",
            width: "bg-[#C58500] w-[88%]",
            vector: "VECTOR 03",
            h4: "Readability Index",
            p: "Calculates Flesch-Kincaid grade level tuned for VP and Director review.",
            target: "Complexity Score",
            percentage: "Grade 11"
        },
        {
            id: "4",
            icon: "security",
            text: "text-[#000569]",
            bg: "bg-[#E0E0FF]",
            width: "bg-[linear-gradient(90deg,#7C87FB_0%,#4752C3_100%)] w-[100%]",
            vector: "VECTOR 04",
            h4: "Layout Safety",
            p: "Guarantees zero column collisions, text-box drops, or font anomalies.",
            target: "Format Traps",
            percentage: "0 Detected"
        },
    ]

    return (
        <div className="w-full min-h-screen bg-[linear-gradient(180deg,#EAF2FF_0%,#FFF3F6_100%)]">
            <main className='md:px-16 px-4 sm:px-6 max-w-7xl mx-auto pt-10 sm:pt-14 pb-24 sm:pb-40 flex flex-col gap-12 sm:gap-16 md:gap-20'>

                {/* Main Heading */}

                <section className='md:mx-auto max-w-4xl pt-4 sm:pt-8 px-2 sm:px-5 pb-10 sm:pb-16 '>

                    <div className='pb-6 flex justify-center'>
                        <div className='min-h-8  rounded-full bg-white/80 backdrop-blur-md flex flex-wrap items-center justify-center px-4 py-1.5 gap-2 sm:gap-2.5 shadow-[0_4px_20px_0px_#4752C3]/12 '>
                            <span className='w-2 h-2 rounded-full bg-[#4752C3] animate-pulse' />
                            <span className='h-5 font-semibold text-[12px] sm:text-[14px] leading-5 tracking-[0.35px] text-[#4752C3] '>
                                NEXT-GEN CAREER INTELLIGENCE
                            </span>
                            <hr className='hidden sm:block h-full font-semibold leading-4 bg-[#C6C5D5] text-[#C6C5D5] w-px' />
                            <span className='hidden sm:block h-4 font-medium text-[12px] leading-4 text-[#454653]'>
                                Neural ATS Engine 4.2
                            </span>
                        </div>
                    </div>

                    <div className='pb-6 text-center'>
                        <h1 className='px-0 md:px-13.25 text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-tight sm:leading-[1.15] md:leading-15 tracking-[-1.2px] text-[#101C2C]'>
                            Your Experience Deserves More
                            Than An Algorithm's Reject Pile.
                        </h1>
                    </div>

                    <p className='px-0 md:px-33 pb-8 sm:pb-10 text-center text-[16px] sm:text-[18px] leading-6.5 sm:leading-[29.3px] text-[#454653] '>
                        Traditional ATS filters drop 75% of qualified candidates due to syntax, missing
                        signals, and unquantified impact. AI Resume Analyzer reconstructs your career
                        narrative to pass both machines and hiring executives.
                    </p>

                    <div className='pb-10 sm:pb-12 flex justify-center'>
                        <Link
                            to="/login"
                            className='px-6 sm:px-8 py-3 sm:py-3.5 bg-[linear-gradient(135deg,#8E98FF_0%,#4752C3_100%)] shadow-[0_12px_28px_rgba(71,82,195,0.28)] rounded-full text-white flex items-center justify-center gap-2.5 text-[14px] sm:text-[16px] text-center'
                        >
                            Analyze My Resume Free
                            <span className='material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform'>arrow_forward</span>
                        </Link>
                    </div>

                    <div className='flex flex-col justify-center gap-3'>
                        <div className='font-semibold flex justify-center text-[11px] sm:text-[12px] leading-4 tracking-[1.2px] text-center text-[#454653] px-2'>TRUSTED BY LEADERS LANDING OFFERS AT TIER-1 ORGANIZATIONS</div>
                        <div className='flex flex-wrap justify-center items-center gap-5 sm:gap-8 h-auto sm:h-8'>
                            <span className='font-extrabold text-[18px] sm:text-[24px] leading-8 tracking-[-1.2px] text-[#101C2C]'>
                                Google
                            </span>
                            <span className='font-bold text-[18px] sm:text-[24px] leading-8 tracking-[-0.6px] text-[#101C2C]'>
                                Stripe
                            </span>

                            <span className='font-medium text-[18px] sm:text-[24px] leading-8 tracking-[-0.6px] text-[#101C2C]'>
                                Linear
                            </span>

                            <span className='font-bold text-[18px] sm:text-[24px] leading-8 tracking-[-0.6px] text-[#101C2C]'>
                                Apple
                            </span>

                            <span className='font-semibold text-[18px] sm:text-[24px] leading-8 tracking-[-1.2px] text-[#101C2C]'>
                                OpenAI
                            </span>
                        </div>
                    </div>

                </section>

                {/* Interactive Resume Inspection Engine Showcase */}
                <section className='flex flex-col gap-6 md:p-10 p-4 sm:p-6 rounded-4xl sm:rounded-[48px] bg-white/85 overflow-hidden'>
                    <div className='pb-6 flex flex-wrap gap-3 justify-between'>
                        <span className='flex flex-wrap items-center gap-2 sm:gap-3'>
                            <span className='flex items-center gap-1.5'>
                                <span className='w-3 h-3 rounded-full bg-[#FE7488]' />
                                <span className='w-3 h-3 rounded-full bg-[#FFBA4A]' />
                                <span className='w-3 h-3 rounded-full bg-[#BEC2FF]' />
                            </span>
                            <span className='pl-1 sm:pl-2 h-5 font-semibold text-[13px] sm:text-[16px] leading-5 tracking-[0.28px] '>Live Narrative Decomposer v4.2</span>
                            <span className='px-2.5 py-0.5 rounded-full bg-[#E6EEFF] font-semibold text-[11px] sm:text-[12px] leading-4 text-[#4752C3] '>Role: Staff Cloud Architect</span>
                        </span>

                        <span className='flex flex-wrap items-center gap-3 sm:gap-4'>
                            <span className='flex items-center gap-1.5'>
                                <span className='material-symbols-outlined text-[12px] text-[#4752C3]'>verified</span>
                                <span className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#454653]'>Parsed 38 Technical Nodes</span>
                            </span>
                            <span className='px-3 py-1 bg-[#DDE9FF] font-semibold leading-4 text-[11px] sm:text-[12px] rounded-full text-[#4752C3] '>Status: Optimized (+41 pts)</span>
                        </span>
                    </div>

                    <div className='grid md:grid-cols-11 gap-4 sm:gap-6'>
                        {/* Left */}
                        <div className='row-span-1 gap-4 p-4 sm:p-6 md:col-span-5 bg-[#EEF4FF]/70 rounded-3xl sm:rounded-4xl'>
                            <div className='flex flex-wrap gap-2 justify-between items-center pb-3'>
                                <div className='flex items-center gap-2'>
                                    <span className="material-symbols-outlined text-[18px] text-[#A83349]">warning</span>
                                    <span className='font-semibold text-[13px] sm:text-[14px] leading-5 tracking-[0.28px]'>Raw Resume Input</span>
                                </div>
                                <span className='bg-[#FFDADC] rounded-full py-0.5 px-2 font-medium text-[11px] sm:text-[12px] leading-4 text-[#A83349]'>High Rejection Risk (58/100)</span>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='gap-1 p-3.5 bg-white/80 rounded-xl'>
                                    <h5 className='font-semibold text-[15px] sm:text-[16px] leading-6 text-[#101C2C] '>
                                        Lead Infrastructure Engineer • CloudCorp
                                    </h5>
                                    <span className='mr-0.5 rounded-full text-[#454653]'>
                                        •
                                    </span>
                                    <span className='bg-[#FFDADC] rounded-[18px] text-[15px] sm:text-[16px] leading-6.5 text-[#881A33] line-through mr-1'>
                                        Responsible for maintaining servers
                                    </span>
                                    <span className='text-[15px] sm:text-[16px] leading-6.5 text-[#454653]'>
                                        and fixing runtime issues across staging and production.
                                    </span>
                                </div>

                                <div className='gap-1 p-3.5 bg-white/80 rounded-xl'>
                                    <span className='mr-0.5 rounded-2xl text-[#454653]'>
                                        •
                                    </span>
                                    <span className='text-[15px] sm:text-[16px] leading-6.5 text-[#881A33] line-through bg-[#FFDADC] rounded-full mr-1'>
                                        Handled customer feedback
                                    </span>
                                    <span className='text-[15px] sm:text-[16px] leading-6.5 text-[#454653]'>
                                        on system slowdowns and helped optimize databases when required.
                                    </span>
                                </div>

                                <div className='gap-1 p-3.5 bg-white/80 rounded-xl'>
                                    <span className='mr-0.5 rounded-full text-[#454653]'>•</span>
                                    <span className='text-[15px] sm:text-[16px] leading-6.5 text-[#881A33] line-through bg-[#FFDADC] rounded-full mr-1'>
                                        Assisted team members
                                    </span>
                                    <span className='text-[15px] sm:text-[16px] leading-6.5 text-[#454653]'>
                                        with onboarding and
                                        participated in weekly roadmap planning sessions.
                                    </span>
                                </div>
                            </div>

                            <div className='pt-3 flex flex-wrap gap-2 justify-between items-center'>
                                <span className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#454653]'>
                                    Detected 3 Passive Verb Traps
                                </span>
                                <span className='font-medium text-[11px] sm:text-[12px] leading-4 text-[#A83349]'>
                                    0 Quantified Revenue/Scale Metrics
                                </span>
                            </div>
                        </div>

                        {/* Mid */}
                        <div className="md:col-span-1 flex md:flex-col items-center justify-center py-2 md:py-0">
                            <div
                                className="w-12 h-12 rounded-full bg-[linear-gradient(135deg,#7C87FB_0%,#4752C3_100%)] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(71,82,195,0.3)] animate-pulse rotate-90 md:rotate-0">
                                <span className="material-symbols-outlined text-[24px]">troubleshoot</span>
                            </div>
                            <span
                                className="text-[12px] text-[#4752C3] font-bold mt-2 text-center hidden md:block leading-tight">AI
                                Semantic Synthesis</span>
                        </div>

                        {/* Right */}
                        <div className='row-span-1 gap-4 p-4 sm:p-6 md:col-span-5 bg-[#EEF4FF]/70 rounded-3xl sm:rounded-4xl'>
                            <div className='flex flex-wrap gap-2 justify-between pb-3'>
                                <div className='flex gap-2 items-center'>
                                    <span className='material-symbols-outlined text-[#4752C3] text-[18px]'>verified</span>
                                    <span className='font-semibold text-[13px] sm:text-[14px] leading-5 tracking-[0.28px]'>Re-Engineered Executive Output</span>
                                </div>
                                <span className='bg-[#E0E0FF] rounded-full px-2 py-0.5 font-bold text-[11px] sm:text-[12px] leading-4 text-[#4752C3]'>
                                    ATS Score: 99 / Top 1% Tier
                                </span>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='p-3.5 bg-white gap-1 rounded-xl'>
                                    <h3 className='font-semibold text-[15px] sm:text-[16px] leading-6 text-[#101C2C]'>Principal Cloud Architect • CloudCorp</h3>
                                    <span className='mr-0.5 rounded-2xl text-[#454653]'>•</span>
                                    <span className='rounded-2xl bg-[#E0E0FF]/80 font-medium text-[15px] sm:text-[16px] leading-6.5 text-[#000569]'> Architected auto-scaling AWS Kubernetes infrastructure </span>
                                    <span className='text-[#101C2C] text-[15px] sm:text-[16px] leading-6.5'>
                                        serving
                                        <span className='font-bold text-[#4752c3] '> 2.4M requests/day </span>
                                        at
                                        <span className='font-bold text-[#4752c3]'> 99.99% </span>
                                        uptime, shrinking p99 latency by 42%.
                                    </span>
                                </div>

                                <div className='p-3.5 bg-white gap-1 rounded-xl'>
                                    <span className='mr-0.5 rounded-2xl text-[#454653]'>
                                        •
                                    </span>
                                    <span className='rounded-2xl bg-[#E0E0FF]/80 font-medium text-[15px] sm:text-[16px] leading-6.5 text-[#000569]'> Restructured distributed Redis & PostgreSQL tiers </span>
                                    <span className='text-[#101C2C] text-[15px] sm:text-[16px] leading-6.5'> , reducing recurring cloud compute expenditure by
                                        <span className='font-bold text-[#4752c3] '> $310,000 ARR </span>
                                        while raising retention by 28%. </span>
                                </div>

                                <div className='p-3.5 bg-white gap-1 rounded-xl'>
                                    <span className='mr-0.5 rounded-2xl text-[#454653]'>
                                        •
                                    </span>
                                    <span className='rounded-2xl bg-[#E0E0FF]/80 font-medium text-[15px] sm:text-[16px] leading-6.5 text-[#000569]'> Spearheaded platform governance for 14 staff engineers </span>
                                    <span className='text-[#101C2C] text-[15px] sm:text-[16px] leading-6.5'> , cutting PR cycle times from 4.2 days to 38
                                        minutes with zero degradation.</span>
                                </div>
                            </div>

                            <div className='pt-3 flex flex-wrap gap-2 justify-between'>
                                <span className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#4752C3]'>
                                    100% Active Leadership Verbs
                                </span>
                                <span className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#4752C3]'>
                                    3 Concrete ROI Anchors
                                </span>

                            </div>
                        </div>
                    </div>

                    <div className='pt-4 sm:pt-6 flex gap-4 flex-col md:flex-row'>
                        <span className='p-4 w-full h-auto sm:h-29 flex justify-between items-center bg-[#EFF4FF]/60 rounded-2xl'>
                            <span className='flex flex-col gap-0.5'>
                                <div className='font-semibold text-[11px] sm:text-[12px] leading-4 tracking-[0.6px] text-[#454653]'>EXECUTIVE DELTA</div>
                                <div className='flex items-baseline flex-wrap gap-1'>
                                    <h2 className='font-bold text-[24px] sm:text-[30px] leading-9 sm:leading-9.5 tracking-[-0.3px] text-[#101C2C] '> 58 → 99</h2>
                                    <span className='px-1.5 rounded-2xl bg-[#E0E0FF]/60 font-bold text-[11px] sm:text-[12px] leading-4 text-[#4752C3]'>+41 pts</span>
                                </div>

                                <div className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#454653]'>Elevated to Top Decile</div>
                            </span>
                            <div className='w-12 h-12 flex items-center justify-center shrink-0'>
                                <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-[#E0E0FF]"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                                    <path className="text-[#4752C3]"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none" stroke="currentColor" strokeDasharray="99, 100"
                                        strokeLinecap="round" strokeWidth="3.5"></path>
                                </svg>
                            </div>
                        </span>

                        <span className='p-4 w-full h-auto sm:h-29 flex justify-between items-center bg-[#EFF4FF]/60 rounded-2xl'>
                            <span className='flex flex-col gap-0.5'>
                                <div className='font-semibold text-[11px] sm:text-[12px] leading-4 tracking-[0.6px] text-[#454653]'>ATS INGESTION SAFETY</div>
                                <div className='flex items-baseline flex-wrap gap-1'>
                                    <h2 className='font-bold text-[24px] sm:text-[30px] leading-9 sm:leading-9.5 tracking-[-0.3px] text-[#101C2C] '>98.4%</h2>
                                    <span className='px-1.5 font-bold text-[11px] sm:text-[12px] leading-4 text-[#4752C3]'>Pass Rate</span>
                                </div>
                                <div className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#454653]'>Validated: Taleo, Greenhouse, Lever</div>
                            </span>
                            <span className='w-10 h-10 rounded-full bg-[#E0E0FF] text-[#000569] flex items-center justify-center shrink-0'>
                                <span className="material-symbols-outlined text-[20px]">cloud_done</span>
                            </span>
                        </span>

                        <span className='w-full h-auto sm:h-29 px-4 py-4 sm:py-5.25 flex items-center justify-between bg-[#EFF4FF]/60 rounded-2xl'>
                            <span className='flex flex-col gap-2.25 pt-1.25 '>
                                <div className='font-semibold leading-4 tracking-[0.6px] text-[#454653] text-[11px] sm:text-[12px]'>INJECTED SIGNALS</div>
                                <span className='flex flex-wrap gap-1'>
                                    <span className='px-2 py-0.5 rounded-full bg-white font-medium text-[11px] sm:text-[12px] leading-4 text-[#4752C3]'>Distributed Systems</span>
                                    <span className='px-2 py-0.5 rounded-full bg-white font-medium text-[11px] sm:text-[12px] leading-4 text-[#4752C3]'>Terraform</span>
                                    <span className='px-2 py-0.5 rounded-full bg-white font-medium text-[11px] sm:text-[12px] leading-4 text-[#4752C3]'>P&L Metrics</span>
                                </span>

                            </span>

                            <span className='w-10 h-10 rounded-full bg-[#DDE9FF] text-[#4752C3] flex items-center justify-center shrink-0'>
                                <span className="material-symbols-outlined text-[20px]">auto_fix_high</span>
                            </span>
                        </span>
                    </div>
                </section>

                {/* Editorial Narrative Section: The Anatomy of a 1% Resume */}
                <section className='flex flex-col gap-8 sm:gap-12'>
                    <div className='flex flex-col md:flex-row md:h-36 md:items-baseline gap-4 md:gap-0'>
                        <span className='self-baseline flex flex-col gap-2 sm:gap-2.25 pt-0.5 md:pl-10 pb-[0.5px]'>
                            <span className='font-semibold text-[13px] sm:text-[14px] leading-5 tracking-[0.7px] text-[#4752C3]' >
                                STRATEGIC METHODOLOGY
                            </span>
                            <h2 className='font-bold text-[30px] sm:text-[38px] md:text-[48px] leading-tight md:leading-14 tracking-[-1.2px] text-[#101C2C]'>
                                The Anatomy of a 1% Executive Resume
                            </h2>
                        </span>
                        <span className='self-baseline md:h-12 text-[15px] sm:text-[16px] leading-6 text-[#454653]'>
                            Most candidates optimize for humans or optimize for bots. Our neural decomposition pipeline creates dual resonance.
                        </span>
                    </div>

                    <div className='grid md:grid-cols-2 gap-4'>
                        {
                            anatomy.map((anatom, id) => (
                                <div key={id} className='rounded-3xl sm:rounded-4xl p-6 sm:p-8 bg-white/85 flex flex-col justify-between'>
                                    <div className="pb-3 flex flex-col gap-3">
                                        <div className='h-auto sm:h-6 flex flex-wrap gap-2 items-center justify-between'>
                                            <span className={`font-bold text-[13px] sm:text-[14px] leading-5 tracking-[1.4px] ${anatom.text} `}>{anatom.numbering}</span>
                                            <span className={`px-3 py-1 rounded-full text-[11px] sm:text-[12px] leading-4 font-semibold ${anatom.text} ${anatom.bg}`}>{anatom.semantic}</span>
                                        </div>
                                        <h3 className="pt-2 sm:pt-3 font-bold text-[22px] sm:text-[26px] md:text-[30px] leading-tight md:leading-9.5 text-[#101C2C] tracking-[-0.3px] ">{anatom.h3}</h3>
                                        <p className="text-[15px] sm:text-[16px] leading-6 sm:leading-6.5 text-[#454653] ">
                                            {anatom.para}
                                        </p>
                                    </div>
                                    <div className="p-4 flex gap-3 items-center h-auto sm:h-12 bg-[#EFF4FF] rounded-xl">
                                        <span className={`material-symbols-outlined text-[20px] shrink-0 ${anatom.text}`}>{anatom.logo}</span>
                                        <span className="font-medium text-[11px] sm:text-[12px] leading-4 ">{anatom.element}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

                {/* Comparative Rewrite Showcase (Interactive Style Switcher) */}
                <section className='p-5 sm:p-8 md:p-12 bg-white/90 rounded-4xl sm:rounded-[48px] backdrop-blur-2xl shadow-[0px_20px_50px_0px_#1D2939]/5 flex flex-col gap-8 sm:gap-10'>

                    <div className='pt-0.5 flex flex-col gap-2.5'>
                        <div className='font-semibold leading-5 text-[13px] sm:text-[14px] tracking-[0.7px] text-[#4752C3] text-center'>CONCRETE TRANSFORMATIONS</div>
                        <h2 className='font-bold text-[28px] sm:text-[36px] md:text-[48px] leading-tight md:leading-14 tracking-[-1.2px] text-center text-[#101C2C]'>Before & After AI Decomposition</h2>
                        <p className='max-w-2xl pt-0.5 text-[15px] sm:text-[16px] leading-6 text-[#454653] text-center mx-auto'>See the direct difference between bullets that get automatically archived and bullets that schedule immediate recruiter screens.</p>
                    </div>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='p-5 sm:p-6 flex justify-between flex-col rounded-3xl sm:rounded-4xl bg-[#EFF4FF]/60'>
                            <div className='flex flex-col gap-4'>
                                <div className='pb-3 flex flex-wrap gap-2 justify-between items-center'>
                                    <span className='font-bold text-[13px] sm:text-[14px] leading-5 tracking-[0.28px] text-[#101C2C] '>Product Leadership</span>
                                    <span className='bg-[#FFDADC] rounded-full px-2.5 py-0.5 font-semibold text-[11px] sm:text-[12px] leading-4 text-[#400010] '>Filtered Pattern</span>
                                </div>
                                <div className='flex flex-col gap-1 p-4 bg-white/90 rounded-xl'>
                                    <div className='text-[#A83349] font-medium leading-6 text-[15px] sm:text-[16px]'>
                                        x Before: Weak Operational Record
                                    </div>
                                    <p className='text-[15px] sm:text-[16px] leading-6 text-[#454653]'>
                                        "Managed the checkout feature team, worked with designers
                                        on UX improvements, and helped prioritize sprint backlogs in
                                        Jira."
                                    </p>
                                </div>
                                <div className='p-4 gap-1 bg-white flex flex-col rounded-xl'>
                                    <div className='text-[#4752C3] font-bold leading-6 text-[15px] sm:text-[16px]'>
                                        ✓ After: Executive Level Impact
                                    </div>
                                    <p className='text-[15px] sm:text-[16px] font-medium leading-6 text-[#101C2C]'>
                                        "Spearheaded redesign of cross-border frictionless checkout engine across 18 countries; cut drop-off by 31%
                                        and unlocked $4.8M incremental GMV in Q3."
                                    </p>
                                </div>
                            </div>
                            <div className='mt-4 pt-3 flex flex-wrap gap-2 justify-between items-center '>
                                <span className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#454653]'>ATS Relevancy: +52%</span>
                                <span className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#4752C3]'>Tier 1 Recruiter Signal</span>
                            </div>
                        </div>
                        <div className='p-5 sm:p-6 flex justify-between flex-col rounded-3xl sm:rounded-4xl bg-[#EFF4FF]/60'>
                            <div className='flex flex-col gap-4'>
                                <div className='pb-3 flex flex-wrap gap-2 justify-between items-center'>
                                    <span className='font-bold tracking-[0.28px] text-[13px] sm:text-[14px] leading-5 text-[#101C2C]'>Staff Software Engineering</span>
                                    <span className='font-semibold bg-[#FFDADC] rounded-full text-[11px] sm:text-[12px] text-[#400010] leading-4 px-2.5 py-0.5'>Filtered Pattern</span>
                                </div>
                                <div className='p-4 gap-1 flex flex-col bg-white/90 rounded-xl'>
                                    <div className='font-medium text-[15px] sm:text-[16px] leading-6 text-[#A83349]'>
                                        x Before: Generic Task Listing
                                    </div>
                                    <p className='text-[15px] sm:text-[16px] leading-6 text-[#454653]'>
                                        "Built microservices with Go and Node.js, maintained unit tests, and helped migrate legacy backend APIs to AWS."
                                    </p>
                                </div>
                                <div className='p-4 gap-1 flex flex-col bg-white rounded-xl'>
                                    <div className='font-bold text-[15px] sm:text-[16px] leading-6 text-[#4752C3]'>
                                        After: Architectural Ownership
                                    </div>
                                    <p className='text-[15px] sm:text-[16px] font-medium leading-6 text-[#101C2C]'>
                                        "Engineered high-throughput Go event bus orchestrating 12M daily transactions; lowered infrastructure costs by 34% while maintaining 99.995% SLA compliance."
                                    </p>
                                </div>
                            </div>
                            <div className='mt-4 pt-3 flex flex-wrap gap-2 justify-between items-center '>
                                <span className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#454653]'>ATS Relevancy: +67%</span>
                                <span className='font-medium text-[11px] sm:text-[12px] leading-4 text-[#4752C3]'>System Architect Verified</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Live Resume Benchmark Metrics Matrix */}
                <section className='flex flex-col gap-8 sm:gap-12'>
                    <div className='flex flex-col gap-2 pt-0.5'>
                        <div className='font-semibold text-[13px] sm:text-[14px] leading-5 tracking-[0.7px] text-[#4752C3] text-center'>GRANULAR PRECISION</div>
                        <h2 className='pt-0.5 max-w-2xl font-bold text-[28px] sm:text-[36px] md:text-[48px] leading-tight md:leading-14 tracking-[-1.2px] text-[#101C2C] mx-auto text-center'>Evaluation Vectors Analyzed in Real Time</h2>
                        <p className='max-w-148.75 text-[15px] sm:text-[16px] leading-6 text-[#454653] text-center mx-auto'>
                            Every resume submitted is verified against 4 key dimensions before reaching human recruiters.
                        </p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6'>
                        {
                            metrics.map((matrix, id) => (
                                <div key={id} className='p-5 sm:p-6 rounded-3xl sm:rounded-4xl bg-white/80 flex flex-col justify-between backdrop-blur-xl shadow-[0px_12px_38px_0px_#1D2939]/5'>
                                    <div>
                                        <span className={`${matrix.bg} w-10 h-10 mb-4 rounded-full flex items-center justify-center`}>
                                            <span className={`material-symbols-outlined text-[20px] ${matrix.text}`}>{matrix.icon}</span>
                                        </span>
                                        <div className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#454653]'>{matrix.vector}</div>
                                        <h4 className='mt-1 mb-2 font-bold text-[20px] sm:text-[24px] leading-7 sm:leading-8 text-[#101C2C]'>{matrix.h4}</h4>
                                        <p className='text-[#454653] leading-6 text-[15px] sm:text-[16px] '>
                                            {matrix.p}
                                        </p>
                                    </div>
                                    <div className='pt-6'>
                                        <div className='pt-4 gap-2 flex flex-wrap justify-between items-center'>
                                            <span className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#101C2C]'>{matrix.target}</span>
                                            <span className='text-[13px] sm:text-[14px]'>{matrix.percentage}</span>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-[#E6EEFF] overflow-hidden">
                                            <div className={`h-full rounded-full ${matrix.width}`} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

                {/* Final High-Impact Conversion Card */}
                <section className='px-5 sm:px-12 md:px-24 lg:px-48 py-10 sm:py-16 rounded-4xl sm:rounded-[48px] bg-white/90 backdrop-blur-2xl shadow-[0px_24px_64px_0px_#4752C3]/10'>
                    <div className='flex flex-col '>
                        <div className='mb-6 rounded-full bg-[#DDE9FF] flex items-center px-4 py-1.5 gap-2 mx-auto text-[#4752C3] '>
                            <span className='material-symbols-outlined text-[16px]'>speed</span>
                            <span className='font-semibold leading-4 text-[11px] sm:text-[12px]'>Takes Under 45 Seconds</span>
                        </div>
                        <h2 className='pb-4 font-bold text-[28px] sm:text-[36px] md:text-[48px] leading-tight md:leading-14 tracking-[-1.2px] text-[#101C2C] text-center'>Stop Guessing Why You Never Hear Back.</h2>
                        <p className='px-0 sm:px-8 md:px-27.5 pb-8 text-center text-[16px] sm:text-[18px] leading-6.5 sm:leading-[29.3px] text-[#454653] '>
                            Upload your existing resume in PDF or DOCX format and receive a granular, ATS-verified breakdown with line-by-line executive rewrites immediately.
                        </p>
                        <label
                            htmlFor="uploadFile"
                            className="group w-full max-w-lg mx-auto mb-8 gap-3 flex flex-col justify-center rounded-3xl sm:rounded-4xl bg-[#EFF4FF]/80 h-auto sm:h-36.5 p-6 cursor-pointer">
                            <div className="flex items-center h-12 w-12 mx-auto justify-center bg-white rounded-full">
                                <span className="material-symbols-outlined text-[#4752C3] text-[24px]">
                                    cloud_upload
                                </span>
                            </div>

                            <div className="flex flex-col gap-1 items-center justify-center">
                                <div className="font-bold text-[13px] sm:text-[14px] leading-5 tracking-[0.28px] text-[#101C2C] text-center">
                                    Click to upload your resume or drag & drop
                                </div>

                                <div className="font-semibold text-[11px] sm:text-[12px] leading-4 text-[#454653]">
                                    PDF, DOCX, or RTF up to 10MB
                                </div>
                            </div>

                            <input
                                type="file"
                                name="uploadFile"
                                id="uploadFile"
                                className="hidden"
                                accept=".pdf,.docx,.rtf"
                            />
                        </label>
                        <Link
                            to="/login"
                            className='rounded-full px-7 sm:px-9 py-3.5 sm:py-4 bg-linear-to-r from-[#8E98FF] to-[#4752C3] mx-auto shadow-[0px_12px_28px_0px_#4752C3]/30 gap-2 text-white flex items-center cursor-pointer text-[14px] sm:text-[16px]'
                        >
                            Analyze My Resume Free
                            <span className='material-symbols-outlined'>arrow_forward</span>
                        </Link>
                        <div className='pt-6 flex flex-wrap gap-3 sm:gap-4 items-center justify-center'>
                            <span className='flex items-center gap-1.5'>
                                <span className='material-symbols-outlined text-[12px] text-[#4752C3]'>lock</span>
                                <span className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#454653]'>
                                    100% Confidential & Encrypted
                                </span>
                            </span>
                            <span className='hidden sm:inline text-[#454653]'>•</span>
                            <span className='flex items-center gap-1.5'>
                                <span className='material-symbols-outlined text-[12px] text-[#4752C3]'>credit_card</span>
                                <span className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#454653]'>
                                    No credit card required
                                </span>
                            </span>
                            <span className='hidden sm:inline text-[#454653]'>•</span>
                            <span className='flex items-center gap-1.5'>
                                <span className='material-symbols-outlined text-[12px] text-[#4752C3]'>check_circle</span>
                                <span className='font-semibold text-[11px] sm:text-[12px] leading-4 text-[#454653]'>
                                    Instant ATS diagnosis
                                </span>
                            </span>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Home