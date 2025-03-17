    "use client"
    import {  useRef, useEffect } from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    // import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
    import { faClock } from "@fortawesome/free-regular-svg-icons";
    import { faVideo } from "@fortawesome/free-solid-svg-icons";
    import Image from "next/image";
    import React from "react";
    import styled from 'styled-components';
    import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
    import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
    import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
    import gsap from 'gsap';
    import ContactUs from '@/components/pages/contact/contactus';



    


    const ContactForm: React.FC = () => {

        const containerRef = useRef(null);
        const firstTextRef = useRef<HTMLParagraphElement | null>(null);
        const secondTextRef = useRef<HTMLParagraphElement | null>(null);
        const thirdTextRef = useRef<HTMLParagraphElement | null>(null);
        const fourthTextRef = useRef<HTMLParagraphElement | null>(null);

        const imageUrl="https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/user-photos%2Fsagar%20bg%20remove.png?alt=media&token=d4a8b8e3-1b92-4a9b-bddb-fb896cbbf676"
        const estonia = "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/flags%2Festonia.jpg?alt=media&token=32ba278c-1d2d-4460-966f-d4eb55ca45fb"
        const norway = "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/flags%2Fnorway.png?alt=media&token=75bea64f-faa6-4505-bb7c-0dce0fdf1694"

        const [value, setValue] = React.useState("Sunday");

        useEffect(() => {
            const tl = gsap.timeline({
                defaults: { duration: 0.8, ease: "power3.out" },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 20%",
                    // toggleActions: "play none none none",
                },
            });
    
            tl.from(firstTextRef.current, { y: 50, opacity: 0,  })
            tl.from(secondTextRef.current, { y: 50, opacity: 0,  }, "-=0.7")
            tl.from(thirdTextRef.current, { y: 50, opacity: 0,  },"-=0.7")
            tl.from(fourthTextRef.current, { y: 50, opacity: 0, }, "-=0.7")
               
    
        }, []);

        return (
            <div className="flex flex-col w-full font-opensans text-black pt-20 bg-black  scroll-smooth tracking tracking-wider pb-10 min-h-screen  gap-x-4">
            <div className='bg-[#1D1D1D] w-full min-w-full pt-10 pb-10 mb-20'>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="first-div lg:w-[45%] sm:w-full">
                    <div ref={containerRef} className="flex flex-col  mx-auto w-full  lg:flex-row gap-y-10  items-center lg:items-start lg:gap-x-16 gap-x-10 pt-10 pb-10 sm:pt-6 text-center">
                        <p ref={firstTextRef} className="text-[#6b6b6b] font-[900] sm:text-[10px] lg:text-[12px] top-4 relative">
                            LET'S TALK
                        </p>
                        <div className="text-white font-[900] text-[24px] lg:text-[44px] top-3 relative">
                            <p ref={secondTextRef}>Start with a</p>
                            <p ref={thirdTextRef}>personal</p>
                            <p ref={fourthTextRef}>consultation</p>
                        </div>
                    </div>
                </div>

                {/* 2nd div */}
                <div className="w-full flex flex-col lg:flex-row  bg-[#101010] rounded-xl shadow-xl shadow-black">
                    <div className="flex-1  sm:w-full pl-8 pt-8 sm:flex flex-col sm:items-center lg:items-start  "> 
                        <Image
                            src={imageUrl}
                            unoptimized={true}
                            alt={"Photo"}
                            height={40}
                            width={50}
                            quality={100}
                            className="object-cover"
                            style={{ width: "40vh", height: "40vh" }}
                        />
                        <div
                            className="w-[40vh] py-2 relative bottom-4"
                            style={{
                                background: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.55) 100%)"
                            }}
                        ></div>
                        <p className="text-[#d73b3f] font-semibold tracking-wide text-[14px]">Project Manager </p>
                        <p className="text-[28px] text-white">Sagar Prajapati </p>
                        <div className='pb-4 flex flex-col gap-y-2 mt-4'>
                            <div className="flex flex-row text-white font-semibold items-center gap-x-2">
                                <FontAwesomeIcon icon={faClock} className="w-auto text-lg text-white"/>
                                <p className='text-[#6c6c6c] font-[700]'>Discovery Calls</p>
                            </div>
                            <div className=' flex flex-row text-white font-semibold items-center gap-x-2'>
                                <FontAwesomeIcon icon={faVideo} className="w-auto  text-lg text-white" style={{ stroke: "blue", strokeWidth: "2px" }} />
                                <p className='text-[#6c6c6c] font-[700]'>Web Conferencing Details provided upon <br /> confirmation</p>
                            </div>    
                        </div>
                        <p className='font-open_sans text-white font-[900] text-[16px] tracking-wide'>
                            Discuss your needs and opportunities. Explore <br />
                            how Che IT's solutions can solve your business <br />
                            tech tasks.
                        </p>
                    </div> 
                    <div className="flex-1 w-full sm:w-full pt-8 h-auto lg:h-full bg-black mt-10 lg:mt-0 text-white " 
                        >
                        <div className='border-b-2 border-[#6c6c6c] px-10 flex flex-col py-10 lg:py-0 sm:items-center lg:items-start'>
                            <div className='flex flex-col  w-full  items-center font-[900]'>
                                <p className='text-[#6c6c6c]'>Sagar Prajapati</p>
                                <p className='text-[24px]'>Discovery Call</p>
                            </div>
                            <div className='mt-8 flex flex-col gap-y-4 mb-4'>
                                <div className="flex flex-row text-white font-semibold items-center gap-x-2">
                                    <FontAwesomeIcon icon={faClock} className="w-auto text-lg text-white"/>
                                    <p className='text-[#6c6c6c] font-[700]'>30 min</p>
                                </div>
                                <div className=' flex flex-row text-white font-semibold items-center gap-x-2'>
                                    <FontAwesomeIcon icon={faVideo} className="w-auto  text-lg text-white" style={{ stroke: "blue", strokeWidth: "2px" }} />
                                    <p className='text-[#6c6c6c] font-[700]'>Web Conferencing Details provided upon <br /> confirmation</p>
                                </div>    
                            </div>
                            <p className='font-open_sans text-white text-[16px] tracking-wide leading-6 mb-4'>
                                Discuss your needs and opportunities.<br />
                                Explore how Che IT's solutions can solve <br />
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
                                                color:"white"
                                            },
                                        },
                                    }}
                                    orientation="portrait"
                                    openTo="day"
                                    sx={{
                                        width: '100%',
                                        bgcolor: '#121212',
                                        color: 'white',
                                        borderRadius: '12px',
                                        padding: '12px',
                                        '& .MuiPickersDay-root': {
                                            color: 'white',
                                            transition: 'background-color 0.3s ease',
                                            borderRadius: '8px',
                                            '&.Mui-selected': {
                                                bgcolor: '#00bcd4',
                                                color: '#000',
                                                fontWeight: 'bold',
                                            },
                                            '&:hover': {
                                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                            },
                                        },
                                        '& .MuiTypography-root': {
                                            color: 'white',  
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

            {/* SECOND DIV */}
            <ContactUs/>
            </div>
        );
    };

    const CalendarContainer = styled.div`
    .custom-calendar {
        background-color: #121212; /* Deep black */
        color: #fff; /* White text */
        border-radius: 12px; /* Softer corners */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6); /* Subtle elevation */
        padding: 12px; /* Some breathing space */
        font-family: 'Arial', sans-serif; /* Clean font */
        transition: all 0.3s ease-in-out; /* Smooth hover effect */
    }

    /* Calendar header (month and year area) */
    .custom-calendar .MuiPickersCalendarHeader-root {
        color: #00bcd4; /* Cool cyan highlight */
        font-weight: bold;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* Subtle line */
        margin-bottom: 8px;
    }

    /* Individual date cells */
    .custom-calendar .MuiPickersDay-root {
        color: #fff;
        transition: background-color 0.3s ease;
        border-radius: 6px;
    }

    /* Selected date */
    .custom-calendar .Mui-selected {
        background-color: #00bcd4 !important; /* Bright cyan */
        color: #000 !important; /* Text in contrast */
        font-weight: bold;
    }

    /* Hover effect on dates */
    .custom-calendar .MuiPickersDay-root:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    /* Weekdays (SMTWTFS) */
    .custom-calendar .MuiDayCalendar-weekDayLabel {
        color: #bbb;
        font-weight: 600;
    }

    /* Calendar navigation arrows */
    .custom-calendar .MuiPickersArrowSwitcher-button {
        color: #fff;
        transition: color 0.3s ease;
    }

    .custom-calendar .MuiPickersArrowSwitcher-button:hover {
        color: #00bcd4; /* Highlight */
    }

    /* Month & Year selector */
    .custom-calendar .MuiPickersCalendarHeader-label {
        font-size: 1.2rem;
        font-weight: bold;
    }

    /* Disabled dates */
    .custom-calendar .Mui-disabled {
        color: rgba(255, 255, 255, 0.3);
    }

    /* Extra padding around */
    .custom-calendar {
        padding: 16px;
    }

    `;

    export default ContactForm;