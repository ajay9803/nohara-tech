"use client"

import Image from "next/image";
import { useState } from "react";
import "../../../styles/styles.css";

interface TeamMemberProps {
    name: string;
    role: string;
    imageUrl: string;
    desc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, desc }) => {

    const [showDetails, setShowDetails] = useState<boolean>(false);
    return (
        <div className="flex flex-col gap-y-2 relative">
            <div className="h-[40vh] w-[40vh] bg-transparent flex justify-center items-center relative overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={name}
                    unoptimized={true}
                    height={50}
                    width={50}
                    quality={100}
                    className="object-cover border-2 border-solid border-black"
                    style={{ width: "40vh", height: "40vh" }}
                />
                <div className={`scrollbar-hide hover:cursor-ns-resize overflow-y-scroll flex flex-col p-4 h-[40vh] w-[40vh] bg-[#F9E864] border-2 border-solid border-black absolute bottom-0 right-0 ${showDetails ? '-translate-y-0' : 'translate-y-full'} transition-all duration-1000`}>
                    <p className="text-sm tracking-wider">
                        {desc}
                    </p>
                </div>
            </div>
            <p className="text-sm font-semibold tracking-wider">{name}</p>
            <p className="text-sm tracking-wider text-gray-400">{role}</p>
            <div className="w-full h-0.5 bg-black"></div>
            <div onClick={() => {
                setShowDetails(!showDetails);
                console.log(showDetails);
            }} className="absolute bottom-5 right-0 h-4 w-4 group hover:cursor-pointer">
                <div className={`w-0.5 h-4 bg-black absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${showDetails ? 'rotate-90' : ''} transition-all duration-700`}></div>
                <div className={`h-0.5 w-4 bg-black absolute top-1/3 right-0 translate-y-1/2 ${showDetails ? 'rotate-180' : ''} transition-all duration-700`}></div>
            </div>
        </div>
    );
};

export default TeamMember;
