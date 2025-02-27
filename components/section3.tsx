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
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2FDALL%C2%B7E%202025-02-27%2003.56.13%20-%20A%20minimalistic%20and%20simple%20digital%20illustration%20featuring%20a%20code%20snippet%20icon%20(__)%2C%20representing%20WEB%20DEVELOPMENT.%20The%20design%20should%20be%20clean%2C%20modern%2C%20a.webp?alt=media&token=470fae3d-a9a8-466b-be6d-00706851ced8',
  },
  {
    id: "02", title: "MOBILE APP DEVELOPMENT", info: "Develop high-performance mobile applications for iOS and Android using Flutter and React Native.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2FDALL%C2%B7E%202025-02-27%2003.56.18%20-%20A%20minimalistic%20and%20simple%20digital%20illustration%20featuring%20a%20smartphone%20with%20an%20app%20grid%20icon%2C%20representing%20MOBILE%20APP%20DEVELOPMENT.%20The%20design%20should%20be.webp?alt=media&token=fb042686-e53a-4d45-9d7b-8318466be615',
  },
  {
    id: "03", title: "CLOUD SOLUTIONS", info: "Deploy and scale your applications seamlessly using AWS, Azure, or Google Cloud with robust cloud architectures.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2FDALL%C2%B7E%202025-02-27%2003.56.23%20-%20A%20minimalistic%20and%20simple%20digital%20illustration%20featuring%20a%20cloud%20icon%20with%20arrows%20indicating%20data%20flow%2C%20representing%20CLOUD%20SOLUTIONS.%20The%20design%20shoul.webp?alt=media&token=64f9e6f4-e45e-4108-8ebf-e643028082b1',
  },
  {
    id: "04", title: "MACHINE LEARNING & AI", info: "Leverage AI-driven solutions with deep learning, NLP, and predictive analytics to enhance decision-making and automation.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2FDALL%C2%B7E%202025-02-27%2003.56.24%20-%20A%20minimalistic%20and%20simple%20digital%20illustration%20featuring%20a%20brain%20with%20neural%20connections%2C%20representing%20MACHINE%20LEARNING%20%26%20AI.%20The%20design%20should%20be%20cle.webp?alt=media&token=71a23874-b167-4087-ab2f-e4ef0385407b',
  },
  {
    id: "05", title: "API DEVELOPMENT & INTEGRATION", info: "Design and integrate powerful RESTful and GraphQL APIs for seamless communication between services.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2FDALL%C2%B7E%202025-02-27%2003.56.26%20-%20A%20minimalistic%20and%20simple%20digital%20illustration%20featuring%20a%20link%20or%20network%20connection%20icon%2C%20representing%20API%20DEVELOPMENT%20%26%20INTEGRATION.%20The%20design%20sho.webp?alt=media&token=ca8b0d77-f68f-4307-b4e0-fa6f36215eba',
  },
  {
    id: "06", title: "SOFTWARE TESTING & QA", info: "Ensure software reliability with automated testing, performance analysis, and quality assurance strategies.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2FDALL%C2%B7E%202025-02-27%2003.56.29%20-%20A%20minimalistic%20and%20simple%20digital%20illustration%20featuring%20a%20bug%20with%20a%20checkmark%2C%20representing%20SOFTWARE%20TESTING%20%26%20QA.%20The%20design%20should%20be%20clean%2C%20moder.webp?alt=media&token=8599c456-0323-4d75-93da-e06113ad1239',
  },
  {
    id: "07", title: "UI/UX DESIGN", info: "Craft intuitive and visually appealing user experiences with research-driven UI/UX design, wireframing, and prototyping.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2FDALL%C2%B7E%202025-02-27%2003.56.30%20-%20A%20minimalistic%20and%20simple%20digital%20illustration%20featuring%20a%20pencil%20and%20ruler%20crossing%20each%20other%2C%20representing%20UI_UX%20DESIGN.%20The%20design%20should%20be%20clean.webp?alt=media&token=60eab82c-b780-4f72-a829-234ef49a5ebf',
  },
  {
    id: "08", title: "VIDEO CREATION & ANIMATION", info: "Create engaging video content, motion graphics, and animations for marketing, branding, and storytelling.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2FDALL%C2%B7E%202025-02-27%2003.56.32%20-%20A%20minimalistic%20and%20simple%20digital%20illustration%20featuring%20a%20play%20button%20inside%20a%20film%20strip%2C%20representing%20VIDEO%20CREATION%20%26%20ANIMATION.%20The%20design%20should.webp?alt=media&token=6bf2dea3-5a79-44ca-adf4-35f6f995c347',
  },
  {
    id: "09", title: "DIGITAL MARKETING", info: "Enhance your brand’s online presence with SEO, content marketing, social media strategies, and paid advertising.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2FDALL%C2%B7E%202025-02-27%2004.04.52%20-%20A%20minimalistic%20and%20simple%20digital%20illustration%20featuring%20a%20megaphone%20with%20an%20analytics%20graph%2C%20representing%20DIGITAL%20MARKETING.%20The%20design%20should%20be%20cle.webp?alt=media&token=ef6102fb-71da-4ed5-aff2-d43438a74122',
  },
  {
    id: "10", title: "E-COMMERCE DEVELOPMENT", info: "Develop secure and scalable e-commerce platforms with seamless user experience and payment gateway integration.",
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/services%2FDALL%C2%B7E%202025-02-27%2004.04.53%20-%20A%20minimalistic%20and%20simple%20digital%20illustration%20featuring%20a%20shopping%20cart%20with%20a%20gear%20symbol%2C%20representing%20E-COMMERCE%20DEVELOPMENT.%20The%20design%20should%20be.webp?alt=media&token=079f7483-c03a-4520-9bb0-4f78c7edcce5',
  }
];

const SectionThree: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(id);
  };

  return (
    <section className="sub-section px-8 lg:px-20 w-full flex justify-center items-center font-roboto bg-gray-100 pt-28 pb-10">
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
