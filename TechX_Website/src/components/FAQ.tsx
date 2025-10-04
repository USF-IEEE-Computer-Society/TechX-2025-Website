import {List, PlusIcon} from "lucide-react";
import {useState} from "react";

type Faq_Block = {
    id: number
    Question: string
    Response: string
}


let Questions: Faq_Block[] = [
    {id: 0, Question: "Will there be any available parking for visitors?", Response: 'Yes! Visitor parking will be available on campus near the main venue. Please follow the posted signs or check our website for a parking map.'},
    {id: 1, Question: "What time does the event start?", Response: "Mark your calendars for November 8. The event kicks off at 11:00 AM with registration and check-in and ends at 5:00 PM."},
    {id: 2, Question: "Where is the event happening?", Response: "TechX will take place at the University of South Florida’s Engineering 2 building. "},
    {id: 3, Question: "Where can I see the full TechX schedule?", Response: "You can find the full schedule on our official website at techxflorida.com/schedule, or through the event app."},
    {id: 4, Question: "Will there be any recordings of the talks?", Response: "Yes, all keynote talks and selected breakout sessions will be recorded. The recordings will be made available to registered attendees after the event."},
]



export default function FAQ(){
    const [OpenMenus, SetOpenMenus] = useState<boolean[]>(new Array<boolean>(Questions.length))

    return (
        <div id='FAQ' className={"w-full h-auto pb-[1rem] bg-[#FFFEFE] flex flex-col items-center mb-7"}>
            <h1 className={'text-2xl md:text-4xl tracking-tight font-bold pt-[2rem]'}> Frequently Asked Questions </h1>




            {Questions.map(Question => (

                <>

                    <div key={Question.id} className={`flex flex-col border border-black h-[4rem] ${OpenMenus[Question.id]? "rounded-t-xl": "rounded-xl"}  w-[80%] bg-[#D9D9D9] mt-[1rem] flex pl-[1rem]`}>

                        <div className={"w-full h-[4rem] flex justify-between items-center"}>

                            <button onClick={()=> ToggleButton(Question.id)} className={"relative w-[100%] flex items-center h-full hover:cursor-pointer"}>
                                {Question.Question}
                                <div className={`hidden absolute w-[15px] h-[2px] ${OpenMenus[Question.id]? " rotate-225": ""} duration-300 ease-in-out bg-black`}/>
                                <div className={`hidden absolute h-[15px] w-[2px]  ${OpenMenus[Question.id]? "rotate-225": ""} duration-300 ease-in-out bg-black`}/>
                            </button>
                        </div>

                    </div>

                     <div className={`w-[80%] rounded-b-xl shadow-xl ${OpenMenus[Question.id]? "h-[8rem] opacity-100": "h-0 opacity-0"} transition-all duration-300 ease-in-out
                                        flex justify-left items-center pl-3 `}>
                         <h2 className={"w-[90%] h-[80%] flex justify-left items-center text-pretty pl-6"}>
                         {Question.Response}
                         </h2>

                     </div>

                </>


            ))}



        </div>
    )

    function ToggleButton(ButtonId: number){
        SetOpenMenus((Menu) => {
            let NewMenu = [...Menu]
            NewMenu[ButtonId] = !NewMenu[ButtonId]
            return NewMenu
        })
    }

}



