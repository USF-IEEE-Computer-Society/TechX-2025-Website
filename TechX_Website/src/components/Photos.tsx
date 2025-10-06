import IMG_0016 from "../assets/new_techx2024/IMG_0016.jpg"
import IMG_0023 from "../assets/new_techx2024/IMG_0023.jpg"
import IMG_0063 from "../assets/new_techx2024/IMG_0063.jpg"
import IMG_0113 from "../assets/new_techx2024/IMG_0113.jpg"
import IMG_0218 from "../assets/new_techx2024/IMG_0218.jpg"
import IMG_0251 from "../assets/new_techx2024/IMG_0251.jpg"
import IMG_0287 from "../assets/new_techx2024/IMG_0287.jpg"

export default function Photos(){

    return (
        <div id={'Register'} className={"w-full h-auto bg-[#F5F5F5] flex flex-col items-center pb-[3rem] p-[1rem]"}>
            <h2 className={"text-4xl tracking-tight font-bold pt-[3rem]"}> TechX Florida 2024 </h2>

            <p className={"w-[80%] lg:w-[70%] text-lg text-center text-balance pt-[2rem] mb-8"}>  See how it was last year
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center [&>img]:md:h-75 [&>img]:h-57 ">

                <img src={IMG_0251} alt="Photo 5"/>
                <img src={IMG_0016} alt="Photo 1"/>
                <img src={IMG_0113} alt="Photo 2"/>
                <img src={IMG_0063} alt="Photo 3" className={"hidden md:block"}/>
                <img src={IMG_0218} alt="Photo 4" className={"hidden md:block"}/>
                <img src={IMG_0287} alt="Photo 6" className={"hidden md:block"}/>

            </div>


        </div>
    )
}