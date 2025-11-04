import iexImg from "../../../src/assets/companies/IEX_GDIT_black.png"
import verizonImg from "../../../src/assets/companies/Verizon_GlowWordmark_RGB_2025.jpg"
import tampadevsImg from "../../../src/assets/companies/tampa-devs logo.svg"
import isacaImg from "../../../src/assets/companies/ISACA_logo_WestFlorida_RGB.png"
import CouchBaseImg from "../../../src/assets/companies/Couchbase_Logo.jpg"
import USFITImg from "../../../src/assets/companies/information-technology-lightbg-2c-rgb-h.png"
import uberaiImg from "../../../src/assets/companies/uberai.jpg"
import icode from "../../../src/assets/companies/icode.png"


export default function Companies(){

    return (
        <div id={'Organizers'} className={"w-full h-auto bg-white flex flex-col items-center pb-[3rem] p-[1rem]"}>
            <div className={"w-full flex flex-col justify-center items-center gap-3 mb-10"}>
                <h2 className={"text-4xl md:text-5xl tracking-tight font-bold pt-[3rem]"}>Participating Companies</h2>
                <p className={"w-[90%] text-md md:text-2xl text-ellipsis text-gray-600 text-center text-pretty"}> Connect
                    with the companies tabling and showcasing opportunities at TechX Florida 2025</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">

                <a href="https://ironeaglex.com" target="_blank" rel="noopener noreferrer">
                    <img src={iexImg} className="h-16 md:h-32" loading="lazy"/>
                </a>
                <a href="https://www.verizon.com" target="_blank" rel="noopener noreferrer">
                    <img src={verizonImg} className="h-16 md:h-32" loading="lazy"/>
                </a>

                <a href="https://www.westfloridaisaca.org/" target="_blank" rel="noopener noreferrer">
                    <img src={isacaImg} className="h-16 md:h-32" loading="lazy"/>
                </a>
                <a href="https://www.couchbase.com/" target="_blank" rel="noopener noreferrer">
                    <img src={CouchBaseImg} className="h-16 md:h-32" loading="lazy"/>
                </a>
                <a href="https://www.usf.edu/it/" target="_blank" rel="noopener noreferrer">
                    <img src={USFITImg} className="h-16 md:h-32" loading="lazy"/>
                </a>
                <a href="https://www.uber.com/us/en/ai-solutions/" target="_blank" rel="noopener noreferrer">
                    <img src={uberaiImg} className="h-16 md:h-32" loading="lazy"/>
                </a>
                <a href="https://icodeschool.com/" target="_blank" rel="noopener noreferrer">
                    <img src={icode} className="h-16 md:h-32" loading="lazy"/>
                </a>
                <a href="https://www.tampadevs.com/" target="_blank" rel="noopener noreferrer">
                    <img src={tampadevsImg} className="h-16 md:h-32 mt-5" loading="lazy"/>
            </a>



            </div>



        </div>
    )
}