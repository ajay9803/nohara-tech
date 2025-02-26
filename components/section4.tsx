"use client";

import { useEffect, useState, useRef } from "react";
import "../styles/section4.css";
import Image from "next/image";

const SectionFour: React.FC = () => {
    const landingPageImageAddress =
        "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/technology-circuit-pattern.jpg?alt=media&token=8c517e0d-dc70-46be-981e-9d27be272b4f";

    const [currentStep, setCurrentStep] = useState<number>(1);
    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

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
            setCurrentStep((prevStep) => (prevStep === 5 ? 1 : prevStep + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [inView]);

    return (
        <section ref={sectionRef} className="flex px-8 flex-col md:flex-row pt-28 pb-3 sub-section lg:px-20 bg-[#F3F4F1] overflow-hidden gap-x-12 h-full">
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
                <div className="w-full flex flex-col items-start flex-1 pt-6">
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
                    <div className="flex-1 flex-col md:flex-row bg-[#E8E6E2] w-full gap-x-5 h-full rounded-2xl mt-5 relative px-5 py-5 overflow-hidden">
                        <div className="md:w-1/2 rounded-2xl flex flex-col pr-0 md:pr-5 pb-5 md:pb-0">
                            <p className="text-center">We craft intuitive and tailored software experiences that people love. From your idea to a complete product.</p>
                        </div>

                        <div className="w-full md:w-1/2 h-full absolute md:top-0 md:right-0">
                            {[1, 2, 3, 4, 5].map((step) => (
                                <Image
                                    key={step}
                                    className={`rounded-2xl object-cover absolute transition-all duration-1000 ${currentStep === step ? "translate-x-0" : "translate-x-full"
                                        }`}
                                    src={landingPageImageAddress}
                                    layout="fill"
                                    alt="Image of Pottery"
                                    quality={100}
                                    unoptimized={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFour;
