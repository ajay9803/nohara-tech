"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";
import Calendar from 'react-calendar';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';



import Script from 'next/script';
import { height } from '@fortawesome/free-regular-svg-icons/faAddressBook';
import { TextField } from '@mui/material';


const ContactForm: React.FC = () => {

    const imageUrl="https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/user-photos%2FIMG-20211029-WA0012.png?alt=media&token=00573cc8-00d5-4a57-93a5-a9ff4c51a99f"
    const switzerland = "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/flags%2Fswitzerland.png?alt=media&token=f6cac25b-67e0-4560-92e9-9bb01bb32af2"
    const estonia = "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/flags%2Festonia.jpg?alt=media&token=32ba278c-1d2d-4460-966f-d4eb55ca45fb"
    const norway = "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/flags%2Fnorway.png?alt=media&token=75bea64f-faa6-4505-bb7c-0dce0fdf1694"
    const ukraine = "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/flags%2Fukraine.png?alt=media&token=a22209ef-9ca6-417a-8cc8-9fe631f9f66d"

    const [value, setValue] = React.useState("Sunday");

    return (
        <div className="flex flex-col w-full  text-black pt-20 bg-black  scroll-smooth font-roboto pb-10 min-h-screen  gap-x-4">
           <div className='bg-[#1D1717] w-full pt-10 pb-10 mb-20'>
            <div className="flex flex-row w-full ">
                <div className="first-div w-[45%] ">
                    <div className="flex flex-row  items-start gap-x-16 pt-20 pl-6 justify-start ">
                        <p className="text-[#6b6b6b] font-[900] text-[12px] top-4 relative">LET'S TALK</p>
                        <div className="text-white text-[44px] font-[900]">
                        <p className="">Start with a</p>
                        <p className="">personal</p>
                        <p className="">consultation</p>

                        </div>
                    </div>
                </div>

            {/* 2nd div */}
                <div className="w-full flex flex-row bg-[#1d1d1d] rounded-xl shadow-xl shadow-black">
                    <div className="flex-1  pl-8"> 
                        <Image
                            src={imageUrl}
                            alt={"Photo"}
                            unoptimized={true}
                            height={40}
                            width={50}
                            quality={100}
                            className="object-cover border-2 border-solid border-black"
                            style={{ width: "40vh", height: "40vh" }}
                        />
                        <p className="text-[#d73b3f] font-semibold tracking-wide text-[14px]">Project Manager </p>
                        <p className="text-[28px] text-white">Sagar Prajapati </p>
                        <div className='pb-4 flex flex-col gap-y-2 mt-4'>
                            <div className="flex flex-row text-white font-semibold items-center gap-x-2">
                                <FontAwesomeIcon icon={faClock} className="w-auto text-lg text-white"/>
                                <p className='text-[#6c6c6c] font-[700]'>Discovery Calls</p>
                               
                            </div>
                            <div className=' flex flex-row text-white font-semibold items-center gap-x-2'>
                                <FontAwesomeIcon icon={faVideo} className="w-auto  text-lg text-white " style={{ stroke: "blue", strokeWidth: "2px" }}  />
                                <p className='text-[#6c6c6c] font-[700]'>Web Conferencing Details provided upon <br /> confirmation</p>
                            </div>    
                        </div>
                        <p className='font-open_sans text-white font-[900] text-[16px] tracking-wide'>Discuss your needs and oportunities. Explore <br />how Che IT's solutions can solve your business <br />tech tasks</p>
                    </div> 
                    <div className="flex-1 bg-black text-white overflow-y-auto " style={{scrollbarWidth: 'revert',  // Firefox
                        scrollbarColor: '#4a4a4a transparent',
                        maxHeight: '80vh'}}>
                        <div className='border-b-2 border-[#6c6c6c] px-10 '>
                        <div className='flex flex-col items-center font-[900]'>
                            <p className='text-[#6c6c6c]'>Sagar Prajapati</p>
                            <p className='text-[24px]' >Discovery Call</p>
                        </div>
                        <div className='mt-8 flex flex-col gap-y-4 mb-4'>
                            <div className="flex flex-row text-white font-semibold items-center gap-x-2">
                                <FontAwesomeIcon icon={faClock} className="w-auto text-lg text-white "/>
                                <p className='text-[#6c6c6c] font-[700]'>30 min</p>
                            </div>
                            <div className=' flex flex-row text-white font-semibold items-center gap-x-2'>
                                <FontAwesomeIcon icon={faVideo} className="w-auto  text-lg text-white " style={{ stroke: "blue", strokeWidth: "2px" }}  />
                                <p className='text-[#6c6c6c] font-[700]'>Web Conferencing Details provided upon <br /> confirmation</p>
                            </div>    
                        </div>
                        <p className='font-open_sans text-white  text-[16px] tracking-wide leading-6 mb-4' >Discuss your needs and oportunities.<br /> Explore how Che IT's solutions can solve <br /> your business tech tasks</p>
                        </div>
                    
                        <div className='mt-10 px-10'>
                            {/* <CalendarContainer>
                                <Calendar  />
                            </CalendarContainer> */}
                            {/* Material UI Calendar */}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StaticDatePicker
                                    orientation="portrait"
                                    openTo="day"
                                    sx={{
                                        width:'full',
                                        bgcolor: 'black',
                                        color: 'white',
                                        '& .MuiPickersDay-root': {
                                            color: 'white',
                                            '&.Mui-selected': {
                                                bgcolor: 'white',
                                                color: 'black',
                                            },
                                        },
                                        '& .MuiTypography-root': {
                                            color: 'white',
                                        },
                                        '& .MuiPickersCalendarHeader-root': {
                                            // color: 'white',
                                        },
                                        '& .MuiPickersArrowSwitcher-root': {
                                            color: 'white',
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
           <div className='flex flex-row'>
            <div className='flex-1  text-white flex flex-row px-10 gap-x-4'>
                <div>
                    <p className='text-[14px] flex-grow font-semibold relative top-4'>CONTACT US</p>
                </div>
                <div className='pr-10 '>
                    <div className='pb-10 border-b-2 border-slate-300'>
                        <p className='text-[48px]'>Let's make the web </p>
                        <p className='text-[48px]'>talk about your </p>
                        <p className='text-[48px]'>project</p>
                    </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px] uppercase text-[#b1b0b0]  py-8 border-b-2 border-slate-300">
                {/* Left Column - Representative Offices */}
                <div className="flex flex-col gap-y-4">
                    <p className="uppercase text-[12px] text-[#6c6c6c] font-bold tracking-wide">Representative Offices</p>

                    <div className="flex items-center gap-x-3">
                        <span className="text-xl"><Image
                            src={switzerland}
                            alt={"Photo"}
                            unoptimized={true}
                            height={20}
                            width={20}
                            quality={100}
                            className="object-cover border-2 border-solid rounded-full border-black"
                            style={{ width: "3vh", height: "3vh" }}
                        /></span>
                        <div>
                            <p className="font-bold uppercase">Switzerland, Zürich, 8004</p>
                            <p>BAARERSTRASSE 139 6300 ZUG</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-3">
                    <span className="text-xl"><Image
                            src={estonia}
                            alt={"Photo"}
                            unoptimized={true}
                            height={20}
                            width={20}
                            quality={100}
                            className="object-cover border-2 border-solid rounded-full border-black"
                            style={{ width: "3vh", height: "3vh" }}
                        /></span>
                        <div>
                            <p className="font-bold uppercase">Estonia, Tallinn, 11317</p>
                            <p>KAJAKA 8, OFFICE 26</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-3">
                        <span className="text-xl"><Image
                            src={norway}
                            alt={"Photo"}
                            unoptimized={true}
                            height={20}
                            width={20}
                            quality={100}
                            className="object-cover border-2 border-solid rounded-full border-black"
                            style={{ width: "3vh", height: "3vh" }}
                        /></span>
                        <div>
                            <p className="font-bold uppercase">NORWAY, OSLO, 0173</p>
                            <p>FOUGSTADS GATE 2</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Development Offices */}
                <div className="flex flex-col gap-y-4">
                    <p className="uppercase text-[12px] text-[#6c6c6c] font-bold tracking-wide">Development Offices</p>

                    <div className="flex items-center gap-x-3">
                        <span className="text-xl"><Image
                            src={ukraine}
                            alt={"Photo"}
                            unoptimized={true}
                            height={20}
                            width={20}
                            quality={100}
                            className="object-cover border-2 border-solid rounded-full border-black"
                            style={{ width: "3vh", height: "3vh" }}
                        /></span>
                        <div>
                            <p className="font-bold uppercase">UKRAINE, CHERNIHIV, 14000</p>
                            <p>Kyivs'ka St, 11, office 155</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-3">
                        <span className="text-xl"><Image
                            src={ukraine}
                            alt={"Photo"}
                            unoptimized={true}
                            height={20}
                            width={20}
                            quality={100}
                            className="object-cover border-2 border-solid rounded-full border-black"
                            style={{ width: "3vh", height: "3vh" }}
                        /></span>
                        <div>
                            <p className="font-bold uppercase">Ukraine, Kyiv, 04071</p>
                            <p>Nyzhniy Val Str, 15, office 131</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-3">
                    <span className="text-xl"><Image
                            src={ukraine}
                            alt={"Photo"}
                            unoptimized={true}
                            height={20}
                            width={20}
                            quality={100}
                            className="object-cover border-2 border-solid rounded-full border-black"
                            style={{ width: "3vh", height: "3vh" }}
                        /></span>
                        <div>
                            <p className="font-bold uppercase">Ukraine, Lviv, 79039</p>
                            <p>Shevchenko Str, 120, office 17</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className='mt-10'>
                    <p className='font-semibold text-[14px]'>HELLO@NOHARATECHNOLOGIES.COM</p>
                </div>
            </div>
            </div>
            <div className="flex items-center justify-center bg-black text-white px-4">
            <div className="w-full max-w-2xl p-8 bg-black border border-gray-800 rounded-lg">
                <h2 className="text-3xl ">Get in touch</h2>
                <p className="text-sm text-gray-400 mt-1">
                    OUR TEAM WILL RESPOND TO YOU WITHIN 1 BUSINESS DAY
                </p>
                
                <form  className="mt-6 space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="NAME"
                        // value={form.name}
                        // onChange={handleChange}
                        className="w-full p-3 bg-gray-900 text-white placeholder-gray-500 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="EMAIL"
                        // value={form.email}
                        // onChange={handleChange}
                        className="w-full p-3 bg-gray-900 text-white placeholder-gray-500 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="MESSAGE"
                        // value={form.message}
                        // onChange={handleChange}
                        className="w-full p-3 bg-gray-900 text-white placeholder-gray-500 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 h-32"
                    />

                    {/* Fake reCAPTCHA Box */}
                    <div className="flex items-center space-x-3 bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <input type="checkbox" required />
                        <span>I’m not a robot</span>
                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-6 h-6" />
                    </div>

                    <button
                        type="submit"
                        className=" bg-black-600 w-fit px-4  text-white font-bold py-3 rounded-lg hover:bg-red-700 transition"
                    >
                        Seize the day!
                    </button>
                </form>
            </div>
            </div>
           </div>
        </div>
    );
};

const CalendarContainer = styled.div`
 

.custom-calendar {
    background-color: black;
    color: white;
    border-radius: 8px;
}


`;

export default ContactForm;

