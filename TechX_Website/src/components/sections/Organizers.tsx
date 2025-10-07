import ieeecsfwcs from "../../assets/logos/ieee-cs-fwcs.png"
import ieeecs from "../../assets/logos/ieee-cs-logo.webp"
import ieeecssyp from "../../assets/logos/ieee-cs-syp.png"
import ieeecsusfwcs from "../../assets/logos/ieee-cs-usf-orange.png"
import ieee from "../../assets/logos/IEEE-Logo.jpg"

export default function Organizers(){

    return (
        <div id={'Organizers'} className={"w-full h-auto bg-white flex flex-col items-center pb-[3rem] p-[1rem]"}>
            <h2 className={"text-4xl tracking-tight font-bold pt-[2rem] mb-5"}> Organizers </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
                {/* upper deck */}
                <img src={ieee} className="h-16 md:h-32"/>
                <img src={ieeecs} className="h-16 md:h-32"/>
                <img src={ieeecssyp} className="h-16 md:h-32"/>

                {/* lower deck - mobile */}
                <img src={ieeecsfwcs} className="h-16 md:hidden"/>
                <div className="col-span-2 flex justify-center md:hidden">
                    <img src={ieeecsusfwcs} className="h-16"/>
                </div>

                {/* lower deck - desktop */}
                <div className="hidden md:flex md:col-span-3 justify-center gap-10">
                    <img src={ieeecsfwcs} className="h-32"/>
                    <img src={ieeecsusfwcs} className="h-32"/>
                </div>
            </div>


        </div>
    )
}