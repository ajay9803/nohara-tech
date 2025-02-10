import SectionThree from "@/components/section3";
import "../styles/styles.css";
import SectionOne from "@/components/section1";
import { HEADERTEXT, HEADERTEXTONE, HEADERTEXTTWO } from "@/constants/header";
import SectionTwo from "@/components/section2";

export default function Home() {
  return (
    <div className="px-20 text-black font-roboto bg-[#F3F4F1]">

      {/* Header  */}
      <div className="w-full fixed px-20 py-6 bg-transparent top-0 left-0 flex flex-row justify-between items-center">
        <div className="flex flex-1 justify-start">
          <p className="tracking-wider font-normal"> {HEADERTEXT} </p>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="h-4 w-12 bg-black rounded-3xl"></div>
        </div>
        <div className="flex space-x-9 items-center flex-1 justify-end">
          <p className="text-sm"> {HEADERTEXTONE} </p>
          <button className="text-white font-normal bg-black rounded-full px-5 py-3 tracking-wider text-sm hover:text-black border border-solid border-black hover:bg-transparent transition-all duration-500"> {HEADERTEXTTWO} </button>
        </div>
      </div>
      <div className="main-container w-full bg-white">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  );
}
