"use client"

import ProjectCard from '@/components/pages/work/project';
import '../../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import "../../styles/pages/work/styles.css";
import { IProject } from '@/interfaces/iproject';

const WorkPage: React.FC = () => {

    const [coverUp, setCoverUp] = useState<boolean>(false);

    const projects: IProject[] = [
        {
            name: "Pottery House",
            year: 2024,
            type: "Web Application",
            techStack: ["Next.js", "Firebase", "Tailwind CSS"],
            images: ['https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/projects%2FScreenshot%202025-02-26%20220846.png?alt=media&token=ae2c46c9-cf42-4607-bb0e-c4401b51a4f5',
                'http://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/projects%2FScreenshot%202025-02-26%20220929.png?alt=media&token=a7d7ed59-7008-49e0-9cfd-26410df01fb9'
            ],
        },
        {
            name: "AS Tech International",
            year: 2023,
            type: "Website",
            techStack: ["Next.js", "Firebase", "Tailwind CSS"],
            images: ['https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/projects%2FScreenshot%202025-02-26%20225419.png?alt=media&token=9e1c6985-da7d-46df-817c-ec7d41ae9210'],
        },
        {
            name: "Agro Nepal",
            year: 2024,
            type: "Mobile Application",
            techStack: ["Flutter", "Node.js", "Express", "MongoDb"],
            images: ['https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/projects%2FMessenger_creation_5715374651904368.jpeg?alt=media&token=7145d8e8-db35-4b8d-a8d3-8b600a182532'],
        },
    ];
    return (
        <div className={`scrollbar-hide px-8 md:px-0 md:h-screen w-full pt-20 flex items-center font-play md:overflow-x-auto md:overflow-y-hidden flex-nowrap ${coverUp ? 'bg-[#3973A6]' : 'bg-transparent'}`}>
            <div className={`mr-10 min-w-[80vw] h-[60vh] hidden md:flex flex-row text-7xl justify-center items-center tracking-widest font-bold ${coverUp ? 'text-outline border border-solid border-white' : 'text-filled'}`}>
                <div className={`${coverUp ? 'visible' : 'invisible'} h-full w-20 border border-solid border-white overflow-hidden relative`}>
                    <div className='h-[100vh] w-40 flex flex-col justify-between absolute -top-10 -left-9'>
                        {Array.from({ length: 70 }).map((_, index) => (
                            <div key={index} className="h-[1px] w-40 bg-white -rotate-45"></div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-1 flex-col gap-y-5 px-1'>
                    <p> Creatures of Culture. </p>
                    <p> Masters of Digital. </p>
                    <p> Futuristic DNA. </p>
                </div>
                <div className={`${coverUp ? 'visible' : 'invisible'} h-full w-20 border border-solid border-white overflow-hidden relative`}>
                    <div className='h-[100vh] w-40 flex flex-col justify-between absolute -top-10 -left-9'>
                        {Array.from({ length: 70 }).map((_, index) => (
                            <div key={index} className="h-[1px] w-40 bg-white -rotate-45"></div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='hidden md:block fixed bottom-0 right-0'>
                <FontAwesomeIcon onClick={() => {
                    if (coverUp) { 
                        setCoverUp(false);
                    } else {
                        setCoverUp(true);
                    }
                }} className='hover:cursor-pointer text-3xl text-black' icon={faEye}></FontAwesomeIcon>
            </div>
            <div className="gap-y-8 md:gap-y-0 flex flex-col md:flex-row items-center w-full min-h-screen pt-10">
                {projects.map((project: IProject, index: number) => (
                    <ProjectCard key={index} coverUp={coverUp} project={project} />
                ))}

                {/* Last Div */}
                <div className={`${coverUp ? 'block' : 'hidden'} sm:hidden h-[70vh] w-20 border border-solid border-white overflow-hidden relative`}>
                    <div className='h-[100vh] w-40 flex flex-col justify-between absolute -top-10 -left-9'>
                        {Array.from({ length: 70 }).map((_, index) => (
                            <div key={index} className="h-[1px] w-40 bg-white -rotate-45"></div>
                        ))}
                    </div>
                </div>
            </div>

        </div >
    );
};

export default WorkPage;