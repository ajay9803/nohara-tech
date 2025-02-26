"use client";
import { useEffect, useRef } from "react";
import "../styles/section1.css";

const services: string[][] = [
    ["Cloud", "Computing"],
    ["Cybersecurity", "Services"],
    ["Blockchain", "Technology"],
    ["IoT", "Integration"],
    ["Software", "Development"],
    ["Machine", "Learning"],
    ["Tech", "Consulting"],
    ["Smart", "Automation"],
    ["Digital", "Transformation"],
    ["SaaS", "Platforms"]
];

const ServicesSlider: React.FC<{ reverse: boolean }> = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const clone = slider.cloneNode(true) as HTMLDivElement;
        clone.setAttribute("aria-hidden", "true");
        slider.parentElement?.appendChild(clone);
    }, []);

    return (
        <div id="services-slider" className="relative w-full overflow-hidden flex">
            <div ref={sliderRef} className="slider flex gap-0 text-gray-500 font-semibold tracking-wider animate-scroll">
                {services
                    .map((subServices, index) => (
                        <div key={index} className="slide flex flex-row items-center">
                            {subServices.map((service: string, idx: number) => (
                                <div
                                    key={idx}
                                    className={`flex items-center justify-center w-32 px-7 py-2 ${idx === 0 ? "bg-black text-white" : "bg-white text-black"
                                        }`}
                                >
                                    <p className="tracking-wider text-[13px] text-center">{service}</p>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ServicesSlider;
