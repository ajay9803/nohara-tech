import Image from "next/image";

const SectionSeven: React.FC = () => {

    return <section className="flex flex-row pt-24 sub-section overflow-hidden gap-x-12 font-roboto px-10 lg:px-20 bg-white">
        <div className="bg-white w-full h-full flex flex-col gap-y-10  border-black gap-x-full" style={{ borderTopWidth: "1px" }}>
            <div className="w-full flex flex-col lg:flex-row justify-between pt-3 gap-y-4">
                <p className="md:flex-[20]">/ WE ARE NOHARAs /</p>
                <p className="md:flex-[40] text-2xl font-bold" >Team</p>
                <p className="md:flex-[40] hidden lg:block text-end">A full-cycled IT Company from Asia, made of colleagues turned friends who genuinely enjoy working together</p>
            </div>
            <div className="w-full lg:w-4/5 grid grid-cols-2 lg:grid-cols-3 ml-auto gap-x-5 lg:gap-x-16">
                <div style={{ width: "100%" }} className="flex flex-col gap-y-4">
                    <div className="bg-[#D9D6E4] flex flex-col justify-center items-center rounded-3xl" style={{ height: "300px" }}>
                        <div className="h-[80%] w-[80%] bg-transparent flex justify-center items-center">
                            <Image
                                src={'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/user-photos%2Fsagar.jpg?alt=media&token=a6329b29-e9b9-442f-90e0-0f1fa81c13d2'}
                                alt="Diagram"
                                unoptimized={true}
                                height={50}
                                width={50}
                                quality={100}
                                className=" object-cover rounded-3xl"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                    <p className="text-normal font-normal tracking-wider"> Chief Executive Officer </p>
                </div>

                <div style={{ width: "100%" }} className="flex flex-col gap-y-4">
                    <div className="bg-[#DEE0D2] flex flex-col justify-center items-center rounded-3xl" style={{ height: "300px" }}>
                        <div className="h-[80%] w-[80%] bg-transparent flex justify-center items-center">
                            <Image
                                src={'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/user-photos%2FIMG-20211029-WA0012.png?alt=media&token=00573cc8-00d5-4a57-93a5-a9ff4c51a99f'}
                                alt="Diagram"
                                unoptimized={true}
                                height={50}
                                width={50}
                                quality={100}
                                className=" object-cover rounded-3xl"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                    <p className="text-normal font-normal tracking-wider"> Senior Software Engineer </p>
                </div>

                <div style={{ width: "100%" }} className="flex flex-col gap-y-4">
                    <div className="bg-[#E0D1D2] flex flex-col justify-center items-center rounded-3xl" style={{ height: "300px" }}>
                        <div className="h-[80%] w-[80%] bg-transparent flex justify-center items-center">
                            <Image
                                src={'https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/user-photos%2Fmanav.png?alt=media&token=beacd15c-3f3d-4179-8e2e-48da8bb06701'}
                                alt="Diagram"
                                unoptimized={true}
                                height={50}
                                width={50}
                                quality={100}
                                className=" object-cover rounded-3xl"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                    <p className="text-normal font-normal tracking-wider"> Frontend Developer </p>
                </div>
            </div>
        </div>
    </section>
}

export default SectionSeven;