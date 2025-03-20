"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo: React.FC = () => {
    const firstTextRef = useRef<HTMLParagraphElement | null>(null);
    const secondTextRef = useRef(null);
    const thirdTextRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { duration: 0.8, ease: "power3.out" },
            scrollTrigger: {
                trigger: firstTextRef.current, // Now the trigger is the first text element
                start: "top 80%", // Adjust this as needed
                toggleActions: "play none none none",
            },
        });

        tl.from(firstTextRef.current, { y: 50, opacity: 0, color: "red" })
            .from(secondTextRef.current, { y: 50, opacity: 0 }, "-=0.7")
            .from(thirdTextRef.current, { y: 50, opacity: 0 }, "-=0.6");
    }, []);

    return (
        <div className="md:h-96 mx-4 bg-[#1D1D1D] rounded-3xl p-4 px-8 py-8 md:p-20 text-white flex flex-col md:flex-row justify-between gap-y-4 gap-x-8 tracking-wider">
            <div className="flex flex-col md:flex-row items-start gap-x-8 flex-1">
                <p ref={firstTextRef} className="text-xs text-gray-300">WHO WE ARE</p>
                <p ref={secondTextRef} className="text-white pt-4 text-4xl font-semibold">
                    your perfect-matched software partner
                </p>
            </div>
            <p ref={thirdTextRef} className="flex-1 self-end pt-10 md:pt-0">
                We are a highly motivated, skilled, and enthusiastic team eager to collaborate with you to transform your aspirations into achievements and attain success.
            </p>
        </div>
    );
};

export default SectionTwo;
