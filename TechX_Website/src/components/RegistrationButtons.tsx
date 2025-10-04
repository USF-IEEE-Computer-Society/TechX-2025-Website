export default function RegistrationButtons() {

    return (
        <div className={"flex gap-x-2"}>

            <a className={"hover:scale-110 duration-300 ease-in-out cursor-pointer"}
               href="https://bullsconnect.usf.edu/ieeecs/rsvp_boot?id=1985102" target="_blank"
               rel="noopener noreferrer">
                <button className={"w-[12rem] h-[4rem] bg-[#FFA300] rounded mt-[2rem] mr-3 cursor-pointer"}>
                    <h2 className={"text-base font-bold text-black text-balance text-center"}> Register USF Students </h2>
                </button>
            </a>

            <a className={"hover:scale-110 duration-300 ease-in-out cursor-pointer"}
               href="https://events.vtools.ieee.org/m/499182" target="_blank" rel="noopener noreferrer">
                <button className={"w-[12rem] h-[4rem] border-2 border-[#FFA300] rounded mt-[2rem] cursor-pointer"}>
                    <h2 className={"text-base font-bold text-[#FFF] text-balance text-center"}> Register Non-USF </h2>
                </button>
            </a>
        </div>

    )


}