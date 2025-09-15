
import logo from "../assets/logoTechX.jpeg"
import logo2 from "../assets/ieee-cs-logo.png"

export default function Navbar(){

    return (
       <div className={"w-screen h-[6rem] bg-white shadow-md flex items-center justify-between"}>
        <div className="flex items-center gap-4 pl-[1rem]">
            <img src={logo} alt="TechX 2025 Logo" className="h-[4rem] w-auto" />
            <img src={logo2} alt="IEEE CS Logo" className="h-[4rem] w-auto" />
        </div>

           <div className={"w-[50px] h-[50px] flex flex-col gap-1 justify-center items-center pr-[1rem]"}>
               <div className={"w-[15px] h-[2px] bg-black"}/>
               <div className={"w-[15px] h-[2px] bg-black"}/>
               <div className={"w-[15px] h-[2px] bg-black"}/>
           </div>

       </div>
    )

}