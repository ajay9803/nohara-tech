import SectionThree from "@/components/pages/home/section_three";
import "../styles/styles.css";
import SectionOne from "@/components/pages/home/section_one";
import SectionTwo from "@/components/pages/home/section_two";
import SectionFour from "@/components/pages/home/section_four";
import SectionFive from "@/components/pages/home/section_five";
import SectionSix from "@/components/pages/home/section_six";

export default function Home() {

  return (
    <div className="main-container w-full font-roboto bg-white">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}