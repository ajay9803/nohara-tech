import Image from "next/image";

const SectionThree: React.FC = () => {
    return <div className="flex flex-col w-full px-8 md:px-20 py-24 font-roboto">
        <p> OUR TEAM </p>
        <p className="text-center pt-5 md:pt-0 text-2xl md:text-7xl font-semibold tracking-wider leading-[1.4]"> what makes difference</p>
        <p className="text-center text-2xl md:text-7xl font-semibold tracking-wider"> is People </p>
        <div className="flex flex-col md:flex-row h-[1200px] md:h-[600px] mt-16 gap-5">
            <div className="flex-1 gap-y-3 h-full relative">
                <div className=" bg-white p-10 flex flex-col absolute left-0 top-0 h-[49%] w-full transition-all duration-500 ease-in hover:h-full border border-solid border-gray-600 rounded-3xl hover:rounded-sm -z-0 hover:z-10 group cursor-pointer">
                    <p className="text-xl tracking-wider font-semibold group-hover:text-2xl transition-all duration-500 ease-in group-hover:pb-2"> Sagar Sunar </p>
                    <p> CEO/Co-founder</p>
                    <Image
                        className="rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl absolute bottom-0 right-0 w-1/2 group-hover:w-2/3 transition-all duration-500 ease-in"
                        src="https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/about-us%2Fimage-removebg-preview.png?alt=media&token=4b5296b0-88c7-4563-a272-3027e7b55c80"
                        height={200}
                        width={200}
                        alt="Image of Pottery"
                        quality={100}
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="bg-white p-10 flex flex-col absolute left-0 bottom-0 h-[49%] w-full transition-all duration-500 ease-in hover:h-full border border-solid border-gray-600 rounded-3xl hover:rounded-sm">
                    <p className="text-xl tracking-wider font-semibold group-hover:text-2xl transition-all duration-500 ease-in group-hover:pb-2"> Sagar Prajapati </p>
                    <p> Project Manager/Co-founder</p>
                    <Image
                        className="rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl absolute bottom-0 right-0 w-1/2 group-hover:w-2/3 transition-all duration-500 ease-in"
                        src="https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/about-us%2Fimage-removebg-preview%20(2).png?alt=media&token=dde200e9-2cd6-45fe-b13a-21619c22ca8f"
                        height={200}
                        width={200}
                        alt="Image of Pottery"
                        quality={100}
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <div className="flex-1 gap-y-3 h-full relative">
                <div className="bg-white overflow-hidden p-10 flex flex-col absolute left-0 top-0 h-[49%] w-full transition-all duration-500 ease-in hover:h-full border border-solid border-gray-600 rounded-3xl hover:rounded-sm hover:rounded-sm -z-0 hover:z-10 group cursor-pointer">
                    <p className="text-xl tracking-wider font-semibold group-hover:text-2xl transition-all duration-500 ease-in group-hover:pb-2"> Manav Koirala </p>
                    <p> Senior Developer </p>
                    <Image
                        className="rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl absolute -bottom-5 right-0 w-1/2 group-hover:w-2/3 transition-all duration-500 ease-in scale-110"
                        src="https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/about-us%2Fimage-removebg-preview%20(3).png?alt=media&token=7fb6554d-be80-4f96-b0c5-0ff5e6794e82"
                        height={200}
                        width={200}
                        alt="Image of Pottery"
                        quality={100}
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="bg-white p-10 flex flex-col absolute left-0 bottom-0 h-[49%] w-full transition-all duration-500 ease-in hover:h-full border border-solid border-gray-600 rounded-3xl hover:rounded-sm">
                    <p className="text-xl tracking-wider font-semibold group-hover:text-2xl transition-all duration-500 ease-in group-hover:pb-2"> Bijina Maharjan </p>
                    <p> QA Lead </p>
                    <Image
                        className="rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl absolute bottom-0 right-0 w-1/2 group-hover:w-2/3 transition-all duration-500 ease-in"
                        src="https://firebasestorage.googleapis.com/v0/b/nohara-591ab.appspot.com/o/about-us%2Fimage-removebg-preview%20(1).png?alt=media&token=19c1aa8b-4efb-4637-ad78-08d66e55f60e"
                        height={200}
                        width={200}
                        alt="Image of Pottery"
                        quality={100}
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    </div>
}

export default SectionThree;    