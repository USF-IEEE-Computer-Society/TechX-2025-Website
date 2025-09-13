import hero from "../assets/1097988940.webp"

export default function Highlights(){

    return (
        <div className={"w-screen h-auto bg-white flex flex-col items-center mt-4 gap-[2rem] pb-[2rem] "}>

            <div className={"w-screen flex flex-col justify-center items-center gap-3"}>
                <h2 className={"text-4xl md:text-5xl tracking-tight font-bold pt-[3rem]"}> Event Highlights </h2>
                <p className={"w-[90%] text-md md:text-2xl text-ellipsis text-gray-600 text-center text-pretty"}> Explore the exciting features and activities planned for TechX Florida 2025 </p>
            </div>

            <div className={"w-[80%] md:w-[70%] lg:w-[55%] xl:w-[55%] h-[50vh] xl:h-[55vh] flex flex-col rounded-xl shadow-2xl"}>
                <img className={"w-full h-[28vh] bg-black rounded-t-xl object-fit"} src={hero}/>

                <div>
                    <h2 className={"text-2xl font-bold pl-[1rem] pt-[2rem]"}> Cat Playing Xbox</h2>
                    <p className={"w-[90%] text-md md:text-xl  text-gray-600 pt-1 pl-[1rem]"}> Explore the exciting features and activities planned for TechX Florida 2025 </p>
                </div>

            </div>

            <div className={"w-[80%] md:w-[70%] lg:w-[55%] xl:w-[55%] h-[50vh] xl:h-[55vh] flex flex-col rounded-xl shadow-2xl"}>
                <img className={"w-full h-[28vh] bg-black rounded-t-xl object-fit"} src={hero}/>

                <div>
                    <h2 className={"text-2xl font-bold pl-[1rem] pt-[2rem]"}> Cat Playing Xbox</h2>
                    <p className={"w-[90%] text-md md:text-xl  text-gray-600 pt-1 pl-[1rem]"}> Explore the exciting features and activities planned for TechX Florida 2025 </p>
                </div>

            </div>


            <div className={"w-[80%] md:w-[70%] lg:w-[55%] xl:w-[55%] h-[50vh] xl:h-[55vh] flex flex-col rounded-xl shadow-2xl"}>
                <img className={"w-full h-[28vh] bg-black rounded-t-xl object-fit"} src={hero}/>

                <div>
                    <h2 className={"text-2xl font-bold pl-[1rem] pt-[2rem]"}> Cat Playing Xbox</h2>
                    <p className={"w-[90%] text-md md:text-xl  text-gray-600 pt-1 pl-[1rem]"}> Explore the exciting features and activities planned for TechX Florida 2025 </p>
                </div>

            </div>

        </div>
    )
}