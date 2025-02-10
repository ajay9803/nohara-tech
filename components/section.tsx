import React from "react";
import { AnimatedAsterick } from "./asterick";

const Section: React.FC = () => {
    return <section className="sub-section bg-[#F3F4F1] w-full flex justify-start items-center gap-x-10">
        <AnimatedAsterick></AnimatedAsterick>
        <p className="text-[250px] font-semibold text-[#DEDEDE]"> We </p>
        <AnimatedAsterick></AnimatedAsterick>
        <p className="text-[250px] font-semibold text-[#DEDEDE]"> are</p>
        <AnimatedAsterick></AnimatedAsterick>
        <p className="text-[250px] font-semibold text-[#DEDEDE]"> Best</p>
    </section>
}

export default Section;