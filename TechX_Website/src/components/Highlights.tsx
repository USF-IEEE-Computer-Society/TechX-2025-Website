import hero from "../assets/1097988940.webp"

import SpeakerCard from "./SpeakerCard";

import {speakers} from "./speakers";

export default function Highlights(){

    return (
        <div id='Events' className={"w-full h-auto bg-white"}>

            <div className={"w-full flex flex-col justify-center items-center gap-3"}>
                <h2 className={"text-4xl md:text-5xl tracking-tight font-bold pt-[3rem]"}> Event Speakers </h2>
                <p className={"w-[90%] text-md md:text-2xl text-ellipsis text-gray-600 text-center text-pretty"}> Explore the exciting features and activities planned for TechX Florida 2025 </p>
            </div>

            <div className={"w-full h-full mt-4 gap-[1rem] pb-[2rem] justify-items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-[1rem] lg:p-[4rem]"}>

                {speakers.map((s, i) => (
                    <SpeakerCard
                        key={i}
                        name={s.name}
                        company={s.company}
                        talkTitle={s.talkTitle}
                        headshot={s.headshot}
                        linkedinLink={s.linkedinLink}
                    />
                ))}

            </div>

        </div>
    )
}