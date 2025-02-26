import Image from "next/image";
import Asterick from "./asterick";
import ServicesSlider from "./services_slider";
import "../styles/pages/home/text.css"

const SectionOne: React.FC = () => {

    const landingPageImageAddress: string = 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/technology-circuit-pattern.jpg?alt=media&token=8c517e0d-dc70-46be-981e-9d27be272b4f';

    return <section className="sub-section px-8 lg:px-20 bg-white w-full flex flex-col justify-around pt-10 md:pt-28">
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
            alt="Image of Pottery"
            quality={100}
            unoptimized={true}
            style={{ width: '100%', height: '50%', objectFit: 'cover' }}
        ></Image>
    </section>
}

export default SectionOne;