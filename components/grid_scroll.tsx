"use client";

import { useEffect, useState, useRef } from "react";

const Grid3DScroll = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.2 } // Trigger when 20% of the grid is visible
        );

        if (gridRef.current) observer.observe(gridRef.current);

        return () => {
            if (gridRef.current) observer.unobserve(gridRef.current);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (isInView) setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isInView]);

    const getTransform = (index: number) => {
        const rotateX = isInView ? Math.max(30 - scrollY * 0.05, 0) : 30;
        return `rotateX(${rotateX}deg) translateZ(${index * 10}px)`;
    };

    return (
        <div className="min-h-[200vh] flex items-center justify-center bg-black">
            <div ref={gridRef} className="grid grid-cols-3 gap-6 perspective-[1000px]">
                {["Google", "Instagram", "Awwwards", "Behance", "LinkedIn", "Apple"].map(
                    (item, index) => (
                        <div
                            key={index}
                            className="w-32 h-32 flex items-center justify-center text-white font-bold uppercase 
                         bg-gray-800 rounded-lg shadow-lg transition-transform duration-500"
                            style={{ transform: getTransform(index) }}
                        >
                            {item}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Grid3DScroll;
