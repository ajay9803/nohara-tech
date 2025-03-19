"use client";

import { useEffect, useState, useRef } from "react";
import "../../../styles/section4.css";
import Image from "next/image";

const SectionFour: React.FC = () => {
    const imageUrls = [
        "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/steps%2Fstep1.png?alt=media&token=a72aceb9-1de9-4bbb-86f3-769fd9b406c9",
        "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/steps%2Fsteep%202%20project%20planning.png?alt=media&token=7c50ee28-bfb1-4533-9da3-9a3d1d0ab035",
        "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/steps%2Fstep3.png?alt=media&token=39192fd8-49f2-43d1-bdf2-6f012fdc0a8c",
        "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/steps%2Fstep%204.png?alt=media&token=d3f2ca83-e386-4eb0-bdf7-7a79d2c672ef",
        "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/steps%2Fstep%205.png?alt=media&token=1e2be9cf-6183-4f90-b918-513a2c76bae7"
    ];

    const stepTitles = [
        "Requirement Gathering & Project Planning",
        "Preparing Proposal & Project Kickoff",
        "Designing UI/UX & Developing the Software",
        "Testing Software, Fixing Bugs & Client Review",
        "Deploying Software, Delivering Final Project & Support"
    ];

    const stepTexts = [
        "Understanding client needs, defining features, choosing the tech stack, and creating a project roadmap with milestones.",
        "Drafting a proposal with scope and budget, signing a contract, assigning the development team, and officially starting the project.",
        "Creating wireframes and UI/UX designs, coding core functionalities, and sharing regular progress updates with the client.",
        "Conducting functional and security testing, fixing bugs, and making improvements based on client feedback and reviews.",
        "Deploying the software, providing documentation and training, offering post-launch support, and collecting client feedback."
    ];

    const [currentStep, setCurrentStep] = useState<number>(1);
    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!inView) return;

        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setCurrentStep((prevStep) => (prevStep === 5 ? 1 : prevStep + 1));
                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [inView]);

    return (
        <div className="flex flex-col bg-[#F3F4F1] px-8 lg:px-20 sub-section min-h-screen font-opensans tracking-wider">
            <section ref={sectionRef} className="flex flex-col md:flex-row pt-28 pb-3 overflow-hidden gap-x-12">
                <p className="text-gray-400 text-sm w-full pb-5 md:w-[15%]">/ HOW IT WORKS /</p>
                <div className="w-full lg:w-[85%] flex flex-col gap-y-5 flex-1">
                    <div className="flex flex-row gap-x-7 lg:gap-x-28 justify-between">
                        <p className="w-full md:w-[35%] font-semibold tracking-wider">
                            Crafting Growth Through SaaS with Nohara Technologies
                        </p>
                        <p className="w-1/2 text-sm text-gray-500 tracking-wider hidden md:block">
                            Elevate your journey with Nohara Technologies: Craft, Enhance, Extend. Tailored solutions, from idea to execution, for businesses seeking intuitive experiences and growth. Choose Nohara Technologies to transform your business vision into reality.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start pt-6">
                        <div className="flex flex-row items-center w-full gap-x-10">
                            <p className="text-3xl font-semibold w-1/3 hidden md:block">Make your idea ALIVE</p>
                            <div className="flex flex-col w-full md:w-2/3 justify-between gap-y-5 h-full py-2">
                                <div className="h-5 w-full rounded-2xl bg-[#E8E6E2] relative">
                                    <div
                                        style={{ width: `${currentStep * 20}%` }}
                                        className="h-5 top-0 absolute bg-black rounded-2xl transition-all duration-1000"
                                    ></div>
                                </div>
                                <div className="flex text-sm justify-between">
                                    <div className="flex gap-x-3">
                                        {[1, 2, 3, 4, 5].map((step) => (
                                            <div
                                                key={step}
                                                className={`relative w-10 text-end transition-all duration-1000 overflow-hidden ${currentStep === step ? "w-16 font-semibold" : "w-9"
                                                    }`}
                                            >
                                                <p
                                                    className={`absolute transition-all duration-1000 ${currentStep === step ? "left-0 font-semibold" : "-left-60 font-normal"
                                                        }`}
                                                >
                                                    Step
                                                </p>{" "}
                                                / {step} /
                                            </div>
                                        ))}
                                    </div>
                                    <p className="hidden md:block">PROGRESS {currentStep * 20}%</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex-col md:flex-row bg-[#E8E6E2] min-h-96 w-full gap-x-5 rounded-2xl mt-5 relative px-5 py-5 overflow-hidden">
                            <div className="md:w-1/2 h-full rounded-2xl flex flex-col pr-0 md:pr-5 pb-5 md:pb-0 relative">
                                <p className={`text-lg font-semibold text-center transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                                    {stepTitles[currentStep - 1]}
                                </p>
                                <p className={` mt-5 text-md text-center w-full transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                                    {stepTexts[currentStep - 1]}
                                </p>
                            </div>

                            <div className="w-full md:w-1/2 h-full absolute md:top-0 md:right-0">
                                {[1, 2, 3, 4, 5].map((step) => (
                                    imageUrls[step - 1] && (
                                        <Image
                                            key={step}
                                            className={`rounded-2xl object-cover absolute transition-all duration-1000 ${currentStep === step ? "translate-x-0" : "translate-x-full"}`}
                                            src={imageUrls[step - 1]}
                                            layout="fill"
                                            alt={`Step ${step} Image`}
                                            quality={100}
                                            unoptimized={true}
                                        />
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex flex-col md:flex-row gap-y-6 items-start justify-between py-20">
                <div className="max-w-lg">
                    <h1 className="text-4xl font-semibold text-gray-800 flex items-center">
                        Recent projects
                    </h1>
                </div>

                <div className="max-w-md text-gray-500 text-sm">
                    <p>
                        Explore our portfolio of impactful projects, where we’ve harnessed
                        design innovation to shape intuitive SaaS solutions. Discover how
                        we’ve helped businesses craft remarkable user experiences, from MVP
                        design to product transformation, delivering stunning UI and lasting
                        success.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;