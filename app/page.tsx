import SectionThree from "@/components/section3";
import "../styles/styles.css";
import SectionOne from "@/components/section1";
import SectionTwo from "@/components/section2";
import SectionFour from "@/components/section4";
import SectionSeven from "@/components/section7";
import SectionEight from "@/components/section8";

export default function Home() {

  return (
    <div className="main-container w-full font-roboto bg-white">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionSeven />
      <SectionEight />
    </div>
  );
}