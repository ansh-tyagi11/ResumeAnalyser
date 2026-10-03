import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const ALLOWED_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const formatSize = (bytes) =>
    bytes < 1024 * 1024
        ? `${(bytes / 1024).toFixed(0)} KB`
        : `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

const Resumes = () => {
    const { register, handleSubmit, clearErrors, formState: { errors } } = useForm({ mode: 'onChange' });
    const [selectedFile, setSelectedFile] = useState(null);
    const [open, setOpen] = useState(false);
    const fileInputRef = useRef(null);

    const resumeField = register('resume', {
        required: 'Resume file is required',
        validate: {
            fileRule: (files) =>
                ALLOWED_TYPES.includes(files[0]?.type) || 'Only PDF/DOC/DOCX files are allowed',
            sizeRule: (files) =>
                files[0]?.size <= 2 * 1024 * 1024 || 'File must be under 2MB',
        },
    });

    const closeModal = useCallback(() => {
        if (fileInputRef.current) fileInputRef.current.value = '';
        setSelectedFile(null);
        clearErrors('resume');
    }, [clearErrors]);

    const onSubmit = (data) => {
        const resumeFile = data.resume[0];
        console.log('Uploaded file:', resumeFile);
        closeModal();
    };

    useEffect(() => {
        if (!selectedFile) return;
        const onKeyDown = (e) => e.key === 'Escape' && closeModal();
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [selectedFile, closeModal]);

    return (
        <main className="box-border min-h-screen w-full min-w-0 overflow-x-hidden bg-radial from-[#FAF8FF] to-[#E1E0FF]/30 px-4 pb-4 pt-[calc(10vh+1.5rem)] pl-[calc(4rem+1rem)] sm:px-8 sm:pb-8 sm:pl-[calc(4rem+2rem)] lg:pl-[calc(20vw+4rem)] lg:pr-16">
            <div className="px-0 pt-4 sm:px-8 sm:pt-8">
                <section className="flex flex-wrap items-center justify-between gap-4 pb-9">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold leading-8 tracking-[-0.7px] text-[#1A1B20] sm:text-[28px] sm:leading-9">
                            My Resumes
                        </h1>
                        <p className="text-[16px] leading-6 text-[#454653]">
                            Manage your uploaded resumes.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <button
                            type="button"
                            onClick={() => fileInputRef.current.click()}
                            className="flex cursor-pointer gap-2 rounded-xl bg-[#7C87FB] p-3 text-white"
                        >
                            <span className="material-symbols-outlined">add</span>
                            Upload Resume
                        </button>

                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            {...resumeField}
                            onChange={async (event) => {
                                const file = event.target.files?.[0] ?? null;
                                await resumeField.onChange(event);
                                setSelectedFile(file);
                            }}
                            ref={(e) => {
                                resumeField.ref(e);
                                fileInputRef.current = e;
                            }}
                            className="hidden"
                        />

                        {selectedFile && (
                            <div
                                className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1B20]/50 p-4"
                                onClick={closeModal}
                            >
                                <div
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="upload-title"
                                    className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <h2 id="upload-title" className="text-[20px] font-semibold leading-7 text-[#1A1B20]">
                                            Upload resume
                                        </h2>
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            aria-label="Close"
                                            className="cursor-pointer rounded-lg p-1 text-[#454653] hover:bg-[#EFEDF4]"
                                        >
                                            <span aria-hidden="true" className="material-symbols-outlined">close</span>
                                        </button>
                                    </div>

                                    <div className="mt-4 flex items-center gap-4 rounded-xl bg-[#FAF3FA] p-4">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#4752C3]">
                                            <span aria-hidden="true" className="material-symbols-outlined">article</span>
                                        </span>
                                        <div className="min-w-0">
                                            <div className="wrap-break-word text-[16px] font-semibold leading-6 text-[#1A1B20]">
                                                {selectedFile.name}
                                            </div>
                                            <div className="text-[14px] leading-5 text-[#454653]">
                                                {formatSize(selectedFile.size)}
                                            </div>
                                        </div>
                                    </div>

                                    {errors.resume && (
                                        <p className="mt-3 text-sm text-red-600" role="alert">
                                            {errors.resume.message}
                                        </p>
                                    )}

                                    <div className="mt-6 flex justify-end gap-3">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="h-10 cursor-pointer rounded-lg px-5 text-[15px] font-medium text-[#454653] hover:bg-[#EFEDF4]"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={!!errors.resume}
                                            className="h-10 cursor-pointer rounded-lg bg-[#7C87FB] px-6 text-[15px] font-medium text-white shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>
                </section>

                <section className='pb-6'>
                    <div className='flex items-center gap-2 px-2 py-2 rounded-xl shadow-sm bg-white'>
                        <div className="w-10 h-10 flex items-center justify-center text-outline">
                            <span className="material-symbols-outlined text-[22px] text-[#767684]">search</span>
                        </div>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder='Search Resumes...'
                            className='focus:outline-none w-full px-1 pt-px pb-0.5 placeholder:text-[#767684] placeholder:text-[16px] '
                        />
                    </div>
                </section>

                <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className='p-6 rounded-xl bg-white shadow-sm flex flex-col justify-between'>
                        <div className='flex flex-col gap-4 pb-6'>
                            <div className='flex justify-between pl-[0.01px]'>
                                <span className='flex items-center justify-center bg-[#E1E0FF] shadow-sm rounded-xl text-[#4752C3] h-12 w-12'>
                                    <span className="material-symbols-outlined">description</span>
                                </span>
                                <span className='relative flex gap-2'>
                                    <span className='flex items-center justify-center bg-[#E1E0FF]/50 rounded-full h-6.5 gap-1.5 px-2 py-4'>
                                        <span className='w-2 h-2 bg-[#4752C3] rounded-full' />
                                        <span className='font-semibold text-[13px] leading-4.5 tracking-[0.26px] text-[#2D37AA]'>85/100</span>
                                    </span>
                                    <button
                                        onClick={() => setOpen(prev => !prev)}
                                        className='h-8 w-8 text-[#767684] hover:bg-[#E1E0FF]/50 rounded-lg hover:cursor-pointer'>
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                    {open && (<button className='absolute hover:cursor-pointer border border-white rounded-xl shadow-sm top-[60%] w-full flex items-center gap-2 py-2 px-4 bg-white text-[#BA1A1A] text-[13px] leading-4.5 font-semibold tracking-[0.26px]  transition-colors text-left'>
                                        <span>
                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                        </span>
                                        <span>Delete</span>
                                    </button>)}
                                </span>
                            </div>
                            <div className='font-semibold text-[18px] leading-6.5 text-[#1A1B20]'>Software_Engineer_2024.pdf</div>
                            <div className='flex flex-col gap-1.5'>
                                <div className='flex items-center gap-2'>
                                    <span className='flex items-center justify-center w-[13.5px] h-2.75 text-[#767684]'>
                                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'OPSZ' 18" }}>calendar_today</span>
                                    </span>
                                    <span className='h-5 text-[14px] leading-5 tracking-[0.14px] text-[#454653]'>Uploaded Sep 28, 2023 </span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='flex items-center justify-center w-[13.5px] h-2.75 text-[#767684]'>
                                        <span className="material-symbols-outlined text-[18px]">history</span>
                                    </span>
                                    <span className='h-5 text-[14px] leading-5 tracking-[0.14px] text-[#454653]'>Last analyzed Oct 12, 2023</span>
                                </div>

                            </div>
                        </div>
                        <div className='flex pt-4 gap-2 justify-between'>
                            <button className='px-2 py-2.5 rounded-lg h-10 bg-[#4752C3] shadow-sm text-white'>View Analysis</button>
                            <button className='px-2 py-2.5 rounded-lg h-10 bg-[#F4F3FA] shadow-sm text-[#1A1B20]'>Analyse Again</button>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl bg-white shadow-sm flex flex-col justify-between'>
                        <div className='flex flex-col gap-4 pb-6'>
                            <div className='flex justify-between pl-[0.01px]'>
                                <span className='flex items-center justify-center bg-[#E1E0FF] shadow-sm rounded-xl text-[#4752C3] h-12 w-12'>
                                    <span className="material-symbols-outlined">description</span>
                                </span>
                                <span className='relative flex gap-2'>
                                    <span className='flex items-center justify-center bg-[#E1E0FF]/50 rounded-full h-6.5 gap-1.5 px-2 py-4'>
                                        <span className='w-2 h-2 bg-[#4752C3] rounded-full' />
                                        <span className='font-semibold text-[13px] leading-4.5 tracking-[0.26px] text-[#2D37AA]'>85/100</span>
                                    </span>
                                    <button
                                        onClick={() => setOpen(prev => !prev)}
                                        className='h-8 w-8 text-[#767684] hover:bg-[#E1E0FF]/50 rounded-lg hover:cursor-pointer'>
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                    {open && (<button className='absolute hover:cursor-pointer border border-white rounded-xl shadow-sm top-[60%] w-full flex items-center gap-2 py-2 px-4 bg-white text-[#BA1A1A] text-[13px] leading-4.5 font-semibold tracking-[0.26px]  transition-colors text-left'>
                                        <span>
                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                        </span>
                                        <span>Delete</span>
                                    </button>)}
                                </span>
                            </div>
                            <div className='font-semibold text-[18px] leading-6.5 text-[#1A1B20]'>Product_Lead_Resume.pdf</div>
                            <div className='flex flex-col gap-1.5'>
                                <div className='flex items-center gap-2'>
                                    <span className='flex items-center justify-center w-[13.5px] h-2.75 text-[#767684]'>
                                        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                    </span>
                                    <span className='h-5 text-[14px] leading-5 tracking-[0.14px] text-[#454653]'>Uploaded Sep 28, 2023</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='flex items-center justify-center w-[13.5px] h-2.75 text-[#767684]'>
                                        <span className="material-symbols-outlined text-[18px]">history</span>
                                    </span>
                                    <span className='h-5 text-[14px] leading-5 tracking-[0.14px] text-[#454653]'>Last analyzed Oct 12, 2023</span>
                                </div>

                            </div>
                        </div>
                        <div className='flex pt-4 gap-2 justify-between'>
                            <button className='px-2 py-2.5 rounded-lg h-10 bg-[#4752C3] shadow-sm text-white'>View Analysis</button>
                            <button className='px-2 py-2.5 rounded-lg h-10 bg-[#F4F3FA] shadow-sm text-[#1A1B20]'>Analyse Again</button>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl bg-white shadow-sm flex flex-col justify-between'>
                        <div className='flex flex-col gap-4 pb-6'>
                            <div className='flex justify-between pl-[0.01px]'>
                                <span className='flex items-center justify-center bg-[#E1E0FF] shadow-sm rounded-xl text-[#4752C3] h-12 w-12'>
                                    <span className="material-symbols-outlined">description</span>
                                </span>
                                <span className='relative flex gap-2'>
                                    <span className='flex items-center justify-center bg-[#E1E0FF]/50 rounded-full h-6.5 gap-1.5 px-2 py-4'>
                                        <span className='w-2 h-2 bg-[#4752C3] rounded-full' />
                                        <span className='font-semibold text-[13px] leading-4.5 tracking-[0.26px] text-[#2D37AA]'>85/100</span>
                                    </span>
                                    <button
                                        onClick={() => setOpen(prev => !prev)}
                                        className='h-8 w-8 text-[#767684] hover:bg-[#E1E0FF]/50 rounded-lg hover:cursor-pointer'>
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                    {open && (<button className='absolute hover:cursor-pointer border border-white rounded-xl shadow-sm top-[60%] w-full flex items-center gap-2 py-2 px-4 bg-white text-[#BA1A1A] text-[13px] leading-4.5 font-semibold tracking-[0.26px]  transition-colors text-left'>
                                        <span>
                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                        </span>
                                        <span>Delete</span>
                                    </button>)}
                                </span>
                            </div>
                            <div className='font-semibold text-[18px] leading-6.5 text-[#1A1B20]'>Tech_Resume_Final.pdf</div>
                            <div className='flex flex-col gap-1.5'>
                                <div className='flex items-center gap-2'>
                                    <span className='flex items-center justify-center w-[13.5px] h-2.75 text-[#767684]'>
                                        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                    </span>
                                    <span className='h-5 text-[14px] leading-5 tracking-[0.14px] text-[#454653]'>Uploaded Sep 28, 2023</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='flex items-center justify-center w-[13.5px] h-2.75 text-[#767684]'>
                                        <span className="material-symbols-outlined text-[18px]">history</span>
                                    </span>
                                    <span className='h-5 text-[14px] leading-5 tracking-[0.14px] text-[#454653]'>Last analyzed Oct 12, 2023</span>
                                </div>

                            </div>
                        </div>
                        <div className='flex pt-4 gap-2 justify-between'>
                            <button className='px-2 py-2.5 rounded-lg h-10 bg-[#4752C3] shadow-sm text-white'>View Analysis</button>
                            <button className='px-2 py-2.5 rounded-lg h-10 bg-[#F4F3FA] shadow-sm text-[#1A1B20]'>Analyse Again</button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Resumes;