import {UserStar} from "lucide-react";


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
                <p> lorem ipsum dolor amet...</p>
            </div>

            <div className={"w-full pt-[5rem] flex flex-col justify-center items-center gap-[2rem]"}>

                <div className={"w-[135px] h-[135px] rounded-full bg-[#FFA300] flex justify-center items-center "}>
                    <UserStar className={"w-[60px] h-[60px]"} color={"#00629B"} strokeWidth={1} size={40}/>
                </div>

                <h2 className={"text-3xl tracking-tight font-bold"}> Networking </h2>
                <p> lorem ipsum dolor amet...</p>
            </div>

            <div className={"w-full pt-[5rem] flex flex-col justify-center items-center gap-[2rem]"}>

                <div className={"w-[135px] h-[135px] rounded-full bg-[#FFA300] flex justify-center items-center "}>
                    <UserStar className={"w-[60px] h-[60px]"} color={"#00629B"} strokeWidth={1} size={40}/>
                </div>

                <h2 className={"text-3xl tracking-tight font-bold"}> Networking </h2>
                <p> lorem ipsum dolor amet...</p>
            </div>






        </div>

    )
}