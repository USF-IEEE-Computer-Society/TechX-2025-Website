


export default function Navbar(){

    return (
       <div className={"w-screen h-[6rem] bg-white shadow-md flex items-center justify-between"}>

           <h1 className={"pl-[1rem] text-2xl"}> TechX 2025 </h1>

           <div className={"w-[50px] h-[50px] flex flex-col gap-1 justify-center items-center pr-[1rem]"}>
               <div className={"w-[15px] h-[2px] bg-black"}/>
               <div className={"w-[15px] h-[2px] bg-black"}/>
               <div className={"w-[15px] h-[2px] bg-black"}/>
           </div>

       </div>
    )

}