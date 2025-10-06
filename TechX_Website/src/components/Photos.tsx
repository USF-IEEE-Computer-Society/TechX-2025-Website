import image1 from "../assets/techx2024/20241123_141312.jpg"
import IMG_0017 from "../assets/techx2024/IMG_0017.jpg"
import IMG_0023 from "../assets/techx2024/IMG_0023.jpg"
import IMG_0028 from "../assets/techx2024/IMG_0028.jpg"
import IMG_0033 from "../assets/techx2024/IMG_0033.jpg"
import IMG_0044 from "../assets/techx2024/IMG_0044.jpg"

export default function Photos(){

    return (
        <div id={'Register'} className={"w-full h-auto bg-white flex flex-col items-center pb-[2rem] p-[1rem]"}>
            <h2 className={"text-4xl tracking-tight font-bold pt-[3rem]"}> TechX Florida 2024 </h2>

            <p className={"w-[80%] lg:w-[70%] text-lg text-center text-balance pt-[2rem] mb-8"}>  See how it was last year
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center [&>img]:md:h-75 [&>img]:h-30 ">

                <img src={image1} alt="Photo 1" />
                <img src={IMG_0017} alt="Photo 2" />
                <img src={IMG_0023} alt="Photo 3" />
                <img src={IMG_0028} alt="Photo 4" />
                <img src={IMG_0033} alt="Photo 5" />
                <img src={IMG_0044} alt="Photo 6" />


            </div>


        </div>
    )
}