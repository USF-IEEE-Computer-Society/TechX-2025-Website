import linkedin from "../../assets/logos/LinkedIn_icon.svg.png";

interface SpeakerCardProps {
    headshot: string;
    name: string;
    linkedinLink: string;
    company: string;
    talkTitle: string;
    pills: string[];
}

export default function SpeakerCard(props: SpeakerCardProps) {
    return (
        <div className={"w-[100%] h-[575px] md:h-[600px] flex flex-col rounded-xl mb-5"}>

            <img className={"object-fit"} src={props.headshot} />

            <div className={"shadow-2xl relative h-full pl-[1rem] pt-[1.5rem]"}>

                    <h2 className={"text-2xl font-bold w-fit"}>{props.name}</h2>



                <h3 className={"text-lg md:text-xl lg:text-xl xl:text-xl tracking-tight font-bold"}>{props.company}</h3>
                <p className={"w-[90%] text-md md:text-xl  text-gray-600 mt-3"}>{props.talkTitle}</p>
                <div className={"flex flex-col md:flex-row gap-2 mt-3 mb-7 text-sm pr-[1rem]"}>
                    {props.pills.includes("Speaker") ? <span className="text-sm inline-flex self-start w-fit  px-3 py-1 bg-green-100 text-green-800 font-medium rounded-full">Speaker</span> : null}
                    {props.pills.includes("Panel") ? <span className={"text-sm inline-flex self-start w-fit px-3 py-1 bg-purple-100 text-purple-800 font-medium rounded-full"}>"Careers in AI" Panelist</span> : null}
                    {props.pills.includes("Workshop") ? <span className={"text-sm inline-flex self-start w-fit px-3 py-1 bg-orange-100 text-orange-800  font-medium rounded-full"}>Workshop</span> : null}
                </div>

                <div className={"absolute bottom-[1rem] right-[1rem]"}>
                    <a href={props.linkedinLink} target="_blank" rel="noopener noreferrer">
                        <img className={"h-8"} src={linkedin}/>
                    </a>
                </div>

            </div>

        </div>
    )
}