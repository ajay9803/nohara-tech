import SectionTwo from "@/components/section2";
import "../styles/styles.css";

export default function Home() {
  return (
    <div className="px-10 bg-gray-100 text-black font-roboto">
      <div className="w-full fixed px-14 py-6 bg-transparent top-0 left-0 flex flex-row justify-between items-center">
        <div className="flex flex-1 justify-start">
          <p className="tracking-wider font-normal"> Nohara Technologies</p>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="h-4 w-12 bg-black rounded-3xl"></div>
        </div>
        <div className="flex space-x-9 items-center flex-1 justify-end">
          <p className="text-sm">Book A Call</p>
          <button className="text-white font-normal bg-black rounded-full px-5 py-3 tracking-wider text-sm hover:text-black border border-solid border-black hover:bg-transparent transition-all duration-500"> Let's Connect </button>
        </div>
      </div>
      <div className="main-container w-full bg-white">
        <section className="sub-section bg-gray-100 w-full flex flex-col pt-28">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p> We develop first</p>
              <div className="flex items-center justify-around">
                <svg viewBox="0 0 200 150" width="200" height="100">
                  <path d="M 20 90 
                    C 40 90, 50 80, 50 60 
                    C 50 40, 60 30, 70 30 
                    C 80 30, 90 40, 90 60 
                    C 90 80, 100 90, 110 90 
                    C 120 90, 130 90, 150 90
                    M 150 90
                    L 145 85
                    M 150 90
                    L 145 95" />
                </svg>
                <p> class softwares </p>
                <div className="h-10 w-10 min-h-10 min-w-10 bg-orange-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
        <SectionTwo/>
        <section className="sub-section bg-blue-400 w-full flex justify-center items-center">
          <p> Section 1</p>
          <p> Hello 1</p>
        </section>
      </div>
    </div>
  );
}
