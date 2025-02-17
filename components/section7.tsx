import Image from "next/image";

const SectionSeven: React.FC = () => {
    const landingPageImageAddress: string = 'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/technology-circuit-pattern.jpg?alt=media&token=8c517e0d-dc70-46be-981e-9d27be272b4f';

    return <section  className="flex flex-row pt-24  sub-section overflow-hidden gap-x-12 ">
        <div className="MAIN DIV bg-[#f3f4f1] w-full h-full flex flex-col gap-y-10  border-black pl-20  py-10 flex flex-row gap-x-full" style={{borderTopWidth:"1px"}}>
            <div className="w-full flex flex-row pr-20">
                <p className="flex-[20]">/WE ARE UWWA/</p>
                <p className="flex-[40] text-2xl font-bold" >Team</p>
                <p className="flex-[40]">A full-cycle product design studio from Europe, made of colleagues turned friends who genuinely enjoy working together</p>
            </div>
            <div className="w-4/5 flex flex-row ml-auto gap-x-16">
                <div >
                    <div  style={{width:"100%"}} className="flex flex-col gap-y-4" >
                    <div className="bg-[#d9d6e4] " style={{borderRadius:"5% ", height:"300px"}}>
                    <Image  src={landingPageImageAddress} alt="Diagram"
                    unoptimized={true}
                    height={50}
                    width={50}
                    quality={100}
                    style={{ width: '100%', height: '100%', borderRadius:"10%", }}
                    className="px-10 py-8"
                    ></Image>
                    </div>
                    <p className="font-bold">Collaborations</p>
                    <p className="text-xs leading-5">We have access to best design talent worldwide. Based on your project goal, we strengthen our team witth top-notch UX designers, researchers or web designers</p>
                    </div>
                     
                </div>

                <div >
                    <div  style={{width:"100%"}} className="flex flex-col gap-y-4" >
                    <div className="bg-[#dee0d2] " style={{borderRadius:"5% ", height:"300px"}}>
                    <Image  src={landingPageImageAddress} alt="Diagram"
                    unoptimized={true}
                    height={50}
                    width={50}
                    quality={100}
                    style={{ width: '100%', height: '100%', borderRadius:"10%", }}
                    className="px-10 py-8"
                    ></Image>
                    </div>
                    <p className="font-bold">Collaborations</p>
                    <p className="text-xs leading-5">We have access to best design talent worldwide. Based on your project goal, we strengthen our team witth top-notch UX designers, researchers or web designers</p>
                    </div>
                    <div className="flex flex mt-10">
                        <button className="bg-black text-white py-3 px-4 rounded-full" style={{fontSize:"14px"}}>LinkedIn</button>
                    </div>
                     
                </div>

                <div >
                    <div  style={{width:"100%"}} className="flex flex-col gap-y-4" >
                    <div className="bg-[#e0d2d3] " style={{borderRadius:"5% ", height:"300px"}}>
                    <Image  src={landingPageImageAddress} alt="Diagram"
                    unoptimized={true}
                    height={50}
                    width={50}
                    quality={100}
                    style={{ width: '100%', height: '100%', borderRadius:"10%", }}
                    className="px-10 py-8"
                    ></Image>
                    </div>
                    <p className="font-bold">Collaborations</p>
                    <p className="text-xs leading-5">We have access to best design talent worldwide. Based on your project goal, we strengthen our team witth top-notch UX designers, researchers or web designers</p>
                    </div>
                    <div className="flex flex mt-10">
                        <button className="bg-black text-white py-3 px-4 rounded-l-full" style={{fontSize:"14px"}}>Website</button>
                        <button className="bg-black text-white py-3 px-4 rounded-r-full border-white" style={{fontSize:"14px", borderWidth:"1px"}}>LinkedIn</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
}

export default SectionSeven;