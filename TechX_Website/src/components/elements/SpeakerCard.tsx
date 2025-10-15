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

            <img className={"object-fit"} src={props.headshot} alt={`${props.name} headshot`}/>

            <div className={"shadow-2xl relative h-full pl-[1rem] pt-[1.5rem] pr-[1rem]"}>

                <h2 className={"text-2xl font-bold mb-1 break-words"}>{props.name}</h2>


                <h3 className={"text-lg md:text-xl lg:text-xl xl:text-xl tracking-tight font-semibold break-words"}>{props.company}</h3>

                <p className={"w-[90%] text-md md:text-xl text-gray-600 mt-3"}>{props.talkTitle}</p>


                    <div className={"flex flex-col md:flex-row gap-2 mt-3 mb-7 text-sm pr-[1rem]"}>

                        {props.pills.includes("Speaker") ?
                            <span className="Pill bg-green-100 text-green-800">Speaker</span> : null}
                        {props.pills.includes("Panel") ?
                            <span
                                className={"Pill bg-purple-100 text-purple-800"}>"Careers in AI" Panelist</span> : null}
                        {props.pills.includes("PanelModerator") ? <span
                            className={"Pill bg-purple-100 text-purple-800"}>"Careers in AI" Panel Moderator</span> : null}
                        {props.pills.includes("Workshop") ?
                            <span className={"Pill bg-orange-100 text-orange-800 "}>Workshop</span> : null}


                    </div>




                <div className={"absolute bottom-[1rem] right-[1rem]"}>
                    <a href={props.linkedinLink} target="_blank" rel="noopener noreferrer">
                        <img className={"h-8"} src={linkedin} alt="Linkedin Icon"/>
                    </a>
                </div>

            </div>

        </div>
    )
}