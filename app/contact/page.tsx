import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faTimesSquare } from "@fortawesome/free-solid-svg-icons/faTimesSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactForm: React.FC = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row text-black pt-28 bg-white scroll-smooth font-roboto pb-10 min-h-screen px-8 lg:px-20 gap-x-4">
            {/* Sticky Left Section */}
            <div className="w-full lg:w-1/3 bg-white text-black py-8 flex flex-col justify-start gap-8 sticky top-28 lg:h-screen">
                <div className="flex flex-col gap-8 w-full">
                    <p className="tracking-wider"> Nohara Technologies </p>
                    <div className="flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-col gap-8 w-fulg">
                        <div className="flex flex-row gap-x-3 items-start">
                            <div className="h-6 w-6 border border-gray-200 rounded-sm flex items-center justify-center">
                                <FontAwesomeIcon icon={faMessage} className="text-xl" />
                            </div>
                            <div className="flex flex-col gap-y-0.5 tracking-wider">
                                <p className="font-bold">Chat to us</p>
                                <p className="text-sm pb-1">Our friendly team is here to help.</p>
                                <p className="font-semibold text-sm">noharatech.com</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-3 items-start">
                            <div className="h-6 w-6 border border-gray-200 rounded-sm flex items-center justify-center">
                                <FontAwesomeIcon className="text-black text-2xl" icon={faTimesSquare} />
                            </div>
                            <div className="flex flex-col gap-y-0.5 tracking-wider">
                                <p className="font-bold">Visit us</p>
                                <p className="text-sm pb-1">Come say hello at our office HQ.</p>
                                <p className="font-semibold text-sm">Kamalpokhari, Kathmandu</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-3 items-start">
                            <div className="h-6 w-6 border border-gray-200 rounded-sm flex items-center justify-center">
                                <FontAwesomeIcon className="text-black text-2xl" icon={faTimesSquare} />
                            </div>
                            <div className="flex flex-col gap-y-0.5 tracking-wider">
                                <p className="font-bold">Call us</p>
                                <p className="text-sm pb-1">Mon to Fri from 8AM to 5PM.</p>
                                <p className="font-semibold text-sm">+977 9818261855</p>
                                <p className="font-semibold text-sm">+1 343 558 6962</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-2/3 bg-[#BAFE66] py-12 px-6 lg:px-12 flex flex-col justify-center rounded-md lg:rounded-2xl">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wider">
                    Got ideas? We’ve got the skills. Let’s team up.
                </h1>
                <p className="mb-8 font-semibold">Tell us more about yourself and what you’ve got in mind.</p>

                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full border-b-2 p-2 text-lg focus:outline-none bg-transparent border-black placeholder-black"
                    />
                    <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full border-b-2 p-2 text-lg focus:outline-none bg-transparent border-black placeholder-black"
                    />
                    <textarea
                        placeholder="Tell us a little about the project..."
                        rows={3}
                        className="w-full border-b-2 p-2 text-lg focus:outline-none bg-transparent border-black placeholder-black"
                    />

                    <fieldset className="space-y-2">
                        <legend className="font-bold mb-2">How can we help?</legend>
                    </fieldset>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 pb-8">
                        {["Website design", "UX design", "User research", "Content creation", "Strategy & consulting", "Other"].map(
                            (item, index) => (
                                <div key={index} className="flex flex-row gap-x-4 items-center">
                                    <div className="h-4 w-4 bg-black absolute rounded-sm">
                                        <input
                                            type="checkbox"
                                            className="mr-2 h-4 w-4 rounded-xl relative -top-[3px] -left-0.5 hover:top-0 hover:left-0 transition-all duration-100"
                                        />
                                    </div>
                                    <p className="pl-8 text-sm font-semibold"> {item} </p>
                                </div>
                            )
                        )}
                    </div>

                    <button className="hidden md:block relative overflow-hidden text-white bg-black rounded-sm px-5 py-3 tracking-wider text-sm font-bold transition-all duration-500 hover:text-black before:absolute before:bottom-0 before:right-0 before:w-full before:h-full before:bg-white before:z-0 before:transition-transform before:duration-500 before:translate-x-full before:translate-y-full hover:before:translate-x-0 hover:before:translate-y-0 w-full">
                        <span className="relative z-10 tracking-widest">Let&apos;s Get Started</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

