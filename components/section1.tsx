import Image from "next/image";
import Asterick from "./asterick";
import ServicesSlider from "./services_slider";

const SectionOne: React.FC = () => {

    const landingPageImageAddress: string = 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/technology-circuit-pattern.jpg?alt=media&token=8c517e0d-dc70-46be-981e-9d27be272b4f';

    return <section className="sub-section bg-[#F3F4F1] w-full flex flex-col justify-around pt-28">
        <div className="flex flex-row justify-between">
            <div className="flex flex-col w-3/5 mr-24 text-center">
                <p className="text-7xl font-semibold tracking-wider"> We develop first</p>
                <div className="flex items-center justify-around pr-5">
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
                    <p className="text-5xl"> class SoftwareS </p>
                    <Asterick></Asterick>
                </div>
            </div>
            <div className="flex flex-col justify-between w-2/5 uppercase text-xs">
                <p> <span className="text-gray-500 font-semibold tracking-100">NOHARA TECHNOLOGIES</span> is a software development company specializing in cutting-edge solutions. We help businesses innovate, scale, and achieve their goals through technology. </p>
                <p> Explore Works</p>
            </div>
        </div>
        <ServicesSlider></ServicesSlider>
        <Image className="rounded-2xl" src={landingPageImageAddress}
            height={500}
            width={500}
            alt="Image of Pottery"
            quality={100}
            unoptimized={true}
            style={{ width: '100%', height: '50%', objectFit: 'cover'}}
        ></Image>
    </section>
}

export default SectionOne;