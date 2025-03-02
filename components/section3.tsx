"use client";

import '../styles/section3.css';
import React, { useState } from "react";
import ServiceCard from './pages/home/service-card';

interface SectionItemProps {
  id: string;
  title: string;
  info: string;
  isOpen: boolean;
  toggleOpen: (id: string) => void;
}

const SectionItem: React.FC<SectionItemProps> = ({ id, title, info, isOpen, toggleOpen }) => {
  return (
    <div
      className="border-b py-4 cursor-pointer border-gray-400 transition-all duration-1000 ease-in-out"
      onClick={() => toggleOpen(id)}
    >
      {/* Row for ID, Symbol, and Title */}
      <div className="flex items-start">
        <p className={`flex-[20] transition-all duration-100 ease-in ${isOpen ? 'text-black font-semibold' : 'text-gray-500'}`}>{`${isOpen ? '/' : ''} ${id} ${isOpen ? '/' : ''}`}</p>
        <p className={` ${isOpen ? 'text-black font-semibold' : 'text-gray-500'} flex-[20] transition-all duration-150 ease-in`}>{isOpen ? "(-)" : "(+)"}</p>
        <div className="flex-[60] pl-20 flex flex-col gap-y-2">
          <p className="font-semibold">{title}</p>

          {/* Content that expands */}
          <div className={`service-content ${isOpen ? 'active' : ''}`}>
            <p className="text-sm text-gray-600">{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const sectionsData = [
  {
    id: "01", title: "WEB DEVELOPMENT", info: "We build modern, scalable, and responsive web applications using the latest technologies like React, Next.js, and Node.js.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2Fwb.png?alt=media&token=7c790199-b77b-47ce-adac-7af7a0bb0b7f',
  },
  {
    id: "02", title: "MOBILE APP DEVELOPMENT", info: "Develop high-performance mobile applications for iOS and Android using Flutter and React Native.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2Fma.png?alt=media&token=09ae36e1-09c6-4765-bfee-551ca4547453',
  },
  {
    id: "03", title: "CLOUD SOLUTIONS", info: "Deploy and scale your applications seamlessly using AWS, Azure, or Google Cloud with robust cloud architectures.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2Fcloud.png?alt=media&token=25dba1a2-8c15-4653-8e05-59fadf7b5fd2',
  },
  {
    id: "04", title: "MACHINE LEARNING & AI", info: "Leverage AI-driven solutions with deep learning, NLP, and predictive analytics to enhance decision-making and automation.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2Fai.png?alt=media&token=145c2290-cfc3-4814-8bc1-06a6ddc39a51',
  },
  {
    id: "05", title: "API DEVELOPMENT & INTEGRATION", info: "Design and integrate powerful RESTful and GraphQL APIs for seamless communication between services.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2Fapi.png?alt=media&token=1b0ddab5-ccc2-4e8f-93a0-cfd5b28381e1',
  },
  {
    id: "06", title: "SOFTWARE TESTING & QA", info: "Ensure software reliability with automated testing, performance analysis, and quality assurance strategies.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2Fqa.png?alt=media&token=3d59dffb-9d47-4547-b4ea-66858fda1376',
  },
  {
    id: "07", title: "UI/UX DESIGN", info: "Craft intuitive and visually appealing user experiences with research-driven UI/UX design, wireframing, and prototyping.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2Fuiux.png?alt=media&token=b3bc95d7-30d6-4b00-ac40-e86457b36f19',
  },
  {
    id: "08", title: "VIDEO CREATION & ANIMATION", info: "Create engaging video content, motion graphics, and animations for marketing, branding, and storytelling.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2Fvideo.png?alt=media&token=84de5f53-6eee-417e-a0e8-4cb8180c3d51',
  },
  {
    id: "09", title: "DIGITAL MARKETING", info: "Enhance your brand’s online presence with SEO, content marketing, social media strategies, and paid advertising.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2Fdg.png?alt=media&token=efd0547a-76a4-4953-8806-7dc1d3d020d8',
  },
  {
    id: "10", title: "E-COMMERCE DEVELOPMENT", info: "Develop secure and scalable e-commerce platforms with seamless user experience and payment gateway integration.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2Fecom.png?alt=media&token=fa42e55c-4711-49f0-9182-29a0591aa366',
  }
];

const SectionThree: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(id);
  };

  return (
    <section className="sub-section px-8 lg:px-20 w-full flex flex-col items-start justify-center font-roboto bg-gray-100 pt-28 pb-10">
      <p className='text-xl tracking-wider pb-5'> / Our Services / </p>
      <div className="w-full h-full hidden lg:block">
        {sectionsData.map((section) => (
          <SectionItem
            key={section.id}
            {...section}
            isOpen={openId === section.id}
            toggleOpen={toggleOpen}
          />
        ))}
      </div>
      <div className="w-full h-full grid grid-cols-2 lg:hidden">
        {sectionsData.map((section) => (
          <ServiceCard key={section.id} title={section.title} desc={section.info} imageUrl={section.imgSrc} />
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
