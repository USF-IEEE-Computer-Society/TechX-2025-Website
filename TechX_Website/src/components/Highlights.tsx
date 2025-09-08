import hero from "../assets/istockphoto-535415025-612x612.jpg"

export default function Highlights(){

    return (
        <div className={"w-screen h-auto bg-white flex flex-col items-center gap-[2rem] pb-[2rem] "}>

            <div className={"w-screen flex flex-col justify-center items-center gap-3"}>
                <h2 className={"text-3xl tracking-tight font-bold pt-[3rem]"}> Event Highlights </h2>
                <p className={"w-[85%] text-lg text-gray-600 text-center text-balance"}> Explore the exciting features and activities planned for TechX Florida 2025 </p>
            </div>

            <div className={"w-[80%] h-[50vh] flex flex-col rounded-xl shadow-2xl"}>
                <img className={"w-full h-[28vh] bg-black rounded-t-xl object-fit"} src={hero}/>

                <div>
                    <h2 className={"text-2xl font-bold pl-[1rem] pt-[2rem]"}> Cat Playing Xbox</h2>
                    <p className={"w-[80%] text-lg text-gray-600 pt-1 pl-[1rem]"}> Explore the exciting features and activities planned for TechX Florida 2025 </p>
                </div>

            </div>

            <div className={"w-[80%] h-[50vh] flex flex-col rounded-xl shadow-2xl"}>
                <img className={"w-full h-[28vh] bg-black rounded-t-xl object-fit"} src={hero}/>

                <div>
                    <h2 className={"text-2xl font-bold pl-[1rem] pt-[2rem]"}> Cat Playing Xbox</h2>
                    <p className={"w-[80%] text-lg text-gray-600 pt-1 pl-[1rem]"}> Explore the exciting features and activities planned for TechX Florida 2025 </p>
                </div>

            </div>


            <div className={"w-[80%] h-[50vh] flex flex-col rounded-xl shadow-2xl"}>
                <img className={"w-full h-[28vh] bg-black rounded-t-xl object-fit"} src={hero}/>

                <div>
                    <h2 className={"text-2xl font-bold pl-[1rem] pt-[2rem]"}> Cat Playing Xbox</h2>
                    <p className={"w-[80%] text-lg text-gray-600 pt-1 pl-[1rem]"}> Explore the exciting features and activities planned for TechX Florida 2025 </p>
                </div>

            </div>

        </div>
    )
}