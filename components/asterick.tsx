import "../styles/section3.css";

const Asterick: React.FC = () => {
    return <div className={`h-10 w-10 min-h-10 min-w-10 bg-[#B9A9A9] rounded-full flex justify-center items-center relative`}>
        <div className={`h-7 w-1 bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}></div>
        <div className={`h-7 w-1 bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90`}></div>
        <div className={`h-7 w-1 bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45`}></div>
        <div className={`h-7 w-1 bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[135deg]`}></div>
    </div>
}

export default Asterick;

export const AnimatedAsterick: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    return (
        <div className={`${isActive ? 'rotate-180' : ''} transition-all duration-1000 h-24 w-24 min-h-24 min-w-24 bg-[#B1B1B1] rounded-full flex justify-center items-center relative`}>
            <div className={`asterick h-16 w-2 ${isActive ? 'active' : ''} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}></div>
            <div className={`asterick h-16 w-2 ${isActive ? 'active' : ''} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90`} rotation-deg='90deg'></div>
            <div className={`asterick h-16 w-2 ${isActive ? 'active' : ''} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45`}></div>
            <div className={`asterick h-16 w-2 ${isActive ? 'active' : ''} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[135deg]`}></div>
        </div>
    );
};

export const AnimatedWindow: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    return (
        <div className={`${isActive ? 'rotate-180' : ''} transition-all duration-1000 h-24 w-24 min-h-24 min-w-24 bg-[#B1B1B1] rounded-full flex justify-center items-center relative`}>
            <div className={`window h-16 w-2 ${isActive ? 'active' : ''} h-6 w-6 rotate-45 translate-y-[80%] absolute`} rotation-deg='45deg'></div>
            <div className={`window h-16 w-2 ${isActive ? 'active' : ''} h-6 w-6 rotate-45 -translate-y-[80%] absolute`} rotation-deg='45deg'></div>
            <div className={`window h-16 w-2 ${isActive ? 'active' : ''} h-6 w-6 rotate-45 -translate-x-[80%] absolute`} rotation-deg='45deg'></div>
            <div className={`window h-16 w-2 ${isActive ? 'active' : ''} h-6 w-6 rotate-45 translate-x-[80%] absolute`} rotation-deg='45deg'></div>
        </div>
    );
};

export const AnimatedKite: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    return (
        <div className={`${isActive ? 'rotate-180' : ''} h-24 w-24 min-h-24 min-w-24 bg-[#B1B1B1] rounded-full flex justify-center items-center relative transition-all duration-1000 overflow-hidden`}>
            <div className={`kite ${isActive ? 'active' : ''} h-16 w-16 min-h-16 min-w-16 bg-white rounded-full`}></div>
            <div className="absolute h-16 w-16 rounded-full top-0 bg-[#B1B1B1] -translate-y-[50%]"></div>
            <div className="absolute h-16 w-16 rounded-full top-0 bg-[#B1B1B1] translate-y-[100%]"></div>
            <div className="absolute h-16 w-16 rounded-full top-0 translate-y-1/4 bg-[#B1B1B1] -translate-x-[65%]"></div>
            <div className="absolute h-16 w-16 rounded-full top-0 translate-y-1/4 bg-[#B1B1B1] translate-x-[65%]"></div>
        </div>
    );
};
