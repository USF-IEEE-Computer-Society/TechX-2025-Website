import AfterDarkCard from "../elements/AfterDarkCard";
import AfterDarkInfoCard from "../elements/AfterDarkInfoCard";
import { afterDarkCards } from "../../data/afterDarkData";

export default function AfterDark(){

    return (
        <div id='AfterDark' className={"w-full h-auto bg-[#0a0e27] flex flex-col items-center pb-[3rem] p-[1rem] overflow-hidden"}>
            <div className={"w-full flex flex-col justify-center items-center mb-10 -mt-15"}>


                    <h1 className={"text-[135px] md:text-[250px] tracking-tight pt-[1rem] font-custom neon-text"}>
                        <div className="flex md:flex-row flex-col items-center gap-0 md:gap-10">
                            <div className="h-[100px] md:h-auto">
                                <span className="neon-text-purple" style={{position: "relative", left: "0.14em"}}>T</span>
                                <span className="neon-text-purple">ech</span>
                                <span className="neon-text-purple" style={{position: "relative", left: "-0.06em"}}>X</span>

                            </div>
                            <div>
                                 <span>After Dark</span>
                            </div>
                        </div>

                    </h1>



                <p className={"w-[90%] text-md md:text-2xl text-ellipsis text-gray-300 text-center text-pretty -m-8 md:-m-18"}> Social & Fundraising event with no agenda right after TechX Florida 2025 </p>
            </div>

            
            <div className="flex flex-col md:flex-row gap-3 md:mt-15 mt-5 hidden md:flex">
                <AfterDarkInfoCard text="November 8, 2025" />
                <AfterDarkInfoCard text="6 PM - 8 PM" />
                <AfterDarkInfoCard text="USF, Marshall Student Center 2709" />
            </div>

            <div className="flex flex-col md:flex-row gap-3 md:mt-15 mt-5 md:hidden flex">
                <div className="flex flex-row gap-3">
                    <AfterDarkInfoCard text="November 8, 2025" />
                    <AfterDarkInfoCard text="6 PM - 8 PM" />
                </div>
                <AfterDarkInfoCard text="USF, Marshall Student Center 2709" />
            </div>

            


            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 place-items-center mt-10">
                {afterDarkCards.map((card, index) => (
                    <AfterDarkCard 
                        key={index}
                        header={card.header}
                        subheader={card.subheader}
                    />
                ))}
            </div>

            <a className={"hover:scale-110 duration-300 ease-in-out cursor-pointer mt-10"}
               href="https://events.vtools.ieee.org/m/511760" target="_blank"
               rel="noopener noreferrer">
                <button id="SignUpForAfterDark" className={"w-[16rem] h-[4.25rem] bg-[#FFA300] rounded cursor-pointer"}>
                    <h2 className={"text-base font-bold text-black text-balance text-center"}>Sign Up for TechX After Dark</h2>
                </button>
            </a>

        </div>
    )
}