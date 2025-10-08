import ieeecsfwcs from "../../assets/logos/ieee-cs-fwcs.png"
import ieeecs from "../../assets/logos/ieee-cs-logo.webp"
import ieeecssyp from "../../assets/logos/ieee-cs-syp.png"
import ieeecsusfwcs from "../../assets/logos/ieee-cs-usf-orange.png"
import ieee from "../../assets/logos/IEEE-Logo.jpg"
import ieeelife from "../../assets/logos/ieee_life_members-logo.webp"

export default function IEEE(){

    return (
        <div id={'Organizers'} className={"w-full h-auto bg-white flex flex-col items-center pb-[3rem] p-[1rem]"}>
            <div className={"w-full flex flex-col justify-center items-center gap-3 mb-10"}>
                <h2 className={"text-4xl md:text-5xl tracking-tight font-bold pt-[3rem]"}>Powered by IEEE</h2>
                <p className={"w-[90%] text-md md:text-2xl text-ellipsis text-gray-600 text-center text-pretty"}> The world’s largest technical professional organization </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                {/* upper deck */}
                <img src={ieee} className="h-16 md:h-32"/>
                <img src={ieeelife} className="h-16 md:h-32"/>
                <img src={ieeecs} className="h-16 md:h-32"/>
                <img src={ieeecssyp} className="h-16 md:h-32"/>

                <img src={ieeecsfwcs} className="h-16 md:h-32"/>
                <img src={ieeecsusfwcs} className="h-16 md:h-32"/>


            </div>


        </div>
    )
}