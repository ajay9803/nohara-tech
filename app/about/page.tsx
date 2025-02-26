"use client";

import Image from "next/image";
import "../../styles/pages/about/styles.css";
import { useEffect, useRef, useState } from "react";
import AnimatedText from "@/components/pages/home/hello";
import PixelGrid from "@/components/pages/about/pixel_grid";

const AboutPage: React.FC = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const [isImageInView, setIsImageInView] = useState<boolean>(false);
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
    const [startTextAnimation, setStartTextAnimation] = useState<boolean>(false);
    const [startYourTextAnimation, setStartYourTextAnimation] = useState<boolean>(false);

    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const [isImageHovered, setIsImageHovered] = useState<boolean>(false);

    const images: string[] = ['https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/user-photos%2Fsagar.jpg?alt=media&token=a6329b29-e9b9-442f-90e0-0f1fa81c13d2',
        'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/user-photos%2FIMG-20211029-WA0012.png?alt=media&token=00573cc8-00d5-4a57-93a5-a9ff4c51a99f'
        , 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/user-photos%2Fmanav.png?alt=media&token=beacd15c-3f3d-4179-8e2e-48da8bb06701'
    ];

    useEffect(() => {

        if (isImageHovered) {
            setInterval(() => {
                if (selectedImageIndex === 2) {
                    setSelectedImageIndex(0);
                } else {
                    setSelectedImageIndex(selectedImageIndex + 1);
                }
            }, 1000);
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && isImageLoaded) {
                    setIsImageInView(true);

                    setTimeout(() => {
                        setStartTextAnimation(true);
                    }, 2000);

                    setTimeout(() => {
                        setStartYourTextAnimation(true);
                    }, 2500);
                }
            },
            { threshold: 0.2 }
        );

        const currentSectionRef = imageRef.current;
        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, [isImageLoaded]);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    const landingPageImageAddress: string =
        "https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/technology-circuit-pattern.jpg?alt=media&token=8c517e0d-dc70-46be-981e-9d27be272b4f";

    return (
        <div className="flex flex-col bg-white pt-28 font-roboto text-black px-8">
            <div className="h-screen flex flex-col items-start relative border-black w-full">
                <div className="h-full w-[60%] flex flex-col tracking-wider gap-y-3">
                    <p className="text-6xl"> Find Your </p>
                    <p className="text-6xl">Fascinating, Unleashing</p>
                    <p className="text-6xl">stories to push brands forward</p>
                    <p>technology.marketing.results</p>
                </div>
                <Image
                    ref={imageRef}
                    className={`rounded-2xl absolute z-10 ${isImageInView && isImageLoaded ? "main-image" : "w-full h-0"
                        }`}
                    src={landingPageImageAddress}
                    height={500}
                    width={500}
                    alt="Image of Pottery"
                    quality={100}
                    unoptimized={true}
                    onLoadingComplete={handleImageLoad}
                />
            </div>
            <div className="w-full flex flex-row py-14 gap-x-6">
                <div className="flex flex-col w-3/5">
                    <AnimatedText text="It takes courage to" css="text-6xl pb-4" duration={70}></AnimatedText>
                    <AnimatedText text="Move People" css="text-6xl" duration={110}></AnimatedText>
                    <div className="flex flex-row pt-14 items-start gap-x-9">
                        <button className="w-64 relative overflow-hidden text-black bg-white rounded-sm px-5 py-3 tracking-wider text-sm border border-solid border-[#5D62FB] font-bold transition-all duration-500 hover:text-white before:absolute before:bottom-0 before:right-0 before:w-full before:h-full before:bg-black before:z-0 before:transition-transform before:duration-500 before:translate-x-full before:translate-y-full hover:before:translate-x-0 hover:before:translate-y-0">
                            <span className="relative z-10 tracking-widest">Explore Us</span>
                        </button>
                        <p>Creative courage fuels winning marketing campaigns. Helping companies find what makes them unique and capturing that story through video.</p>
                    </div>
                </div>
                <div className="flex w-2/5 flex-col items-end">
                    <PixelGrid></PixelGrid>
                    <div onMouseEnter={() => {
                        setIsImageHovered(true);
                        console.log('hello')
                    }} onMouseLeave={() => {
                        setIsImageHovered(false);
                    }} className="h-36 w-36">
                        <Image className="" src={images[selectedImageIndex]}
                            height={300}
                            width={300}
                            alt="Image of Pottery"
                            quality={100}
                            unoptimized={true}
                            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                        ></Image>
                    </div>
                </div>
            </div>
            <div className="h-screen"></div>    
        </div>
    );
};

export default AboutPage;
