import {UserStar, MicVocal, Cpu} from "lucide-react";


export default function WhyAttend(){

    return (
        <div className={"w-screen bg-[#F5F5F5] flex flex-col gap-[1rem]"}>

            <div className={"w-full pt-[5rem] flex flex-col justify-center items-center gap-[4rem]"}>
                <h2 className={"text-3xl tracking-tight font-bold"}> Why Attend </h2>
                <p className={"w-[85%] text-lg text-gray-600 text-center text-balance"}>
                    TechX Florida 2025 is the ultimate gathering for tech professionals, innovators, and thought leaders.
                    Here's what you can expect:
                </p>
            </div>

            <div className={"w-full pt-[5rem] flex flex-col justify-center items-center gap-[2rem]"}>

                <div className={"w-[135px] h-[135px] rounded-full bg-[#FFA300] flex justify-center items-center "}>
                    <UserStar className={"w-[60px] h-[60px]"} color={"#00629B"} strokeWidth={1} size={40}/>
                </div>

                <h2 className={"text-3xl tracking-tight font-bold"}> Networking </h2>
                <p className={"w-[85%] text-lg text-gray-600 text-center text-balance"}> Connect with industry peers, potential partners, and investors in a dynamic environment.</p>
            </div>

            <div className={"w-full pt-[5rem] flex flex-col justify-center items-center gap-[2rem]"}>

                <div className={"w-[135px] h-[135px] rounded-full bg-[#FFA300] flex justify-center items-center "}>
                    <MicVocal className={"w-[60px] h-[60px]"} color={"#00629B"} strokeWidth={1} size={40}/>
                </div>

                <h2 className={"text-3xl tracking-tight font-bold"}> Distinguished Speakers </h2>
                <p className={"w-[85%] text-lg text-gray-600 text-center text-balance"}> Hear from leading experts and visionaries who are shaping the future of technology. </p>
            </div>

            <div className={"w-full pt-[5rem] flex flex-col justify-center items-center gap-[2rem] pb-[2rem]"}>

                <div className={"w-[135px] h-[135px] rounded-full bg-[#FFA300] flex justify-center items-center "}>
                    <Cpu className={"w-[60px] h-[60px]"} color={"#00629B"} strokeWidth={1} size={40}/>
                </div>

                <h2 className={"text-3xl tracking-tight font-bold"}> AI Workshops </h2>
                <p className={"w-[85%] text-lg text-gray-600 text-center text-balance"}> Gain practical skills and knowledge through a variety of hands-on workshops. </p>
            </div>

        </div>

    )
}