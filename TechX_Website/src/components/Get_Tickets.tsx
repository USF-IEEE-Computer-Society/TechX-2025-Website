

export default function Get_Tickets(){

    return (
        <div id={'Register'} className={"w-screen h-auto bg-[#00629B] flex flex-col items-center pb-[2rem]"}>
            <h2 className={"text-4xl text-white tracking-tight font-bold pt-[3rem]"}> Secure your Spot </h2>

            <p className={"w-[80%] lg:w-[70%] text-lg text-white text-center text-balance pt-[2rem]"}> Don't miss out on the opportunity to be a part of TechX Florida 2025.
                Register today to secure your spot at this landmark event.

            </p>

            <div className={"flex gap-x-4"}>

                <a className={"hover:scale-110 duration-300 ease-in-out cursor-pointer"} href="https://bullsconnect.usf.edu/ieeecs/rsvp_boot?id=1985102" target="_blank" rel="noopener noreferrer">
                  <button className={"w-[11rem] h-[4rem] bg-[#FFA300] rounded mt-[2rem]"}>
                        <h2 className={"font-bold text-[#00629B] text-balance text-center"}> Register Now (USF Students) </h2>
                  </button>
                </a>

                 <a className={"hover:scale-110 duration-300 ease-in-out cursor-pointer"} href="https://bullsconnect.usf.edu/ieeecs/rsvp_boot?id=1985102"  target="_blank" rel="noopener noreferrer">
                  <button className={"w-[11rem] h-[4rem] border-2 border-[#FFA300]  rounded mt-[2rem]"}>
                        <h2 className={"font-bold text-[#FFF]"}> Buy Tickets </h2>
                  </button>
                </a>
            </div>
        </div>
    )
}