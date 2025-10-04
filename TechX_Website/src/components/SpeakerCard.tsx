import hero from "../assets/1097988940.webp";

import linkedin from "../assets/LinkedIn_icon.svg.png";

export default function SpeakerCard(props) {
    return (
        <div className={"w-[100%] md:w-[100%] h-[52vh] md:h-[65vh] flex flex-col rounded-xl mb-5"}>

            <img className={"rounded-t-xl object-fit"} src={props.headshot} />

            <div className={"shadow-2xl h-full pl-[1rem] pt-[2rem]"}>
                <div className={"flex flex-col md:flex-row gap-2 md:items-center"}>
                    <h2 className={"text-2xl font-bold "}>{props.name}</h2>
                    <a href={props.linkedinLink} target="_blank" rel="noopener noreferrer">
                        <img className={"h-6"} src={linkedin}/>
                    </a>

                </div>
                <h3 className={"text-lg md:text-xl lg:text-xl xl:text-xl tracking-tight font-bold"}>{props.company}</h3>
                <p className={"w-[90%] text-md md:text-xl  text-gray-600 mt-3"}>{props.talkTitle}</p>
            </div>

        </div>
    )
}