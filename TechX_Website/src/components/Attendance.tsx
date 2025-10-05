import {UserStar, MicVocal, Cpu} from "lucide-react";


export default function WhyAttend(){

    return (
        <div id={"Attend"} className={"w-full bg-[#F5F5F5] flex flex-col gap-[1rem] pb-[2rem]"}>

            <div className={"w-full pt-[3rem] md:pt-[5rem] flex flex-col justify-center items-center gap-[4rem]"}>
                <h2 className={"text-4xl md:text-5xl tracking-tight font-bold"}> Why Attend </h2>
            </div>

            <div className={"grid lg:grid-cols-3 justify-items-center items-start pb-[2rem]"}>

                <div className={"w-full h-full pt-[2rem] md:pt-[4rem] flex flex-col justify-start items-center gap-[0.5rem]"}>

                    <h2 className={"text-2xl md:text-5xl lg:text-3xl xl:text-4xl tracking-tight font-bold"}> 8+ talks about AI </h2>
                    <p className={"w-[85%] text-lg md:text-3xl text-gray-600 text-center text-balance"}> Talks by industry leaders from companies like Microsoft, Jabil, Verizon.</p>
                </div>

                <div className={"w-full h-full pt-[4rem] flex flex-col justify-start items-center gap-[0.5rem]"}>

                    <h2 className={"text-2xl md:text-5xl lg:text-3xl xl:text-4xl tracking-tight font-bold"}> 250+ expected attendance </h2>
                    <p className={"w-[85%]  text-lg md:text-3xl text-gray-600 text-center text-balance"}> Connect with industry professionals, USF and non-USF students.</p>
                </div>

                <div className={"w-full h-full pt-[4rem] flex flex-col justify-start items-center gap-[0.5rem]"}>
                    <h2 className={"text-2xl md:text-5xl lg:text-3xl xl:text-4xl tracking-tight font-bold"}> 5+ tabling opportunities </h2>
                    <p className={"w-[85%] text-lg md:text-3xl text-gray-600 text-center text-balance"}> Network with local companies, startups and communinities popular in Tampa Bay.</p>
                </div>

            </div>

        </div>

    )
}