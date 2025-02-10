const Asterick: React.FC = () => {

    return <div className={`h-10 w-10 min-h-10 min-w-10 bg-[#B9A9A9] rounded-full flex justify-center items-center relative`}>
        <div className={`h-7 w-1 bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}></div>
        <div className={`h-7 w-1 bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90`}></div>
        <div className={`h-7 w-1 bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45`}></div>
        <div className={`h-7 w-1 bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[135deg]`}></div>
    </div>
}

export default Asterick;

export const AnimatedAsterick: React.FC = () => {

    return <div className={`h-24 w-24 min-h-24 min-w-24 bg-[#B9A9A9] opacity-35 rounded-full flex justify-center items-center relative`}>
        <div className={`h-16 w-2 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}></div>
        <div className={`h-16 w-2 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90`}></div>
        <div className={`h-16 w-2 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45`}></div>
        <div className={`h-16 w-2 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[135deg]`}></div>
    </div>
}
