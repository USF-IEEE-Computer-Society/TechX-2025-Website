import TeamCard from "../elements/TeamCard";

import {teamData} from "../../data/teamData";

export default function Team(){

    return (
        <div id='Team' className={"w-full h-auto bg-[#F5F5F5]"}>

            <div className={"w-full flex flex-col justify-center items-center gap-3"}>
                <h2 className={"text-4xl md:text-5xl tracking-tight font-bold pt-[3rem]"}>Our Team</h2>
                <p className={"w-[90%] text-md md:text-2xl text-ellipsis text-gray-600 text-center text-pretty"}> The minds behind TechX Florida 2025 </p>
            </div>

            <div
                className={"w-full h-full mt-4 gap-[1rem] pb-[1rem] justify-items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-[1rem] lg:p-[4rem]"}>

                {teamData.map((s, i) => (
                    <TeamCard
                        key={i}
                        name={s.name}
                        major={s.major}
                        year={s.year}
                        headshot={s.headshot}
                        linkedinLink={s.linkedinLink}
                        pills={s.pills}
                    />
                ))}


            </div>

        </div>
    )
}