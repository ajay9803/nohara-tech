import Image from "next/image";
import "../../../styles/pages/home/card.css";

const ServiceCard: React.FC<{ title: string, desc: string, imageUrl: string }> = (props) => {
    return <div className="card h-96 w-full">
        <div className="card__content flex flex-col gap-y-4">
            <p className="hidden md:block card_title tracking-wider font-semibold text-lg text-center"> {props.title} </p>
            <p className="card_description tracking-wide text-xs md:text-sm text-center"> {props.desc} </p>
        </div>
        <Image src={props.imageUrl}
            height={500}
            width={500}
            alt={`${props.title} - Image`}
            quality={100}
            unoptimized={true}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        ></Image>
    </div>
}

export default ServiceCard;