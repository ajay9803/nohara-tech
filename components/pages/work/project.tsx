"use client";

import { IProject } from "@/interfaces/iproject";
import Image from "next/image";
import { useState } from "react";

const ProjectCard: React.FC<{ coverUp: boolean, project: IProject }> = ({ coverUp, project }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`w-full h-[400px] md:min-w-[70vh] md:h-[70vh] border-2 border-solid relative hover:cursor-pointer 
                ${coverUp ? "border-white" : "border-black"} overflow-hidden`}
        >
            {/* Diagonal Lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                    className={`absolute w-[150%] h-[2px] bg-white transition-transform duration-500 
                        ${coverUp && !isHovered ? "rotate-45 visible" : "invisible opacity-0"}`}
                ></div>
                <div
                    className={`absolute w-[150%] h-[2px] bg-white transition-transform duration-500 
                        ${coverUp && !isHovered ? "-rotate-45 visible" : "invisible opacity-0"}`}
                ></div>
            </div>

            {/* Image */}
            <Image
                className={`${coverUp && !isHovered ? "invisible" : "visible"}`}
                src={project.images[0]}
                height={500}
                width={500}
                alt="Image of Pottery"
                quality={100}
                unoptimized={true}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            {/* Hover Overlay */}
            {isHovered && (
                <div
                    className={`absolute bottom-0 left-0 w-full h-32 bg-yellow-300 border-t-2 border-solid 
                        ${coverUp ? "border-white" : "border-black"} p-5 flex flex-col gap-y-1 text-black`}
                >
                    <p className="font-semibold text-2xl"> {project.name} </p>
                    <p>
                        {project.type}, {project.year}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
