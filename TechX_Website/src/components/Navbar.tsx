import logo from "../assets/logoTechX.webp"
import logo2 from "../assets/ieee-cs-logo.webp"
import {useState} from "react";
import {Brain, BrainCircuit, Cog, CircuitBoard, Atom} from "lucide-react";

export default function Navbar(){
    const [IsOpen, SetOpen] = useState<boolean>(false)


    return (
        <div className={'relative'}>

           <div className={"w-screen h-[6rem] bg-white shadow-md flex items-center justify-between"}>
            <div className="flex items-center gap-4 pl-[1rem]">
                <img src={logo} alt="TechX 2025 Logo" className="h-[2.5rem] md:h-[4rem] w-[7.5rem] md:w-[14rem]" />
                <img src={logo2} alt="IEEE CS Logo" className="h-[2.5rem] md:h-[4rem] w-[7.5rem] md:w-[14rem]" />
            </div>

               <button onClick={()=> SetOpen(state => !state)} className={"relative w-[50px] h-[50px] flex flex-col gap-1 justify-center items-center pr-[1rem]"}>
                   <div className={`${IsOpen? "absolute rotate-45 ": ""} duration-300 ease-in-out w-[15px] h-[2px] bg-black`}/>
                   <div className={`${IsOpen? "opacity-0": ""} duration-300 ease-in-out w-[15px] h-[2px] bg-black`}/>
                   <div className={`${IsOpen? "absolute rotate-135 ": ""} duration-300 ease-in-out w-[15px] h-[2px] bg-black`}/>
               </button>

           </div>

            <div className={`absolute top-full overflow-hidden w-full z-3 grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center ${IsOpen? "opacity-100 h-[22rem] md:h-[20rem] lg:h-[16rem]": "opacity-0 h-0"} transition-all duration-300 ease-in-out bg-stone-100`}>

                <a href={'#Attend'} className={"w-[93%] h-[93%] md:h-[85%] lg:w-[80%] lg:h-[80%] flex flex-col justify-center items-center rounded-xl border border-[#001024] hover:scale-105 duration-200 ease-in-out gap-y-2"}>

                    <div className={"flex flex-col justify-center items-center"}>
                        <BrainCircuit color={"#001024"} size={40}/>
                        <h2 className={"text-lg color-[#001024]"}> Attendance </h2>

                    </div>
                     <p className={"w-[90%] text-center text-balance"}>  Your presence makes the event complete. </p>
                </a>


               <a href={'#Events'}  className={"w-[93%] h-[93%] md:h-[85%] lg:w-[80%] lg:h-[80%] flex flex-col justify-center items-center rounded-xl border border-[#001024] hover:scale-105 duration-200 ease-in-out gap-y-2"}>

                      <div className={"flex flex-col justify-center items-center"}>
                        <Cog size={40}/>
                        <h2 className={"text-lg"}> Events </h2>
                      </div>

                      <p className={"w-[90%] text-center text-balance"}> Don’t miss what’s coming up. </p>
                </a>

               <a href={'#Register'} className={"w-[93%] h-[93%] md:h-[85%] lg:w-[80%] lg:h-[80%] flex flex-col justify-center items-center rounded-xl border border-[#001024] hover:scale-105 duration-200 ease-in-out gap-y-2"}>

                   <div className={"flex flex-col justify-center items-center"}>
                        <CircuitBoard size={40}/>
                        <h2 className={"text-lg"}> Tickets </h2>
                   </div>

                    <p className={"w-[90%] text-center text-balance"}> Grab your tickets before they’re gone. </p>
                </a>

               <a href={'#FAQ'} className={"w-[93%] h-[93%] md:h-[85%] lg:w-[80%] lg:h-[80%] flex flex-col justify-center items-center rounded-xl border border-[#001024] hover:scale-105 duration-200 ease-in-out gap-y-2"}>

                   <div className={"flex flex-col justify-center items-center"}>
                        <Atom size={40}/>
                        <h2 className={"text-lg"}> FAQ </h2>
                   </div>

                    <p className={"w-[90%] text-center text-balance"}>  Everything you need to know, in one place. </p>
                </a>


            </div>



            
        </div>
    )

}