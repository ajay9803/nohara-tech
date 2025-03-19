"use client"
import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import gsap from 'gsap';
import ContactUs from '@/components/pages/contact/contact_us';
import SectionSix from '@/components/pages/home/section_six';

const ContactForm: React.FC = () => {

    const containerRef = useRef(null);
    const firstTextRef = useRef<HTMLParagraphElement | null>(null);
    const secondTextRef = useRef<HTMLParagraphElement | null>(null);
    const thirdTextRef = useRef<HTMLParagraphElement | null>(null);
    const fourthTextRef = useRef<HTMLParagraphElement | null>(null);

    const imageUrl = "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/user-photos%2Fsagar%20bg%20remove.png?alt=media&token=d4a8b8e3-1b92-4a9b-bddb-fb896cbbf676"

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { duration: 0.8, ease: "power3.out" },
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 20%",
                // toggleActions: "play none none none",
            },
        });

        tl.from(firstTextRef.current, { y: 50, opacity: 0, })
        tl.from(secondTextRef.current, { y: 50, opacity: 0, }, "-=0.7")
        tl.from(thirdTextRef.current, { y: 50, opacity: 0, }, "-=0.7")
        tl.from(fourthTextRef.current, { y: 50, opacity: 0, }, "-=0.7")


    }, []);

    return (
        <div className="flex flex-col w-full font-opensans text-black pt-20 scroll-smooth tracking tracking-wider min-h-screen gap-x-4">
            <div className='w-full min-w-full pt-10 pb-10'>
                <div className="flex flex-col w-full md:flex-row px-8 md:px-20">
                    <div className="lg:w-[45%] sm:w-full">
                        <div
                            ref={containerRef}
                            className="flex flex-col w-full lg:flex-row items-start gap-y-2 lg:gap-x-4 pb-10"
                        >
                            <p
                                ref={firstTextRef}
                                className="text-[#6b6b6b] font-[900] sm:text-[10px] lg:text-[12px] flex-shrink-0"
                            >
                                LET&apos;S TALK
                            </p>
                            <div className="font-[900] text-[24px] lg:text-[40px] leading-tight -translate-y-[10px]">
                                <p ref={secondTextRef}>Start with a</p>
                                <p ref={thirdTextRef}>personal</p>
                                <p ref={fourthTextRef}>consultation</p>
                            </div>
                        </div>
                    </div>


                    {/* 2nd div */}
                    <div className="ml-0 md:ml-6 w-full flex flex-col gap-x-3 lg:flex-row rounded-sm shadow-sm shadow-gray-500 lg:px-0">
                        <div className="flex-1 sm:w-full pl-8 pt-8 sm:flex flex-col sm:items-center lg:items-start">
                            <div className='relative mb-4'>
                                <Image
                                    src={imageUrl}
                                    unoptimized={true}
                                    alt="Project Manager - Nohara Technologies"
                                    height={40}
                                    width={50}
                                    quality={100}
                                    className="object-cover"
                                    style={{ width: "40vh", height: "40vh" }}
                                />
                                <div
                                    className="w-[40vh] h-[10vh] py-2 absolute bottom-0"
                                    style={{
                                        background: "linear-gradient(to bottom, transparent, white 100%)"
                                    }}
                                ></div>
                            </div>
                            <p className="text-[#d73b3f] font-semibold tracking-wide text-[14px]">Project Manager </p>
                            <p className="text-[28px]">Sagar Prajapati </p>
                            <div className='pb-4 flex flex-col gap-y-2 mt-4'>
                                <div className="flex flex-row font-semibold items-center gap-x-2">
                                    <FontAwesomeIcon icon={faClock} className="w-auto text-lg text-white" />
                                    <p className='text-[#6c6c6c] font-[700]'>Discovery Calls</p>
                                </div>
                                <div className=' flex flex-row font-semibold items-center gap-x-2'>
                                    <FontAwesomeIcon icon={faVideo} className="w-auto  text-lg text-white" style={{ stroke: "blue", strokeWidth: "2px" }} />
                                    <p className='text-[#6c6c6c] font-[700]'>Web Conferencing Details provided upon <br /> confirmation</p>
                                </div>
                            </div>
                            <p className='font-open_sans font-[900] text-[16px] tracking-wide'>
                                Discuss your needs and opportunities. Explore <br />
                                how Che IT&apos;s solutions can solve your business <br />
                                tech tasks.
                            </p>
                        </div>
                        <div className="flex-1 w-full sm:w-full pt-8 h-auto lg:h-fullmt-10 lg:mt-0 text-black border border-solid border-black"
                        >
                            <div className='border-b-2 border-[#6c6c6c] px-10 flex flex-col py-10 lg:py-0 sm:items-center lg:items-start'>
                                <div className='flex flex-col  w-full  items-center font-[900]'>
                                    <p className='text-[#6c6c6c]'>Sagar Prajapati</p>
                                    <p className='text-[24px]'>Discovery Call</p>
                                </div>
                                <div className='mt-8 flex flex-col gap-y-4 mb-4'>
                                    <div className="flex flex-row font-semibold items-center gap-x-2">
                                        <FontAwesomeIcon icon={faClock} className="w-auto text-lg text-white" />
                                        <p className='text-[#6c6c6c] font-[700]'>30 min</p>
                                    </div>
                                    <div className=' flex flex-row font-semibold items-center gap-x-2'>
                                        <FontAwesomeIcon icon={faVideo} className="w-auto  text-lg text-white" style={{ stroke: "blue", strokeWidth: "2px" }} />
                                        <p className='text-[#6c6c6c] font-[700]'>Web Conferencing Details provided upon <br /> confirmation</p>
                                    </div>
                                </div>
                                <p className='font-open_sans text-[16px] tracking-wide leading-6 mb-4'>
                                    Discuss your needs and opportunities.<br />
                                    Explore how Che IT&apos;s solutions can solve <br />
                                    your business tech tasks.
                                </p>
                            </div>

                            <div className='mt-10 lg:px-10'>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <StaticDatePicker
                                        slotProps={{
                                            actionBar: {
                                                actions: ['cancel', 'accept'],
                                                sx: {
                                                    display: 'flex',
                                                    padding: '8px',
                                                    borderRadius: '8px',
                                                    width: 'fit',
                                                    color: "white"
                                                },
                                            },
                                        }}
                                        orientation="portrait"
                                        openTo="day"
                                        sx={{
                                            width: '100%',
                                            bgcolor: 'white',
                                            color: 'black',
                                            borderRadius: '12px',
                                            padding: '12px',
                                            '& .MuiPickersDay-root': {
                                                color: 'black',
                                                transition: 'background-color 0.3s ease',
                                                borderRadius: '8px',
                                                '&.Mui-selected': {
                                                    bgcolor: 'white',
                                                    color: '#000',
                                                    fontWeight: 'bold',
                                                },
                                                '&:hover': {
                                                    bgcolor: 'gray',
                                                },
                                            },
                                            '& .MuiTypography-root': {
                                                color: 'black',
                                            },
                                            '& .MuiPickersCalendarHeader-root': {
                                                color: '#00bcd4',
                                                fontWeight: 'bold',
                                                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                                                marginBottom: '8px',
                                            },
                                            '& .MuiPickersArrowSwitcher-root': {
                                                color: 'white',
                                            },
                                            '& .MuiDayCalendar-weekDayLabel': {
                                                color: '#bbb',
                                                fontWeight: '600',
                                            },
                                            '& .Mui-disabled': {
                                                color: 'rgba(255, 255, 255, 0.3)',
                                            },
                                            '& .MuiPickersAction-button': {
                                                padding: '10px 20px',
                                                borderRadius: '5px',
                                                transition: 'background-color 0.3s, transform 0.2s',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                },
                                            },
                                            '& .MuiPickersAction-cancel': {
                                                backgroundColor: '#f44336',
                                                color: '#fff',
                                                '&:hover': {
                                                    backgroundColor: '#d32f2f',
                                                },
                                            },
                                            '& .MuiPickersAction-accept': {
                                                backgroundColor: '#4caf50',
                                                color: '#fff',
                                                '&:hover': {
                                                    backgroundColor: '#388e3c',
                                                },
                                            }
                                        }}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <ContactUs />
            <SectionSix />
        </div>
    );
};

export default ContactForm;