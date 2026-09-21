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
            bg: " bg-[#FFDD81]",
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
            para: "Every job description carries unstated priorities. We run high- dimensional cosine similarity across target requisitions to identify the exact technical competencies and strategic signals hiring committees are actively screening for.",
            logo: "radar",
            element: "Dynamic multi-job tailoring without altering historical authenticity"
        },
    ];

    const metrics = [
        {
            id: "1",
            icon: "HI",
            vector: "VECTOR 01",
            h4: "Keyword Density",
            p: "Measures high-intent contextual matches across industry taxonomies.",
            target: "Target Standard",
            percentage: "94%"
        },
        {
            id: "2",
            icon: "HI",
            vector: "VECTOR 02",
            h4: "Action-Verb Vigor",
            p: "Evaluates leadership intensity and eliminates weak passive phraseology.",
            target: "Executive Rank",
            percentage: "A+ Tier"
        },
        {
            id: "3",
            icon: "HI",
            vector: "VECTOR 03",
            h4: "Readability Index",
            p: "Calculates Flesch-Kincaid grade level tuned for VP and Director review.",
            target: "Complexity Score",
            percentage: "Grade 11"
        },
        {
            id: "4",
            icon: "HI",
            vector: "VECTOR 04",
            h4: "Layout Safety",
            p: "Guarantees zero column collisions, text-box drops, or font anomalies.",
            target: "Format Traps",
            percentage: "0 Detected"
        },
    ]

    return (
        <>
            <main className='px-16 max-w-7xl mx-auto pt-14 pb-40 flex flex-col gap-20 bg-[linear-gradient(180deg,#EAF2FF_0%,#FFF3F6_100%)] '>

                {/* Main Heading */}

                <section className='mx-auto'>

                    <div className='pb-6 flex justify-center'>
                        <div className='h-8 border rounded-full bg-white/80 backdrop-blur-md flex items-center px-4 py-1.5 gap-2.5 shadow-[0_4px_20px_0px_#4752C3/12] '>
                            <span className='w-2 h-2 rounded-full bg-[#4752C3] animate-pulse' />
                            <span className='h-5 font-semibold text-[14px] leading-5 tracking-[0.35px] text-[#4752C3] '>
                                NEXT-GEN CAREER INTELLIGENCE
                            </span>
                            <hr className='h-full font-semibold leading-4 bg-[#C6C5D5] text-[#C6C5D5] w-px' />
                            <span className='h-4 font-medium text-[12px] leading-4 text-[#454653]'>
                                Neural ATS Engine 4.2
                            </span>
                        </div>
                    </div>

                    <div className='pb-6 text-center'>
                        <h1 className='px-13.25 text-[48px] font-bold leading-15 tracking-[-1.2px] text-[#101C2C]'>
                            Your Experience Deserves More
                            Than An Algorithm's Reject Pile.
                        </h1>
                    </div>

                    <p className='px-33 pb-10 text-center text-[18px] leading-[29.3px] text-[#454653] '>
                        Traditional ATS filters drop 75% of qualified candidates due to syntax, missing
                        signals, and unquantified impact. AI Resume Analyzer reconstructs your career
                        narrative to pass both machines and hiring executives.
                    </p>

                    <div className='pb-12 flex justify-center'>
                        <button className='px-8 py-3.5 bg-[linear-gradient(135deg,#8E98FF_0%,#4752C3_100%)] shadow-[0_12px_28px_rgba(71,82,195,0.28)] rounded-full text-white flex items-center justify-center gap-2.5 '>
                            <Link>Analyze My Resume Free</Link>
                            <span className='material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform'>arrow_forward</span>
                        </button>
                    </div>



                    <div className='flex flex-col justify-center gap-3'>
                        <div className='font-semibold flex justify-center text-[12px] leading-4 tracking-[1.2px] text-[#454653]'>TRUSTED BY LEADERS LANDING OFFERS AT TIER-1 ORGANIZATIONS</div>
                        <div className='flex justify-center items-center gap-8 h-8'>
                            <span className='font-extrabold text-[24px] leading-8 tracking-[-1.2px] text-[#101C2C]'>
                                Google
                            </span>
                            <span className='font-bold text-[24px] leading-8 tracking-[-0.6px] text-[#101C2C]'>
                                Stripe
                            </span>

                            <span className='font-medium text-[24px] leading-8 tracking-[-0.6px] text-[#101C2C]'>
                                Linear
                            </span>

                            <span className='font-bold text-[24px] leading-8 tracking-[-0.6px] text-[#101C2C]'>
                                Apple
                            </span>

                            <span className='font-semibold text-[24px] leading-8 tracking-[-1.2px] text-[#101C2C]'>
                                OpenAI
                            </span>
                        </div>
                    </div>

                </section>

                {/* Interactive Resume Inspection Engine Showcase */}
                <section className='border flex flex-col gap-6 p-10 rounded-[48px] bg-white/85'>
                    <div className='pb-6 flex justify-between'>
                        <span className='flex items-center gap-3'>
                            <span className='flex items-center gap-1.5'>
                                <span className='w-3 h-3 rounded-full bg-[#FE7488]' />
                                <span className='w-3 h-3 rounded-full bg-[#FFBA4A]' />
                                <span className='w-3 h-3 rounded-full bg-[#BEC2FF]' />
                            </span>
                            <span className='pl-2 h-5 font-semibold leading-5 tracking-[0.28px] '>Live Narrative Decomposer v4.2</span>
                            <span className='px-2.5 py-0.5 rounded-full bg-[#E6EEFF] font-semibold text-[12px] leading-4 text-[#4752C3] '>Role: Staff Cloud Architect</span>
                        </span>

                        <span className='flex items-center gap-4'>
                            <span className='flex items-center gap-1.5'>
                                <span className='material-symbols-outlined text-[12px] text-[#4752C3]'>verified</span>
                                <span className='font-semibold text-[12px] leading-4 text-[#454653]'>Parsed 38 Technical Nodes</span>
                            </span>
                            <span className='px-3 py-1 bg-[#DDE9FF] font-semibold leading-4 text-[12px] rounded-full text-[#4752C3] '>Status: Optimized (+41 pts)</span>
                        </span>
                    </div>

                    <div>
                        {/* Left */}
                        <div>
                            <div>
                                <span>Raw Resume Input</span>
                                <span>High Rejection Risk (58/100)</span>
                            </div>

                            <div>
                                <div>
                                    <h3>
                                        Lead Infrastructure Engineer • CloudCorp
                                    </h3>
                                    <span>
                                        •
                                    </span>
                                    <span>
                                        Responsible for maintaining servers
                                    </span>
                                    <span>
                                        and fixing runtime issues across staging and production.
                                    </span>
                                </div>

                                <div>
                                    <span>•</span>
                                    <span>
                                        Handled customer feedback
                                    </span>
                                    <span>
                                        on system slowdowns and helped optimize databases when required.
                                    </span>
                                </div>

                                <div>
                                    <span>•</span>
                                    <span>
                                        Assisted team members
                                    </span>
                                    <span>
                                        with onboarding and
                                        participated in weekly roadmap planning sessions.
                                    </span>
                                </div>
                            </div>

                            <div>
                                <span>
                                    Detected 3 Passive Verb Traps
                                </span>
                                <span>
                                    0 Quantified Revenue/Scale Metrics
                                </span>
                            </div>
                        </div>

                        {/* Mid */}
                        <div>
                            <span>

                            </span>
                            <span>
                                AI Semantic
                                Synthesis
                            </span>
                        </div>

                        {/* Right */}
                        <div>
                            <div>
                                <span>
                                    Re-Engineered Executive Output
                                </span>
                                <span>
                                    ATS Score: 99 / Top 1% Tier
                                </span>
                            </div>

                            <div>
                                <div>
                                    <h3>Principal Cloud Architect • CloudCorp</h3>
                                    <span>•</span>
                                    <span>
                                        Architected auto-scaling AWS Kubernetes
                                        infrastructure
                                    </span>
                                    <span>
                                        serving 2.4M requests/day at 99.99%
                                        uptime, shrinking p99 latency by 42%.
                                    </span>
                                </div>

                                <div>
                                    <span>
                                        • Restructured distributed Redis & PostgreSQL tiers
                                    </span>
                                    <span>
                                        , reducing recurring cloud compute expenditure by
                                        $310,000 ARR while raising retention by 28%.
                                    </span>
                                </div>

                                <div>
                                    <span>
                                        • Spearheaded platform governance for 14 staff
                                        engineers
                                    </span>
                                    <span>
                                        , cutting PR cycle times from 4.2 days to 38
                                        minutes with zero degradation.
                                    </span>
                                </div>
                            </div>

                            <div>
                                <span>
                                    100% Active Leadership Verbs
                                </span>
                                <span>
                                    3 Concrete ROI Anchors
                                </span>

                            </div>
                        </div>
                    </div>

                    <div className='pt-6 flex gap-4 '>
                        <span className='p-4 w-86.5 h-29 border flex justify-between items-center bg-[#EFF4FF]/60'>
                            <span className='flex flex-col gap-0.5'>
                                <div className='font-semibold text-[12px] leading-4 tracking-[0.6px] text-[#454653]'>EXECUTIVE DELTA</div>
                                <div className='flex items-baseline'>
                                    <h2 className='font-bold text-[30px] leading-9.5 tracking-[-0.3px] h-10.75 text-[#101C2C] space-x-0.75 '> 58 → 99</h2>
                                    <span className='px-1.5 rounded-2xl bg-[#E0E0FF]/60 font-bold text-[12px] leading-4 text-[#4752C3]'>+41 pts</span>
                                </div>

                                <div className='font-semibold text-[12px] leading-4 text-[#454653]'>Elevated to Top Decile</div>
                            </span>
                            <div className='w-12 h-12 flex items-center justify-center'>
                                <svg class="w-12 h-12 transform-rotate-90" viewbox="0 0 36 36">
                                    <path className="text-surface-variant"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none" stroke="currenttext" stroke-width="3.5"></path>
                                    <path className="text-[#4752C3]"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none" stroke="currenttext" stroke-dasharray="99, 100"
                                        stroke-linecap="round" stroke-width="3.5"></path>
                                </svg>
                            </div>
                        </span>

                        <span className='p-4 w-86.5 h-29 border flex justify-between items-center bg-[#EFF4FF]/60'>
                            <span className='flex flex-col gap-0.5'>
                                <div className='font-semibold text-[12px] leading-4 tracking-[0.6px] text-[#454653]'>ATS INGESTION SAFETY</div>
                                <div className='flex items-baseline'>
                                    <h2 className='font-bold text-[30px] leading-9.5 tracking-[-0.3px] h-10.75 text-[#101C2C] space-x-0.75 '>98.4%</h2>
                                    <span className='px-1.5 font-bold text-[12px] leading-4 text-[#4752C3]'>Pass Rate</span>
                                </div>
                                <div className='font-semibold text-[12px] leading-4 text-[#454653]'>Validated: Taleo, Greenhouse, Lever</div>
                            </span>
                            <span className='w-10 h-10 rounded-full bg-[#E0E0FF] text-[#000569] flex items-center justify-center'>
                                <span class="material-symbols-outlined text-[20px]">cloud_done</span>
                            </span>
                        </span>

                        <span className='w-86.5 h-29 px-4 py-5.25 flex border items-center justify-between bg-[#EFF4FF]/60'>
                            <span className='flex flex-col gap-2.25 pt-1.25 '>
                                <div className='font-semibold leading-4 tracking-[0.6px] text-[#454653] text-[12px]'>INJECTED SIGNALS</div>
                                <span className='h-11 border-spacing-1 flex flex-wrap'>
                                    <span className='px-2 py-0.5 rounded-full bg-white font-medium text-[12px] leading-4 text-[#4752C3]'>Distributed Systems</span>
                                    <span className='px-2 py-0.5 rounded-full bg-white font-medium text-[12px] leading-4 text-[#4752C3]'>Terraform</span>
                                    <span className='px-2 py-0.5 rounded-full bg-white font-medium text-[12px] leading-4 text-[#4752C3]'>P&L Metrics</span>
                                </span>

                            </span>

                            <span className='w-10 h-10 rounded-full bg-[#DDE9FF] text-[#4752C3] flex items-center justify-center'>
                                <span class="material-symbols-outlined text-[20px]">auto_fix_high</span>
                            </span>
                        </span>
                    </div>
                </section>

                {/* Editorial Narrative Section: The Anatomy of a 1% Resume */}
                <section className='flex flex-col gap-12'>
                    <div className='flex h-36 items-baseline'>
                        <span className='self-baseline flex flex-col gap-2.25 pt-0.5 pl-10 pb-[0.5px]'>
                            <span className='font-semibold text-[14px] leading-5 tracking-[0.7px] text-[#4752C3]' >
                                STRATEGIC METHODOLOGY
                            </span>
                            <h1 className='font-bold text-[48px] leading-14 tracking-[-1.2px] text-[#101C2C]'>
                                The Anatomy of a 1% Executive Resume
                            </h1>
                        </span>
                        <span className='self-baseline h-12 text-[16px] leading-6 text-[#454653]'>
                            Most candidates optimize for humans or optimize for bots. Our neural decomposition pipeline creates dual resonance.
                        </span>
                    </div>

                    <div className='grid md:grid-cols-2 gap-4'>
                        {
                            anatomy.map((anatom, id) => (
                                <div key={id} className='rounded-4xl p-8 bg-white/85 flex flex-col justify-between'>
                                    <div className="pb-3 flex flex-col gap-3">
                                        <div className='h-6 flex items-center justify-between'>
                                            <span className={`font-bold text-[14px] leading-5 tracking-[1.4px] ${anatom.text} `}>{anatom.numbering}</span>
                                            <span className={`px-3 py-1 rounded-full text-[12px] leading-4 font-semibold ${anatom.text} ${anatom.bg}`}>{anatom.semantic}</span>
                                        </div>
                                        <h3 className="pt-3 font-bold text-[30px] leading-9.5 text-[#101C2C] tracking-[-0.3px] ">{anatom.h3}</h3>
                                        <p className="text-[16px] leading-6.5 text-[#454653] ">
                                            {anatom.para}
                                        </p>
                                    </div>
                                    <div className="p-4 flex gap-3 items-center h-12 bg-[#EFF4FF] ">
                                        <span className={`material-symbols-outlined text-[20px] ${anatom.text}`}>{anatom.logo}</span>
                                        <span className="font-medium text-[12px] leading-4 ">{anatom.element}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

                {/* Comparative Rewrite Showcase (Interactive Style Switcher) */}
                <section className='p-12 bg-white/90 rounded-[48px] backdrop-blur-2xl shadow-[0px_20px_50px_0px_#1D2939/5] flex flex-col gap-10'>

                    <div className='pt-0.5 flex flex-col gap-2.5'>
                        <div className='font-semibold leading-5 text-[14px] tracking-[0.7px] text-[#4752C3] text-center'>CONCRETE TRANSFORMATIONS</div>
                        <h1 className='font-bold text-[48px] leading-14 tracking-[-1.2px] text-center text-[#101C2C]'>Before & After AI Decomposition</h1>
                        <p className='max-w-2xl pt-0.5 text-[16px] leading-6 text-[#454653] text-center mx-auto'>See the direct difference between bullets that get automatically archived and bullets that schedule immediate recruiter screens.</p>
                    </div>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='p-6 flex justify-between flex-col rounded-4xl bg-[#EFF4FF]/60'>
                            <div className='flex flex-col gap-4'>
                                <div className='pb-3 flex justify-between items-center'>
                                    <span className='font-bold text-[14px] leading-5 tracking-[0.28px] text-[#101C2C] '>Product Leadership</span>
                                    <span className='bg-[#FFDADC] rounded-full px-2.5 py-0.5 font-semibold text-[12px] leading-4 text-[#400010] '>Filtered Pattern</span>
                                </div>
                                <div className='flex flex-col gap-1 p-4 bg-white/90'>
                                    <div className='text-[#A83349] font-medium leading-6 text-[16px]'>
                                        x Before: Weak Operational Record
                                    </div>
                                    <p className='text-[16px] leading-6 text-[#454653]'>
                                        "Managed the checkout feature team, worked with designers
                                        on UX improvements, and helped prioritize sprint backlogs in
                                        Jira."
                                    </p>
                                </div>
                                <div className='p-4 gap-1 bg-white flex flex-col'>
                                    <div className='text-[#4752C3] font-bold leading-6 text-[16px]'>
                                        ✓ After: Executive Level Impact
                                    </div>
                                    <p className='text-[16px] font-medium leading-6 text-[#101C2C]'>
                                        "Spearheaded redesign of cross-border frictionless checkout engine across 18 countries; cut drop-off by 31%
                                        and unlocked $4.8M incremental GMV in Q3."
                                    </p>
                                </div>
                            </div>
                            <div className='mt-4 pt-3 flex justify-between items-center '>
                                <span className='font-semibold text-[12px] leading-4 text-[#454653]'>ATS Relevancy: +52%</span>
                                <span className='font-semibold text-[12px] leading-4 text-[#4753C3]'>Tier 1 Recruiter Signal</span>
                            </div>
                        </div>
                        <div className='p-6 flex justify-between flex-col rounded-4xl bg-[#EFF4FF]/60'>
                            <div className='flex flex-col gap-4'>
                                <div className='pb-3 flex justify-between items-center'>
                                    <span className='font-bold tracking-[0.28px] text-[14px] leading-5 text-[#101C2C]'>Staff Software Engineering</span>
                                    <span className='font-semibold bg-[#FFDADC] rounded-full text-[12px] text-[#400010] leading-4 px-2.5 py-0.5'>Filtered Pattern</span>
                                </div>
                                <div className='p-4 gap-1 flex flex-col bg-white/90'>
                                    <div className='font-medium text-[16px] leading-6 text-[#A83349]'>
                                        x Before: Generic Task Listing
                                    </div>
                                    <p className='text-[16px] leading-6 text-[#454653]'>
                                        "Built microservices with Go and Node.js, maintained unit tests, and helped migrate legacy backend APIs to AWS."
                                    </p>
                                </div>
                                <div className='p-4 gap-1 flex flex-col bg-white'>
                                    <div className='font-bold text-[16px] leading-6 text-[#4752C3]'>
                                        After: Architectural Ownership
                                    </div>
                                    <p className='text-[16px] font-medium leading-6 text-[#101C2C]'>
                                        "Engineered high-throughput Go event bus orchestrating 12M daily transactions; lowered infrastructure costs by 34% while maintaining 99.995% SLA compliance."
                                    </p>
                                </div>
                            </div>
                            <div className='mt-4 pt-3 flex justify-between items-center '>
                                <span className='font-semibold text-[12px] leading-4 text-[#454653]'>ATS Relevancy: +67%</span>
                                <span className='font-medium text-[12px] leading-4 text-[#4752C3]'>System Architect Verified</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Live Resume Benchmark Metrics Matrix */}
                <section>
                    <div>
                        <div>GRANULAR PRECISION</div>
                        <h1>Evaluation Vectors Analyzed in Real Time</h1>
                        <p>
                            Every resume submitted is verified against 4 key dimensions before reaching human recruiters.
                        </p>
                    </div>
                    <div>
                        {
                            metrics.map((matrix, id) => (
                                <div key={id}>
                                    <div>
                                        <span>{matrix.icon}</span>
                                        <div>{matrix.vector}</div>
                                        <h4>{matrix.h4}</h4>
                                        <p>
                                            {matrix.p}
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>{matrix.target}</span>
                                            <span>{matrix.percentage}</span>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

                {/* Final High-Impact Conversion Card */}
                <section>
                    <div>
                        <span></span>
                        <span>Takes Under 45 Seconds</span>
                    </div>
                    <h1>Stop Guessing Why You Never Hear Back.</h1>
                    <p>
                        Upload your existing resume in PDF or DOCX format and receive a granular, ATS-verified breakdown with line-by-line executive rewrites immediately.
                    </p>
                    <div>

                    </div>
                    <button>
                        <span>Analyze My Resume Free</span>
                        <span></span>
                    </button>
                    <div>
                        <span>
                            <span></span>
                            <span>
                                100% Confidential & Encrypted
                            </span>
                        </span>
                        <span>
                            <span></span>
                            <span>
                                No credit card required
                            </span>
                        </span>
                        <span>
                            <span></span>
                            <span>
                                Instant ATS diagnosis
                            </span>
                        </span>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home