"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MovingGrid: React.FC = () => {
    const [gridState, setGridState] = useState<number>(0);
    const textRef = useRef(null);
    const nameRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setGridState(prevState => (prevState === 2 ? 0 : prevState + 1));
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        gsap.fromTo(
            nameRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.5,
                scrollTrigger: {
                    trigger: nameRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <div className="flex flex-col my-16 w-full px-8 md:px-20">
            <div className="w-full flex flex-col md:flex-row gap-3">
                <div className={`h-96 w-full ${gridState === 0 ? 'md:w-[45%]' : 'md:w-[35%]'} flex flex-col justify-between items-end relative transition-all duration-500 ease-in`}>
                    <div
                        className={`absolute left-0 w-[31%] bg-[#EB5951] transition-all duration-500 ease-in rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl
                             ${gridState === 0 ? "h-full bottom-0 delay-300" : gridState === 1 ? "h-[49%] bottom-0" : "h-[49%] bottom-1/2 delay-500"
                            }`}
                    ></div>
                    <div
                        className={`flex bg-black h-[49%] transition-all duration-500 ease-in rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl relative overflow-hidden 
                        ${gridState === 0 ? "w-2/3" : gridState === 1 ? "w-full delay-500" : 'w-2/3'}`}
                    >
                        <Image
                            className="rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl"
                            src="https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/about-us%2FProfessional%20Team%20Brainstorming%20Session.jpeg?alt=media&token=4ae1244a-522d-4c23-9784-35120237c20e"
                            height={500}
                            width={500}
                            alt="Image of Pottery"
                            quality={100}
                            unoptimized
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <Image
                            className={`rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl absolute transition-all ease-in duration-500 
                            ${gridState === 0 ? "-top-full -right-full" : "top-0 right-0"}`}
                            src="https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/about-us%2FProfessional%20Meeting.jpeg?alt=media&token=39eec6f5-9637-4e40-81f1-d23fe0e18612"
                            height={500}
                            width={500}
                            alt="Image of Pottery"
                            quality={100}
                            unoptimized
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className={`flex bg-blue-600 h-[49%] rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl 
                        ${gridState === 0 ? ' w-2/3 transition-all duration-500 ease-in' : gridState === 1 ? 'w-2/3 transition-all duration-500 ease-in' : 'delay-700 w-[75%] transition-all duration-1000 ease-in'}`}>
                        <Image
                            className="rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl transition-all ease-in duration-500"
                            src="https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/about-us%2FCollaborative%20Work%20Setting%20in%20Black%20and%20White.jpeg?alt=media&token=502e2040-ef79-44d5-bd2b-090c55250321"
                            height={500}
                            width={500}
                            alt="Image of Pottery"
                            quality={100}
                            unoptimized
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                </div>
                <div className="flex h-96 w-full gap-x-3">
                    <div className={`${gridState === 0 ? 'w-3/5' : gridState === 1 ? 'w-2/5' : 'w-3/5'} rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl transition-all duration-500 ease-in bg-purple-500`}>
                        <Image
                            className="rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl transition-all ease-in duration-500"
                            src="https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/about-us%2FCollaborative%20Analysis.jpeg?alt=media&token=a4157eab-58de-47a8-ad22-c6fde64313f7"
                            height={500}
                            width={500}
                            alt="Image of Pottery"
                            quality={100}
                            unoptimized
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className={`rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl flex-1 flex relative overflow-hidden transition-all duration-500 bg-yellow-500 ease-in 
                        ${gridState === 0 ? 'h-[100%]' : gridState === 1 ? 'h-[100%]' : 'delay-500 h-[140%]'}`}>
                        <Image
                            className="rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl transition-all ease-in duration-500"
                            src="https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/about-us%2FWarmth%20and%20Laughter%20at%20a%20Coffee%20Gathering.jpeg?alt=media&token=c4aa53e1-842f-4946-8a04-2213ae6caf2b"
                            height={500}
                            width={500}
                            alt="Image of Pottery"
                            quality={100}
                            unoptimized
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row pt-3 w-full">
                <div className="flex flex-col w-[60%] md:w-[45%] pt-8 gap-y-3 mr-10">
                    <p ref={textRef} className="opacity-0">
                        &quot;We enjoy working and hanging out together because our shared values center around communication, responsibility, and sharing cameos of our pets on Instagram chat.&quot;
                    </p>
                    <p ref={nameRef} className="text-sm text-gray-500 opacity-0">
                        Bijina Maharjan - Quality Assurance Lead at Nohara Technologies
                    </p>
                </div>
                <div className={`h-36 hidden md:block ${gridState === 0 ? 'w-[55%]' : gridState === 1 ? 'w-1/3' : 'w-[25.7%]'} bg-[#EB5951] transition-all duration-500 ease-in rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl`}></div>
            </div>
        </div>
    );
};

export default MovingGrid;
