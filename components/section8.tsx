import Link from "next/link";
import AnimatedText from "./pages/home/hello";

const SectionEight: React.FC = () => {
    return <section className="flex flex-row pt-24 sub-section overflow-hidden gap-x-12 font-roboto w-full text-white">
        <div className="bg-[#FF6600] w-full flex-1 flex flex-col gap-y-5 px-8 lg:px-20 py-10">
            <div className="flex justify-between items-start">
                <h1 className="text-xl font-roboto tracking-wide font-semibold w-1/2 lg:w-1/3"> Nohara Technologies </h1>
                <div className="w-1/2 lg:w-2/3 flex items-start justify-end gap-x-20">
                    <div className="space-y-1 hidden md:flex flex-col gap-y-2">
                        <Link href='' className="hover:underline">Home</Link>
                        <Link href='' className="hover:underline">Our Work</Link>
                        <Link href='' className="hover:underline">Originals</Link>
                    </div>
                    <div className="space-y-1 hidden md:flex flex-col gap-y-2">
                        <Link href='' className="hover:underline">About</Link>
                        <Link href='' className="hover:underline">Contact</Link>
                        <Link href='' className="hover:underline">Workshops</Link>
                    </div>
                    <button className="md:hidden relative overflow-hidden text-white bg-black rounded-sm px-5 py-3 tracking-wider text-sm border border-solid border-black font-bold transition-all duration-500 hover:text-black before:absolute before:bottom-0 before:right-0 before:w-full before:h-full before:bg-white before:z-0 before:transition-transform before:duration-500 before:translate-x-full before:translate-y-full hover:before:translate-x-0 hover:before:translate-y-0">
                        <span className="relative z-10 tracking-widest"> Get In Touch </span>
                    </button>
                    <div className="text-right hidden lg:block">
                        <p className="text-start">Tell us about your project.</p>
                        <p className="text-start">Let's make some magic.</p>
                        {/* <Button variant="outline" className="mt-2">Get In Touch</Button> */}
                    </div>
                </div>
            </div>

            <div className="flex md:hidden flex-1 items-center gap-x-10">
                <div className="space-y-1 flex flex-col gap-y-3">
                    <Link href='' className="hover:underline">Home</Link>
                    <Link href='' className="hover:underline">Our Work</Link>
                    <Link href='' className="hover:underline">Originals</Link>
                </div>
                <div className="space-y-1 flex flex-col gap-y-3">
                    <Link href='' className="hover:underline">About</Link>
                    <Link href='' className="hover:underline">Contact</Link>
                    <Link href='' className="hover:underline">Workshops</Link>
                </div>
            </div>

            <div className="flex-grow flex items-center justify-start lg:flex-1 text-white">
                <AnimatedText text='Say Hello!' css="text-4xl lg:text-8xl"></AnimatedText>
            </div>

            <div className="flex lg:hidden justify-between gap-6">
                <Link className="hover:underline text-sm" href={''}>Facebook</Link>
                <Link className="hover:underline text-sm" href={'https://www.instagram.com/nohara_technologies/'}>Instagram</Link>
                <Link className="hover:underline text-sm" href={''}>LinkedIn</Link>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end">
                <p>© Nohara Technologies 2025</p>
                <div className="gap-6 hidden lg:flex">
                    <Link className="hover:underline" href={''}>Facebook</Link>
                    <Link className="hover:underline" href={'https://www.instagram.com/nohara_technologies/'}>Instagram</Link>
                    <Link className="hover:underline" href={''}>LinkedIn</Link>
                </div>
                <p>Privacy Policy</p>
            </div>

            {/* Scroll Up Button */}
            {/* <div className="fixed bottom-6 right-6 bg-white text-black p-2 rounded-full cursor-pointer">
            </div> */}
        </div>
    </section>
}

export default SectionEight;