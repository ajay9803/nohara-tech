"use client";

import '../styles/section3.css';
import React, { useState } from "react";

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
          <div className={`service-content ${isOpen ? 'active': ''}`}>
            <p className="text-sm text-gray-600">{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const sectionsData = [
  { id: "01", title: "WEB DEVELOPMENT", info: "We build modern, scalable, and responsive web applications using the latest technologies like React, Next.js, and Node.js." },
  { id: "02", title: "MOBILE APP DEVELOPMENT", info: "Develop high-performance mobile applications for iOS and Android using Flutter and React Native." },
  { id: "03", title: "CLOUD SOLUTIONS", info: "Deploy and scale your applications seamlessly using AWS, Azure, or Google Cloud with robust cloud architectures." },
  { id: "04", title: "MACHINE LEARNING & AI", info: "Leverage AI-driven solutions with deep learning, NLP, and predictive analytics to enhance decision-making and automation." },
  { id: "05", title: "API DEVELOPMENT & INTEGRATION", info: "Design and integrate powerful RESTful and GraphQL APIs for seamless communication between services." },
  { id: "06", title: "SOFTWARE TESTING & QA", info: "Ensure software reliability with automated testing, performance analysis, and quality assurance strategies." }
];

const SectionThree: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(id);
  };

  return (
    <section className="sub-section px-20 w-full flex justify-center items-center font-roboto bg-gray-100">
      <div className="w-full h-3/4 px-12">
        {sectionsData.map((section) => (
          <SectionItem
            key={section.id}
            {...section}
            isOpen={openId === section.id}
            toggleOpen={toggleOpen}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
