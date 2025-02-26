"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const SectionFive: React.FC = () => {
    const landingPageImageAddress: string = 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/technology-circuit-pattern.jpg?alt=media&token=8c517e0d-dc70-46be-981e-9d27be272b4f';

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 200)
    }, [])

    return <section className={`flex flex-row pt-24 sub-section overflow-hidden gap-x-12 transition-transform duration-700 ease-in out ${isVisible ? "translate-y-0 opacity-100 " : "translate-y-20 opacity-0 "} font-roboto`}>
        <div className="bg-[#d3d6e1] w-full h-full px-20 py-10 flex flex-row gap-x-full" style={{ borderTopRightRadius: "30px", borderTopLeftRadius: "30px", }}>
            <div className="w-1/2">
                <div className="flex flex-col gap-y-80 " style={{ columnGap: "full" }}>
                    <div className="flex flex-row">
                        <div className="w-2/5 text-2xl">
                            <p>New Feature</p>
                        </div>
                        <div className="flex flex-col w-3/5 ">
                            <p className="font-bold">MIRO</p>
                            <p className="text-xs">(Whiteboarding tool)</p>
                        </div>
                    </div>
                    <div className="">
                        <Image className="rounded-2xl" src={landingPageImageAddress} alt="Image of Pottery"
                            height={50}
                            width={50}
                            quality={100}
                            unoptimized={true}
                            style={{ width: '40%', height: '40%', objectFit: 'cover' }}
                        ></Image>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex flex-col gap-y-16 h-full">
                <div className="flex flex-row justify-between w-full gap-x-28">
                    <div className="font-semibold flex-[60] gap-y-4 flex flex-col">
                        <p style={{ fontSize: "13px" }} className="text-left tracking-wide">We helped Miro to continue to disrupt the industry through innovative design, made possible by thorough research of people's needs. </p>
                        <p style={{ fontSize: "13px" }} className="tracking-wide">UWWA supported the research & design of Smart Meetings: a solution to elevate the experience of conducting workshops in Miro. This is the most viral use case which drives a lot of new customers, and it was the biggest company bet for that year</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="bg-black text-slate-100 py-3 px-4 rounded-full" style={{ fontSize: "14px" }}>See Live</button>
                    </div>
                </div>
                <div className="w-full h-1/2">
                    <Image src={landingPageImageAddress} alt="Diagram"
                        unoptimized={true}
                        height={50}
                        width={50}
                        quality={100}
                        style={{ width: '100%', height: '100%', borderRadius: "20px" }}
                    ></Image>
                </div>
            </div>
        </div>
    </section>
}

export default SectionFive;