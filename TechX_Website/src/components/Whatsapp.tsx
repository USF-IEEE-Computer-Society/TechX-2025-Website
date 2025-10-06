import gbm from "../assets/gbm.png"

export default function Whatsapp(){

    return (
        <div id={'Whatsapp'} className={"w-full h-auto bg-[#F5F5F5] flex flex-col items-center p-[2rem]"}>


            <div className={"flex flex-col md:flex-row items-center"}>


                <div>
                    <img src={gbm} className="h-50 md:h-60"/>
                </div>

                <div className={"flex flex-col items-center h-100% p-[2rem]"}>

                    <h2 className={"text-4xl tracking-tight font-bold text-center m-4"}>Join Whatsapp Community of
                        TechX</h2>

                    <p className={"text-lg text-center text-balance mb-12"}> Network with attendees, get updates, and stay in the loop </p>

                    <a className={"hover:scale-110 duration-300 ease-in-out cursor-pointer mt-2"}
                       href="https://chat.whatsapp.com/I3uF8X6FHAr3xF8DGfALgA" target="_blank"
                       rel="noopener noreferrer">
                        <button className={"w-[15rem] h-[4rem] bg-[#FFA300] rounded cursor-pointer"}>
                            <h2 className={"text-base font-bold text-black text-balance text-center"}>Join</h2>
                        </button>
                    </a>

                </div>


            </div>


        </div>
    )
}