import hero from "../assets/istockphoto-535415025-612x612.jpg"


export default function Hero_Section(){

    return (
        <div className={"relative w-screen h-[35rem] bg-stone-200"}> <div/>
            <img src={hero} className={"w-screen h-full"}/>
            <div className={"absolute top-0 opacity-50 w-screen h-full bg-black z-1"}  />
            <div className={"absolute top-45 flex flex-col justify-center items-center z-2 gap-4"}>
                <h1 className={"text-white text-4xl"}> TechX Florida 2025 </h1>
                <p className={"text-white text-lg text-center"}> Innovate. Connect. Transform. Join us for the premier tech conference of the year. </p>
            <a href="https://bullsconnect.usf.edu/ieeecs/rsvp_boot?id=1985102" target="_blank" >"
                <button className={"w-[10rem] h-[4rem] bg-[#FFA300] rounded"}>
                    <h2 className={" font-bold text-[#00629B]"}> Register Now </h2>

                </button>
            </a>

            </div>


        </div>
    )


}