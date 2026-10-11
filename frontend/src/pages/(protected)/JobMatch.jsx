import React, { useState } from 'react';

const matchedSkills = ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Git', 'Agile'];
const missingSkills = ['Kubernetes', 'Terraform', 'GraphQL', 'AWS Lambda'];

const dimensions = [
    {
        icon: 'code',
        label: 'Skills Match',
        value: 82,
        color: '#4752C3',
        desc: 'Core frontend & backend software engineering stacks align seamlessly.',
    },
    {
        icon: 'key',
        label: 'Keyword Match',
        value: 74,
        color: '#4648D4',
        desc: 'Frequent terms and methodology phrases identified across technical bullets.',
    },
    {
        icon: 'work_history',
        label: 'Experience Match',
        value: 78,
        color: '#5A5E69',
        desc: 'Seniority expectations and timeline requirements well satisfied.',
    },
];

const recommendations = [
    {
        title: 'Add experience with containerization',
        text: 'Incorporate references to Kubernetes clusters, Helm charts, or Dockerized local staging environments inside your recent employment history to directly counter ATS keyword filtering.',
    },
    {
        title: 'Highlight GraphQL or related API design experience',
        text: 'Even if standard REST APIs dominate your background, showcase any GraphQL queries, Apollo client usage, or modern contract-driven API schema implementations in your project summaries.',
    },
];

const defaultJD = `We are looking for a Full-Stack Software Engineer proficient in React, Node.js, TypeScript, and cloud technologies. The ideal candidate will design and maintain robust REST APIs, architect scalable frontend micro-frontends, and drive test automation in an Agile sprint cadence. 

You should be confident working with Git workflows, Docker deployments, and container orchestration using Kubernetes. Experience with GraphQL schemas and infrastructure management tools such as Terraform or AWS Lambda is highly desirable to accelerate our serverless microservices transformation.`;

const JobMatch = () => {
    const [jobDescription, setJobDescription] = useState(defaultJD);
    const [loading, setLoading] = useState(false);

    const wordCount = jobDescription.trim() ? jobDescription.trim().split(/\s+/).length : 0;

    const triggerAnalysis = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            document.getElementById('results-container')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 600);
    };

    return (
        <>
            <main className="box-border min-h-screen w-full min-w-0 overflow-x-hidden bg-radial from-[#FAF8FF] to-[#E1E0FF]/30 px-4 pb-4 pt-[calc(10vh+1.5rem)] pl-20 sm:px-8 sm:pb-8 sm:pl-24 lg:pl-[calc(20vw+4rem)] lg:pr-16">
                <div className="flex flex-col pt-4 sm:px-5 sm:pt-8 lg:px-10">
                    {/* Title */}
                    <section className='pb-6 flex flex-col gap-1'>
                        <h1 className='font-bold text-[28px] leading-9 tracking-[-0.7px] text-[#1A1B20]'>Job Match</h1>
                        <p className='text-[18px] leading-7 text-[#454653]'>
                            Check how well your resume matches a job description.
                        </p>
                    </section>

                    {/* Input card */}
                    <section className='pb-9'>
                        <form onSubmit={triggerAnalysis} className='p-6 flex flex-col gap-6 bg-white shadow-sm rounded-xl'>
                            <div className='grid grid-cols-12 gap-4 items-end'>
                                <div className='col-span-12 md:col-span-8 flex flex-col gap-1'>
                                    <label htmlFor="resume" className='flex items-center gap-2'>
                                        <span className="material-symbols-outlined text-[#4752C3] text-[20px]!">description</span>
                                        <span className='font-semibold leading-6.5 text-[#1A1B20] text-[18px]'>Select Resume</span>
                                    </label>
                                    <div className='h-12 pl-4 pr-10 rounded-lg bg-white shadow-sm'>
                                        <select className='w-full h-full outline-none bg-transparent' name="resume" id="resume" defaultValue="1">
                                            <option value="1">Software_Engineer_Resume_v2.pdf (Updated 3d ago)</option>
                                            <option value="2">Senior_FullStack_2024_Master.pdf</option>
                                            <option value="3">Staff_Engineer_Resume_Final.pdf</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-span-12 md:col-span-4 pb-1'>
                                    <div className='flex gap-3 px-4 py-2.5 bg-[#F4F3FA] rounded-lg'>
                                        <span className='material-symbols-outlined text-[#4752C3]'>verified</span>
                                        <div>
                                            <div className='uppercase font-semibold text-[11px] leading-4 tracking-[0.55px] text-[#454653]'>Parsing Status</div>
                                            <div className='font-semibold text-[15px] leading-5 tracking-[0.15px] text-[#1A1B20]'>100% Parsed (ATS Ready)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center justify-between'>
                                    <label htmlFor="job-description" className='flex items-center gap-2'>
                                        <span className='material-symbols-outlined text-[#4752C3] text-[20px]!'>assignment</span>
                                        <span className='font-semibold text-[18px] leading-6.5 text-[#1A1B20]'>Job Description</span>
                                    </label>
                                    <span className='font-semibold text-[13px] leading-4.5 text-[#454653]'>Word count: {wordCount} words</span>
                                </div>
                                <textarea
                                    name="job-description"
                                    id="job-description"
                                    rows={7}
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                    className='w-full p-4 bg-white rounded-xl shadow-sm text-[16px] leading-6 text-[#1A1B20] outline-none focus:ring-2 focus:ring-[#4752C3] resize-y custom-scrollbar'
                                />
                            </div>

                            <div className='flex flex-col sm:flex-row items-center justify-end gap-4 pt-1'>
                                <button
                                    type="submit"
                                    className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7C87FB] text-[#040F90] font-semibold text-[15px] px-8 py-3.5 rounded-lg shadow-sm hover:bg-[#6063EE] hover:text-[#FFFBFF] transition-all active:scale-[0.98]'
                                >
                                    <span className={`material-symbols-outlined text-[20px]! ${loading ? 'animate-spin' : ''}`}>
                                        {loading ? 'progress_activity' : 'bolt'}
                                    </span>
                                    <span>{loading ? 'Comparing...' : 'Analyze Match'}</span>
                                </button>
                            </div>
                        </form>
                    </section>

                    {/* Results */}
                    <section id="results-container" className='flex flex-col gap-6'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span className='w-2.5 h-6 bg-[#4752C3] rounded-full'></span>
                                <h2 className='font-bold text-[22px] leading-7.5 text-[#1A1B20]'>Analysis Results</h2>
                            </div>
                            <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E1E0FF] text-[#07006C] font-semibold text-[13px]'>
                                <span className='w-2 h-2 rounded-full bg-[#4648D4]'></span>
                                Comparison Complete
                            </span>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                            {/* Score card */}
                            <div className='lg:col-span-5 bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <span className='font-semibold text-[13px] uppercase tracking-wider text-[#454653]'>Overall Verdict</span>
                                        <span className='font-semibold text-[18px] text-[#1A1B20]'>Strong Candidate Alignment</span>
                                    </div>
                                    <span className='px-2.5 py-1 rounded-md bg-[#E1E0FF] text-[#07006C] font-bold text-[13px]'>Top 15%</span>
                                </div>

                                <div className='flex flex-col items-center justify-center py-6'>
                                    <div className='relative w-44 h-44 flex items-center justify-center'>
                                        <svg className='w-full h-full -rotate-90' viewBox="0 0 120 120">
                                            <circle cx="60" cy="60" r="50" fill="transparent" stroke="#EFEDF4" strokeWidth="10" />
                                            <circle
                                                cx="60" cy="60" r="50" fill="transparent"
                                                stroke="#4752C3" strokeWidth="10" strokeLinecap="round"
                                                strokeDasharray="314.159" strokeDashoffset="69.11"
                                            />
                                        </svg>
                                        <div className='absolute flex flex-col items-center justify-center'>
                                            <span className='text-[48px] leading-none font-bold text-[#1A1B20]'>
                                                78<span className='text-[28px] text-[#4752C3]'>%</span>
                                            </span>
                                            <span className='font-semibold text-[13px] text-[#454653] uppercase tracking-wider mt-1'>Match Score</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F4F3FA]/60 p-4 rounded-lg flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <span className='material-symbols-outlined text-[#4752C3] text-[20px]!'>thumb_up</span>
                                        <span className='text-[14px] font-medium text-[#1A1B20]'>ATS Screen Threshold: 70%</span>
                                    </div>
                                    <span className='font-bold text-[13px] text-[#4648D4]'>Passed</span>
                                </div>
                            </div>

                            {/* Dimension breakdown */}
                            <div className='lg:col-span-7 bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between'>
                                <div>
                                    <h3 className='font-semibold text-[20px] leading-7 text-[#1A1B20] mb-1'>Dimension Breakdown</h3>
                                    <p className='text-[14px] leading-5 text-[#454653] mb-6'>
                                        Granular comparison between role expectations and your extracted credentials.
                                    </p>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    {dimensions.map((d) => (
                                        <div key={d.label} className='flex flex-col gap-1.5 p-4 rounded-lg bg-[#F4F3FA]/50'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex items-center gap-2'>
                                                    <span className='material-symbols-outlined text-[20px]!' style={{ color: d.color }}>{d.icon}</span>
                                                    <span className='font-semibold text-[18px] text-[#1A1B20]'>{d.label}</span>
                                                </div>
                                                <span className='font-bold text-[22px]' style={{ color: d.color }}>{d.value}%</span>
                                            </div>
                                            <div className='w-full bg-[#EFEDF4] h-2.5 rounded-full overflow-hidden'>
                                                <div
                                                    className='h-full rounded-full transition-all duration-500'
                                                    style={{ width: `${d.value}%`, backgroundColor: d.color }}
                                                />
                                            </div>
                                            <span className='text-[14px] leading-5 text-[#454653]'>{d.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Matched vs Missing */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-8 h-8 rounded-lg bg-[#E0E0FF] flex items-center justify-center text-[#000569]'>
                                            <span className='material-symbols-outlined text-[20px]!'>check_circle</span>
                                        </div>
                                        <h3 className='font-semibold text-[20px] text-[#1A1B20]'>Matched Skills</h3>
                                    </div>
                                    <span className='px-2.5 py-1 rounded-full bg-[#EFEDF4] text-[#1A1B20] font-semibold text-[13px]'>
                                        {matchedSkills.length} Found
                                    </span>
                                </div>
                                <p className='text-[14px] leading-5 text-[#454653]'>
                                    These technical competencies were detected in your resume and explicitly correspond with the position requirements.
                                </p>
                                <div className='flex flex-wrap gap-2.5 pt-2'>
                                    {matchedSkills.map((s) => (
                                        <span key={s} className='inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#E1E0FF] text-[#07006C] font-semibold text-[15px]'>
                                            <span className='material-symbols-outlined text-[18px]!'>done</span>
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-8 h-8 rounded-lg bg-[#FFDAD6] flex items-center justify-center text-[#93000A]'>
                                            <span className='material-symbols-outlined text-[20px]!'>warning</span>
                                        </div>
                                        <h3 className='font-semibold text-[20px] text-[#1A1B20]'>Missing Skills</h3>
                                    </div>
                                    <span className='px-2.5 py-1 rounded-full bg-[#FFDAD6]/60 text-[#93000A] font-semibold text-[13px]'>
                                        {missingSkills.length} Gap Areas
                                    </span>
                                </div>
                                <p className='text-[14px] leading-5 text-[#454653]'>
                                    Key qualifications found in the role posting that are not explicitly stated in your current resume file.
                                </p>
                                <div className='flex flex-wrap gap-2.5 pt-2'>
                                    {missingSkills.map((s) => (
                                        <span key={s} className='inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#E9E7EE] text-[#454653] font-semibold text-[15px]'>
                                            <span className='material-symbols-outlined text-[18px]! text-[#BA1A1A]'>close</span>
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Recommendations */}
                        <div className='bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4'>
                            <div className='flex items-center gap-2'>
                                <div className='w-8 h-8 rounded-lg bg-[#4752C3] flex items-center justify-center text-white'>
                                    <span className='material-symbols-outlined text-[20px]!'>lightbulb</span>
                                </div>
                                <div>
                                    <h3 className='font-semibold text-[20px] text-[#1A1B20]'>Recommendations</h3>
                                    <p className='text-[14px] leading-5 text-[#454653]'>
                                        Actionable steps to elevate your ATS match rate prior to submission.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 mt-2'>
                                {recommendations.map((r, i) => (
                                    <div key={r.title} className='flex items-start gap-4 p-4 rounded-lg bg-[#F4F3FA] hover:bg-[#EFEDF4] transition-colors'>
                                        <div className='shrink-0 w-8 h-8 mt-0.5 rounded-full bg-[#E1E0FF] text-[#07006C] flex items-center justify-center font-bold text-[13px]'>
                                            {String(i + 1).padStart(2, '0')}
                                        </div>
                                        <div className='flex flex-col gap-1 min-w-0'>
                                            <span className='font-semibold text-[18px] text-[#1A1B20]'>{r.title}</span>
                                            <p className='text-[16px] leading-6 text-[#454653]'>{r.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default JobMatch;
