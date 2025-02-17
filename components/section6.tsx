import Image from "next/image";
import Diagram from "../public/diagram.png"

const SectionSix: React.FC = () => {
     const landingPageImageAddress: string = 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/technology-circuit-pattern.jpg?alt=media&token=8c517e0d-dc70-46be-981e-9d27be272b4f';
        return <section  className="flex flex-row pt-24  sub-section overflow-hidden gap-x-12 ">
            <div className="MAIN DIV bg-[#dee0d2] w-full h-full rounded-t-5xl px-20 py-10 flex flex-row gap-x-full" style={{borderTopRightRadius: "8%", borderTopLeftRadius:"8%", }}>
                <div className=" w-1/2">
                <div className="flex flex-col gap-y-80 " style={{columnGap: "full"}}>
                <div className="flex flex-row">
                    <div className="w-2/5 text-xs flex flex-col gap-y-2">
                        <p>Design Audits</p>
                        <p>Development</p>
                    </div>
                    <div className="flex flex-col w-3/5 flex flex-col gap-y-2 ">
                        <p className="font-bold">COMPETERA</p>
                        <p className="text-xs">(Technology)</p>
                    </div>
                </div>
                <div>
                    <Image className="rounded-2xl" src={landingPageImageAddress} alt="Image of Pottery"
                     height={50}
                     width={50}
                     quality={100}
                     unoptimized={true}
                     style={{ width: '40%', height: '50%', objectFit: 'cover'}}
                    ></Image>
                </div>
                </div>
                </div>
                <div className=" w-1/2 flex flex-col gap-y-24">
                    <div className="flex flex-row">
                        <div className="font-semibold flex-[60] gap-y-4 flex flex-col">
                        <p style={{fontSize:"13px"}}  className="text-left">We improved the activation part of the product funnel, a part that many vertical SaaS products struggle to crack. </p>
                        <p style={{fontSize:"13px"}}>We help users to learn how to use Competera more effectively to do their jobs via user segmentation and cever onboarding</p>
                        </div>
                        <div className=" flex-[40] flex flex-col items-center ">
                        <button className="bg-black text-slate-100 py-3 px-4 rounded-full" style={{fontSize:"14px"}}>See Live</button>
                        </div>
                    </div>
                    <div>
                        <Image  src={landingPageImageAddress} alt="Diagram"
                     unoptimized={true}
                     height={50}
                     width={50}
                     quality={100}
                        style={{ width: '100%', height: '80%', borderRadius:"5%"}}
                        ></Image>
                    </div>
                </div>
            </div>
            </section>
}

export default SectionSix;