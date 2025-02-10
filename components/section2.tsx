"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatedAsterick } from "./asterick";
import "../styles/section2.css";

const SectionTwo: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setInView(true);
                    }, 1000);
                } else {
                    setInView(false);
                }
            },
            { threshold: 0.2 }
        );

        const currentSectionRef = sectionRef.current;
        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, []);

    useEffect(() => {
        if (inView) {
            setTimeout(() => setActiveStep(1), 0);
            setTimeout(() => setActiveStep(2), 500);
            setTimeout(() => setActiveStep(3), 1000);
            setTimeout(() => setActiveStep(4), 1500);
            setTimeout(() => setActiveStep(5), 2000);
            setTimeout(() => setActiveStep(6), 2500);
        }

    }, [inView]);

    return (
        <section ref={sectionRef} className="sub-section bg-[#F3F4F1] w-full flex justify-start items-center gap-x-10 overflow-hidden">
            <div className={`section2 flex items-center gap-x-10 ${inView ? "animate-slide" : ""}`}>
                <AnimatedAsterick isActive={activeStep >= 1} />
                <p className={`text-[250px] font-semibold text-slide ${activeStep >= 2 ? "active" : ""}`} data-text="We"> We </p>
                <AnimatedAsterick isActive={activeStep >= 3} />
                <p className={`text-[250px] font-semibold text-slide ${activeStep >= 4 ? "active" : ""}`} data-text="are"> are</p>
                <AnimatedAsterick isActive={activeStep >= 5} />
                <p className={`text-[250px] font-semibold text-slide ${activeStep >= 6 ? "active" : ""}`} data-text="Best:"> Best:</p>
            </div>
        </section>
    );
};

export default SectionTwo;
