import logo from "../assets/logos/logoTechX.webp"
import logo2 from "../assets/logos/ieee-cs-logo.webp"
import ieeecsusf from "../assets/logos/ieee-cs-usf-orange.png"
import {useState} from "react";
import {Brain, BrainCircuit, Cog, CircuitBoard, Atom} from "lucide-react";

export default function Navbar(){
    const [IsOpen, SetOpen] = useState<boolean>(false)


    return (
        <div className={'relative'}>

            <nav className="w-full flex flex-col-reverse md:flex-row items-center justify-between md:px-30 py-5 bg-white shadow gap-7">

                <div className="flex items-center gap-6 text-2xl underline decoration-1 font-bold">
                    <a href="#home" className="text-gray-800 hover:text-black font-medium">
                        Home
                    </a>
                    <a href="schedule" className="text-gray-800 hover:text-black font-medium">
                        Schedule
                    </a>
                </div>


                <div className="flex items-center gap-6 pr-2">
                    <img src={logo} alt="TechX 2025 Logo" className="h-17 md:h-[4.5rem]"/>
                    <img src={ieeecsusf} alt="IEEE CS Logo" className="hidden h-10 md:block md:h-[4.5rem]"/>
                </div>


            </nav>


        </div>
    )

}