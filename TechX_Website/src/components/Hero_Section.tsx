import hero from "../assets/1097988940.webp"

import RegistrationButtons from "./RegistrationButtons";


export default function Hero_Section(){

    return (
        <div className={"relative w-full h-[35rem] bg-stone-200"}> <div/>
            <img src={hero} className={"w-full h-full"}/>
            <div className={"absolute top-0 opacity-65 w-full h-full bg-black z-1"} />
            <div className={"absolute top-45 flex flex-col justify-center items-center z-2 gap-4 w-full"}>
                <h1 className={"text-white text-4xl md:text-5xl xl:text-6xl"}> TechX Florida 2025 </h1>
                <p className={"w-[90%] lg:w-[70%] text-white text-lg sm:text-2xl md:text-3xl text-center"}> Innovate. Connect. Transform. Join us for the premier tech conference of the year. </p>

                <RegistrationButtons/>

            </div>


        </div>
    )


}