import {UserStar, MicVocal, Cpu} from "lucide-react";


export default function WhyAttend(){

    return (
        <div id={"Attend"} className={"w-full bg-[#F5F5F5] flex flex-col gap-[1rem] pb-[4rem]"}>

            <div className={"w-full pt-[5rem] flex flex-col justify-center items-center gap-[4rem]"}>
                <h2 className={"text-3xl md:text-5xl tracking-tight font-bold"}> Why Attend </h2>
                <p className={"w-[85%] text-lg md:text-3xl text-gray-600 text-center text-balance"}>
                    TechX Florida 2025 is the ultimate gathering for tech professionals, innovators, and thought leaders.
                    Here's what you can expect:
                </p>
            </div>

            <div className={"grid lg:grid-cols-3 justify-items-center items-start pb-[2rem]"}>

                <div className={"w-full h-full pt-[5rem] flex flex-col justify-start items-center gap-[2rem]"}>

                    <h2 className={"text-3xl md:text-5xl lg:text-3xl xl:text-4xl tracking-tight font-bold"}> 8+ talks about AI </h2>
                    <p className={"w-[85%] text-lg md:text-3xl text-gray-600 text-center text-balance"}> Talks by industry leaders from companies like Microsoft, Jabil, Verizon.</p>
                </div>

                <div className={"w-full h-full pt-[5rem] flex flex-col justify-start items-center gap-[2rem]"}>

                    <h2 className={"text-3xl md:text-5xl lg:text-3xl xl:text-4xl tracking-tight font-bold"}> 250+ expected attendance </h2>
                    <p className={"w-[85%]  text-lg md:text-3xl text-gray-600 text-center text-balance"}> Connect with industry professionals, USF and non-USF students.</p>
                </div>

                <div className={"w-full h-full pt-[5rem] flex flex-col justify-start items-center gap-[2rem]"}>
                    <h2 className={"text-3xl md:text-5xl lg:text-3xl xl:text-4xl tracking-tight font-bold"}> 5+ tabling opportunities </h2>
                    <p className={"w-[85%] text-lg md:text-3xl text-gray-600 text-center text-balance"}> Network with local companies, startups and communinities popular in Tampa Bay.</p>
                </div>

            </div>

        </div>

    )
}