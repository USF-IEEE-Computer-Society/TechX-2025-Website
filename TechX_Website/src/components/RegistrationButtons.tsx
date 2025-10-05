export default function RegistrationButtons() {

    return (
        <div className={"flex flex-col md:flex-row gap-x-7 gap-y-0 mt-1 md:mt-5"}>

            <a className={"hover:scale-110 duration-300 ease-in-out cursor-pointer mt-2"}
               href="https://bullsconnect.usf.edu/ieeecs/rsvp_boot?id=1985102" target="_blank"
               rel="noopener noreferrer">
                <button className={"w-[15rem] h-[4rem] bg-[#FFA300] rounded cursor-pointer"}>
                    <h2 className={"text-base font-bold text-black text-balance text-center"}>Sign Up as USF Student</h2>
                </button>
            </a>

            <a className={"hover:scale-110 duration-300 ease-in-out cursor-pointer mt-2"}
               href="https://events.vtools.ieee.org/m/499182" target="_blank" rel="noopener noreferrer">
                <button className={"w-[15rem] h-[4rem] bg-[#FFA300] border-2 border-[#FFA300] rounded cursor-pointer"}>
                    <h2 className={"text-base font-bold text-black text-balance text-center"}> Sign Up as Non-USF Student </h2>
                </button>
            </a>

            <a className={"hover:scale-110 duration-300 ease-in-out cursor-pointer mt-2"}
               href="https://events.vtools.ieee.org/m/499182" target="_blank" rel="noopener noreferrer">
                <button className={"w-[15rem] h-[4rem] bg-[#FFA300] border-2 border-[#FFA300] rounded cursor-pointer"}>
                    <h2 className={"text-base font-bold text-black text-balance text-center"}> Sign Up as Guest </h2>
                </button>
            </a>
        </div>

    )


}