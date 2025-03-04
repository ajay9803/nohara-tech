"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MovingGrid from "@/components/pages/about/moving_grid";
import SectionTwo from "@/components/pages/about/section_two";

gsap.registerPlugin(ScrollTrigger);

const AboutUsPage: React.FC = () => {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col pt-28 font-roboto">
            <p ref={textRef} className="text-center text-4xl md:text-7xl tracking-wider opacity-0">
                meet the nohara-mates
            </p>
            <MovingGrid />
            <SectionTwo />
        </div>
    );
};

export default AboutUsPage;
