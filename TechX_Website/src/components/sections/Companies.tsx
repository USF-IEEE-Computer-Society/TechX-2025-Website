import iexImg from "../../../src/assets/companies/IEX_GDIT_black.png"
import verizonImg from "../../../src/assets/companies/Verizon_GlowWordmark_RGB_2025.jpg"


export default function Companies(){

    return (
        <div id={'Organizers'} className={"w-full h-auto bg-white flex flex-col items-center pb-[3rem] p-[1rem]"}>
            <div className={"w-full flex flex-col justify-center items-center gap-3 mb-10"}>
                <h2 className={"text-4xl md:text-5xl tracking-tight font-bold pt-[3rem]"}>Participating Companies</h2>
                <p className={"w-[90%] text-md md:text-2xl text-ellipsis text-gray-600 text-center text-pretty"}> Connect
                    with the companies tabling and showcasing opportunities at TechX Florida 2025</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-7 place-items-center">

                <a href="https://ironeaglex.com" target="_blank" rel="noopener noreferrer">
                    <img src={iexImg} className="h-16 md:h-32"/>
                </a>
                <a href="https://www.verizon.com" target="_blank" rel="noopener noreferrer">
                    <img src={verizonImg} className="h-16 md:h-32 "/>
                </a>


            </div>

            <h2 className={"mt-10 text-center font-bold text-2xl"}>More companies and communities joining soon!</h2>


        </div>
    )
}