import Image from "next/image";
import "../../../styles/pages/home/text.css"
import Asterick from "@/components/asterick";
import ServicesSlider from "@/components/services_slider";

const SectionOne: React.FC = () => {

    const landingPageImageAddress: string = 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/technology-circuit-pattern.jpg?alt=media&token=8c517e0d-dc70-46be-981e-9d27be272b4f';

    return <section className="sub-section px-8 lg:px-20 bg-[#fcf7f8] w-full flex flex-col gap-y-5 justify-around pt-28 pb-10">
        <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col w-full md:w-3/5 mr-8 lg:mr-24 text-center">
                <div className="inline-block w-full">
                    <p className="text-3xl md:text-4xl lg:text-7xl font-semibold tracking-wider"> We develop first</p>
                </div>
                <div className="flex items-center justify-between md:justify-around pr-5 w-full">
                    <svg viewBox="0 0 200 150">
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
                    <p className="text-3xl"> class SoftwareS </p>
                    <Asterick></Asterick>
                </div>
            </div>
            <div className="flex-col justify-between w-2/5 uppercase text-xs hidden md:flex">
                <p> <span className="text-[#000814] font-semibold tracking-100">NOHARA TECHNOLOGIES</span> is a software development company specializing in cutting-edge solutions. We help businesses innovate, scale, and achieve their goals through technology. </p>
                <p> Explore Works</p>
            </div>
        </div>
        <ServicesSlider reverse={false}></ServicesSlider>
        <Image className="rounded-2xl" src={landingPageImageAddress}
            height={500}
            width={500}
            alt="Tech - Nohara Technologies"
            quality={100}
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        ></Image>
        <div className="flex flex-col items-start md:flex-row md:items-center gap-y-5 justify-between pt-8">
            <div className="max-w-lg">
                <h1 className="text-4xl font-semibold text-gray-800">
                    Leading SaaS <br /> design innovators
                </h1>
            </div>

            <div className="max-w-md text-gray-500 text-sm">
                <p>
                    We are providing consultations, for free. Get an advice on customer
                    activation, onboarding strategy, retaining products&apos; optimization or
                    growth assessment.
                </p>
                <div className="mt-4 flex">
                    <input
                        type="text"
                        placeholder="Enter email"
                        className="border p-2 rounded-l-md w-full focus:outline-none"
                    />
                    <button className="bg-gray-300 px-4 py-2 rounded-r-md hover:bg-black hover:text-white transition-all duration-700 ease-in">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    </section>
}

export default SectionOne;