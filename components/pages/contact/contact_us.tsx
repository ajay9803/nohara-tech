'use client'

import { db } from "../../../app/firebaseConfig"
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useContext } from "react";
// import { DateContext } from '../../../app/contact/page';


const addDataToFireStore = async (name: string, email: string, message: string) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            email: email,
            message: message,
        })
        console.log("Document written with ID: ", docRef)
        return true;
    }
    catch (err) {
        console.error("Error adding document: ", err)
        return false;
    }
}

const ContactUs: React.FC = () => {

    // const selectedDate = useContext(DateContext) as string;

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
        date: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const added = await addDataToFireStore(userInput.name, userInput.email, userInput.message);
        if (added) {
            setUserInput({
                name: "",
                email: "",
                message: "",
                date: " "

            });
            // toast.success("");

        } else {
            toast.error("Failed to store data in Firebase.");
        }

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

        console.log(serviceID, templateID, userID, "these are the ids");

        try {
            const emailParams = {
                name: userInput.name,
                email: userInput.email,
                message: userInput.message,
                // date: selectedDate || "No date selected",
                // to_email: manavkoirala08@gmail.com, braps1010@gmail.com,
            };

            // Send email using EmailJS
            const res = await emailjs.send(serviceID, templateID, emailParams, userID);
            console.log("Email sent successfully", emailParams)
            if (res.status === 200) {
                toast.success("Message sent successfully!");

                // Store data in Firebase

            }
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error("Failed to send message. Please try again later.");
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='flex flex-col lg:flex-row bg-red-100  '>
                <div className='flex-1   text-white flex justify-center  lg:py-20 py-10 flex-row lg:px-10 px-2 gap-x-4'
                    style={{
                        background: "linear-gradient(to right, black, rgba(22,22,22,  0.9) 100%)"
                    }}>
                    <div className='hidden lg:block'>
                        <p className='lg:text-[14px] text-[10px] flex-grow font-semibold relative top-4'>CONTACT US</p>
                    </div>
                    <div className='lg:pr-10 '>
                        <div className='pb-10 border-b-2 lg:text-[48px] text-[28px] top-2 relative border-slate-300'>
                            <p className=''>Let&apos;s make the web </p>
                            <p className=''>talk about your </p>
                            <p className=''>project</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px] uppercase text-[#b1b0b0]  py-8 border-b-2 border-slate-300">
                            {/* Left Column - Representative Offices */}
                            <div className="flex flex-col gap-y-4">
                                <p className="uppercase text-[12px] text-[#6c6c6c] font-bold tracking-wide">Representative Offices</p>

                                <div className="flex items-center gap-x-3">
                                    <div>
                                        <p className="font-bold uppercase"> Canada, Ottawa </p>
                                        {/* <p>BAARERSTRASSE 139 6300 ZUG</p> */}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Development Offices */}
                            <div className="flex flex-col gap-y-4">
                                <p className="uppercase text-[12px] text-[#6c6c6c] font-bold tracking-wide">Development Offices</p>

                                <div className="flex items-center gap-x-3">
                                    <div>
                                        <p className="font-bold uppercase"> Nepal, Kathmandu</p>
                                        {/* <p>Kyivs'ka St, 11, office 155</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p className='font-semibold lg:text-[14px] text-[10px]'>HELLO@NOHARATECHNOLOGIES.COM</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center bg-[#030303] text-white px-4 ">
                    <div className="lg:w-9/12  p-8 ">
                        <h2 className="text-3xl font-bold">Get in touch</h2>
                        <p className="text-[12px] text-gray-400 font-bold mt-1">
                            OUR TEAM WILL RESPOND TO YOU WITHIN 1 BUSINESS DAY
                        </p>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-[12px]">
                            <input
                                type="text"
                                id="name"
                                placeholder="NAME"
                                value={userInput.name}  // Using userInput directly
                                onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}  // Update name in userInput
                                className="w-full p-3 pl-5 bg-[#1F1F1F] text-white placeholder-gray-500 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                required
                            />

                            <input
                                type="email"
                                id="email"
                                placeholder="EMAIL"
                                value={userInput.email}  // Using userInput directly
                                onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}  // Update email in userInput
                                className="w-full p-3 pl-5 bg-[#1F1F1F] text-white placeholder-gray-500 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                required
                            />

                            <textarea
                                id="message"
                                placeholder="MESSAGE"
                                value={userInput.message}  // Using userInput directly
                                onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}  // Update message in userInput
                                className="w-full p-3 pl-5 bg-[#1F1F1F] text-white placeholder-gray-500 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 h-32"
                            />

                            {/* <p>Date: {selectedDate}</p> */}
                            {/* Fake reCAPTCHA Box
                            <div className="flex items-center w-fit space-x-3 bg-black p-4 rounded-lg border border-slate-500">
                                <div className='p-3 bg-black border-2 border-slate-400 hover:border-slate-700 transition-all duration-300'></div>
                                <span>I’m not a robot</span>
                                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-6 h-6" />
                            </div> */}

                            <button
                                type="submit"
                                className=" bg-black-600 border border-red-700 transition-all duration-300 w-fit px-4  text-white font-bold py-3 rounded-lg hover:bg-red-700 "

                            >
                                Seize the day!
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;