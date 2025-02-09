"use client";

import React, { useState } from "react";

interface SectionItemProps {
  id: string;
  symbol: string;
  title: string;
  info: string;
  isOpen: boolean;
  toggleOpen: (id: string) => void;
}

const SectionItem: React.FC<SectionItemProps> = ({ id, symbol, title, info, isOpen, toggleOpen }) => {
  return (
    <div
      className="border-b py-4 cursor-pointer"
      style={{ borderBottomColor: "#bcbcbc", transition: "all 1s ease-in-out" }}
      onClick={() => toggleOpen(id)}
    >
      {/* Row for ID, Symbol, and Title */}
      <div className="flex items-start">
        <p style={{ color: "#83847c" }} className="flex-[20]">{id}</p>
        <p style={{ color: "#83847c" }} className="flex-[20]">{symbol}</p>
        <div className="flex-[60] pl-80 flex flex-col gap-y-2">
          <p className="font-semibold">{title}</p>

          <div
            style={{
              maxHeight: isOpen ? "500px" : "0px", 
              opacity: isOpen ? 1 : 0, 
              overflow: "hidden",
              transition: "max-height 1s ease-in-out, opacity 1s ease-in-out",  
            }}
          >
            <p className="text-sm text-gray-600">{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const sectionsData = [
  { id: "01", symbol: "(+)", title: "PRODUCT DESIGN", info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, " },
  { id: "02", symbol: "(+)", title: "UI/UX DESIGN", info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  " },
  { id: "03", symbol: "(+)", title: "GROWTH DESIGN", info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, " },
  { id: "04", symbol: "(+)", title: "MOBILE APP DESIGN", info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, " },
  { id: "05", symbol: "(+)", title: "DESIGN SYSTEMS", info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, " },
  { id: "06", symbol: "(+)", title: "DESIGN AUDITS", info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, " },
  { id: "07", symbol: "(+)", title: "USER RESEARCH", info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, " },
  { id: "08", symbol: "(+)", title: "WEBSITE DESIGN FOR YOUR SAAS", info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, " },
];

const SectionTwo: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id)); // Close if already open, otherwise open new
  };

  return (
    <section
      className="sub-section w-full flex justify-center items-center font-roboto"
      style={{ backgroundColor: "#f3f4f1" }}
    >
      <div className="w-full h-3/4  px-12">
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

export default SectionTwo;
