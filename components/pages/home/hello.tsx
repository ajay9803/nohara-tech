"use client";

import React, { useEffect, useState, useRef } from "react";
import "../../../styles/pages/home/text.css";

const fonts = [
    "font-serif",
    "font-sans",
    "font-mono",
    "font-bold",
    "font-roboto",
    "font-light",
    "font-play",
];

const AnimatedText: React.FC<{ text: string; css: string, duration: number }> = ({ text, css, duration }) => {
    const [fontClasses, setFontClasses] = useState(Array(text.length).fill("font-light"));
    const [visibility, setVisibility] = useState(Array(text.length).fill(false));
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.5 }
        );

        if (node) observer.observe(node);

        return () => {
            if (node) observer.unobserve(node);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const animateCharacter = (index: number) => {
            let count = 0;
            const maxChanges = 3; // Each character changes fonts 3 times

            // Make the character visible immediately
            setVisibility((prev) => {
                const newVisibility = [...prev];
                newVisibility[index] = true;
                return newVisibility;
            });

            const interval = setInterval(() => {
                setFontClasses((prev) => {
                    const newFonts = [...prev];
                    newFonts[index] = fonts[Math.floor(Math.random() * fonts.length)];
                    return newFonts;
                });
                count++;

                if (count >= maxChanges) {
                    clearInterval(interval);

                    // Start animating the next character after this one finishes
                    if (index + 1 < text.length) {
                        setTimeout(() => animateCharacter(index + 1), duration);
                    }
                }
            }, duration); // Time between font changes
        };

        // Start animation for the first character
        animateCharacter(0);
    }, [isVisible, text, duration]);

    return (
        <h1 ref={ref} className={css}>
            {text.split("").map((char: string, index: number) => (
                <span
                    key={index}
                    className={`${fontClasses[index]} transition-opacity duration-300 ${visibility[index] ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {char}
                </span>
            ))}
        </h1>
    );
};

export default AnimatedText;

export const HelloText: React.FC<{ text: string, css: string }> = ({ text, css }) => {
    const [fontClasses, setFontClasses] = useState(Array(text.length).fill("font-light"));
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.5 }
        );

        if (node) observer.observe(node);

        return () => {
            if (node) observer.unobserve(node);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const animationCounts = text.split("").map((_, index) => index + 5);

        text.split("").forEach((_, index) => {
            let count = 0;
            const interval = setInterval(() => {
                setFontClasses((prev) => {
                    const newFonts = [...prev];
                    newFonts[index] = fonts[Math.floor(Math.random() * fonts.length)];
                    return newFonts;
                });
                count++;
                if (count >= animationCounts[index]) {
                    clearInterval(interval);
                    setFontClasses((prev) => {
                        const newFonts = [...prev];
                        newFonts[index] = fonts[Math.floor(Math.random() * fonts.length)];
                        return newFonts;
                    });
                }
            }, Math.floor(Math.random() * (150 - 80 + 1)) + 80);
        });
    }, [isVisible, text]);

    return (
        <h1 ref={ref} className={css}>
            {text.split("").map((char: string, index: number) => (
                <span key={index} className={fontClasses[index]}>{char}</span>
            ))}
        </h1>
    );
}
