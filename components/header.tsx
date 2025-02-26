"use client";
import { useState, useEffect, useRef } from "react";
import { HEADERTEXT, HEADERTEXTONE } from "@/constants/header";
import "../styles/styles.css";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const router = useRouter();

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className="w-full fixed px-20 py-6 bg-transparent top-0 left-0 flex flex-row justify-between items-center font-roboto z-50 border-black">
            <div className="flex flex-1 justify-start">
                <p className="tracking-wider font-roboto text-black">{HEADERTEXT}</p>
            </div>
            <div className="flex flex-1 justify-center">
                <div className="h-4 w-12 bg-black rounded-3xl"></div>
            </div>

            <div className="flex space-x-9 items-center flex-1 justify-center relative" ref={menuRef}>
                <button className="relative overflow-hidden text-white bg-black rounded-sm px-5 py-3 tracking-wider text-sm border border-solid border-black font-bold transition-all duration-500 hover:text-black before:absolute before:bottom-0 before:right-0 before:w-full before:h-full before:bg-white before:z-0 before:transition-transform before:duration-500 before:translate-x-full before:translate-y-full hover:before:translate-x-0 hover:before:translate-y-0">
                    <span className="relative z-10 tracking-widest">{HEADERTEXTONE}</span>
                </button>

                {/* Menu Toggle */}
                <div
                    className={`absolute z-[1000] right-0 top-0 transition-all duration-1000 ease-in-out group ${menuOpen ? " bg-[#3851e5] h-[100vh] w-[100%] pb-12" : "h-12 w-12"
                        }`}
                >
                    {/* Clickable Button */}
                    <button
                        className="h-12 w-12 flex items-center justify-center absolute right-0 top-0 z-10"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {/* Menu Icon */}
                        <div className="flex flex-col items-center gap-1">
                            <span
                                className={`w-5 h-[3px] bg-black transition-all duration-500 ${menuOpen ? "rotate-45 translate-y-2 bg-white" : ""
                                    }`}
                            ></span>
                            <span
                                className={`w-5 h-[3px] bg-black transition-all duration-500 ${menuOpen ? "opacity-0 bg-white" : ""
                                    }`}
                            ></span>
                            <span
                                className={`w-5 h-[3px] bg-black transition-all duration-500 ${menuOpen ? "-rotate-45 -translate-y-1.5 bg-white" : ""
                                    }`}
                            ></span>
                        </div>
                    </button>

                    {/* Dots - Positioned based on menu state */}
                    {/* Top-Left Corner */}
                    <div
                        className={`absolute top-0 left-0 flex w-2 h-2 border-t-2 border-l-2 border-black duration-600 transition-[transform] duration-1000  ${menuOpen ? "translate-y-2 translate-x-2 border-white" : "group-hover:border-slate-600 group-hover:translate-y-1 group-hover:translate-x-1"}`
                        }
                    ></div>

                    {/* Top-Right Corner */}
                    <div
                        className={`absolute top-0 right-0 flex w-2 h-2 border-t-2 border-r-2 border-black duration-600 transition-[transform] duration-1000  ${menuOpen ? "translate-y-2 -translate-x-2 border-white" : "group-hover:border-red-600 group-hover:translate-y-1 group-hover:-translate-x-1 "}`
                        }
                    ></div>

                    {/* Bottom-Left Corner */}
                    <div
                        className={`absolute bottom-0 left-0 flex w-2 h-2 border-b-2 border-l-2 border-black duration-600 transition-[transform] duration-1000    ${menuOpen ? "translate-y-2 translate-x-2 border-white" : "group-hover:border-blue-600 group-hover:-translate-y-1 group-hover:translate-x-1"}`
                        }
                    ></div>

                    {/* Bottom-Right Corner */}
                    <div
                        className={`absolute bottom-0 right-0 flex  w-2 h-2 border-b-2 border-r-2 border-black duration-600 transition-[transform] duration-1000  ${menuOpen ? "translate-y-2 translate-x-2 border-white" : "group-hover:border-yellow-600 group-hover:-translate-y-1 group-hover:-translate-x-1"}`
                        }
                    ></div>

                    {/* Expanded Menu Content */}
                    {menuOpen && (
                        <div className="px-4 absolute top-0 left-0 w-full h-full flex flex-col items-start pt-16 opacity-100 transition-opacity duration-700 pointer-events-auto">
                            <div className="text-white flex flex-col text-lg font-normal w-full pr-4 pb-4">
                                <button
                                    onClick={() => {
                                        router.push('/');
                                        setMenuOpen(false);
                                    }}
                                    className="cursor-pointer tracking-wider hover:text-gray-300 flex items-start pl-4 gap-x-6 text-3xl py-4"
                                    style={{ borderTopWidth: "1px", borderBottomWidth: "1px", borderColor: "white" }}
                                >
                                    <span>01 </span>Home
                                </button>
                                <button
                                    onClick={() => {
                                        router.push('/about');
                                        setMenuOpen(false);
                                    }}
                                    className="cursor-pointer tracking-wider hover:text-gray-300 flex items-start pl-4 gap-x-6 text-3xl py-4"
                                    style={{ borderBottomWidth: "1px", borderColor: "white" }}
                                >
                                    <span>02 </span>About
                                </button>
                                <button
                                    onClick={() => {

                                    }}
                                    className="cursor-pointer tracking-wider hover:text-gray-300 flex items-start pl-4 gap-x-6 text-3xl py-4"
                                    style={{ borderBottomWidth: "1px", borderColor: "white" }}
                                >
                                    <span>03 </span>Services
                                </button>
                                <button
                                    onClick={() => {
                                        router.push('/work');
                                        setMenuOpen(false);
                                    }}
                                    className="cursor-pointer tracking-wider hover:text-gray-300 flex items-start pl-4 gap-x-6 text-3xl py-4"
                                    style={{ borderBottomWidth: "1px", borderColor: "white" }}
                                >
                                    <span>04 </span>Our Projects
                                </button>
                                <button
                                    onClick={() => {
                                        router.push('/contact');
                                        setMenuOpen(false);
                                    }}
                                    className="cursor-pointer tracking-wider hover:text-gray-300 flex items-start pl-4 gap-x-6 text-3xl py-4"
                                    style={{ borderBottomWidth: "1px", borderColor: "white" }}
                                >
                                    <span>05 </span>Contact
                                </button>
                            </div>
                            <div className="flex w-full items-center justify-center pr-4">
                                <button
                                    className="relative py-4 w-full text-lg text-white border border-white hover:text-black"
                                    style={{
                                        background: "linear-gradient(to right, white 50%, #3851e5 50%)",
                                        backgroundSize: "200% 100%",
                                        backgroundPosition: "100% 0",
                                        transition: "background-position 0.7s ease-out",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = "0% 0")}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = "100% 0")}
                                >
                                    <span className="relative z-10 transition-colors duration-500">Start a Project</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
