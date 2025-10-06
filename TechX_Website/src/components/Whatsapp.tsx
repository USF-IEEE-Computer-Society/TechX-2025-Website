export default function Whatsapp(){

    return (
        <div id={'Register'} className={"w-full h-auto bg-[#F5F5F5] flex flex-col items-center pb-[2rem]"}>
            <h2 className={"text-4xl tracking-tight font-bold pt-[3rem] text-center"}>Join Whatsapp Community of TechX</h2>

            <p className={"w-[80%] lg:w-[70%] text-lg text-center text-balance pt-[1.5rem] mb-8"}> Subheader

            </p>
            <a className={"hover:scale-110 duration-300 ease-in-out cursor-pointer mt-2"}
               href="https://chat.whatsapp.com/I3uF8X6FHAr3xF8DGfALgA" target="_blank"
               rel="noopener noreferrer">
                <button className={"w-[15rem] h-[4rem] bg-[#FFA300] rounded cursor-pointer"}>
                    <h2 className={"text-base font-bold text-black text-balance text-center"}>Join</h2>
                </button>
            </a>


        </div>
    )
}