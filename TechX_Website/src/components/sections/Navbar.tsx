import logo from "../../assets/logos/logoTechX.webp"
import ieeecsusf from "../../assets/logos/ieee-cs-usf-orange.png"
import {useState} from "react";
import { Link } from "react-router-dom";

export default function Navbar(){


    return (
        <div className={'relative'}>

            <nav className="w-full flex flex-col-reverse md:flex-row items-center justify-between md:px-30 py-5 bg-white shadow gap-7">

                <div className="flex items-center gap-6 text-2xl underline decoration-1 font-bold">


                    <Link className={"hover:scale-105 duration-300 ease-in-out cursor-pointer mt-2"}
                       to="/">
                        <button id="HomeButton"
                            className={"w-[8rem] h-[3rem] bg-white border-2 border-[#FFA300] rounded cursor-pointer"}>
                            <h2 className={"text-base font-bold text-black text-balance text-center"}>Home</h2>
                        </button>
                    </Link>

                    <Link className={"hover:scale-105 duration-300 ease-in-out cursor-pointer mt-2"}
                       to="/schedule">
                        <button id="ScheduleButton"
                            className={"w-[8rem] h-[3rem] bg-white border-2 border-[#FFA300] rounded cursor-pointer"}>
                            <h2 className={"text-base font-bold text-black text-balance text-center"}>Schedule</h2>
                        </button>
                    </Link>

                </div>


                <div className="flex items-center gap-6 pr-2">
                    <img src={logo} alt="TechX 2025 Logo" className="h-17 md:h-[4.5rem]"/>
                    <a href="https://bullsconnect.usf.edu/ieeecs/home" target="_blank" rel="noopener noreferrer">
                        <img src={ieeecsusf} alt="IEEE CS Logo" className="hidden h-10 md:block md:h-[4.5rem]"/>
                    </a>

                </div>


            </nav>


        </div>
    )

}