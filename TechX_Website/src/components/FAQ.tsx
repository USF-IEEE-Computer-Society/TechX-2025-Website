import { useState } from "react";

type Faq_Block = {
    id: number;
    Question: string;
    Response: string;
};

const Questions: Faq_Block[] = [
    { id: 0, Question: "Will there be any available parking for visitors?", Response: "Yes! Visitor parking will be available on campus near the main venue. Please follow the posted signs or check our website for a parking map." },
    { id: 1, Question: "What time does the event start?", Response: "Mark your calendars for November 8. The event kicks off at 11:00 AM with registration and check-in and ends at 5:00 PM." },
    { id: 2, Question: "Where is the event happening?", Response: "TechX will take place at the University of South Florida’s Engineering 2 building." },
    { id: 3, Question: "Where can I see the full TechX schedule?", Response: "You can find the full schedule on our official website at techxflorida.com/schedule, or through the event app." },
    { id: 4, Question: "Will there be any recordings of the talks?", Response: "Yes, all keynote talks and selected breakout sessions will be recorded. The recordings will be made available to registered attendees after the event." },
];

export default function FAQ() {
    const [OpenMenus, SetOpenMenus] = useState<boolean[]>(
        Array(Questions.length).fill(false)
    );

    const ToggleButton = (id: number) => {
        SetOpenMenus((prev) => {
            const next = prev.slice();
            next[id] = !next[id];
            return next;
        });
    };

    return (
        <div id="FAQ" className="w-full h-auto pb-[1rem] bg-[#FFFEFE] flex flex-col items-center mb-[1.75rem]">
            <h1 className="text-[1.5rem] md:text-[2rem] tracking-tight font-bold pt-[2rem] mb-[1.25rem]">
                Frequently Asked Questions
            </h1>

            <div className="w-full flex flex-col items-center gap-[1rem]">
                {Questions.map((q) => {
                    const open = OpenMenus[q.id];

                    return (
                        <div key={q.id} className="w-[80%]">
                            {/* Header */}
                            <div
                                className={[
                                    "flex flex-col border border-black bg-white hover:bg-[#FFA300] transition-colors",
                                    open ? "rounded-t-[0.75rem] shadow-[0_0.5rem_2rem_rgba(0,0,0,0.12)]" : "rounded-[0.75rem]"
                                ].join(" ")}
                            >
                                <button onClick={() => ToggleButton(q.id)} aria-expanded={open} className="relative w-full flex items-center justify-between px-[1rem] py-[1rem] text-left">
                                    <div className="flex items-center gap-[0.75rem] pr-[2.25rem]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className={["w-[1.5rem] h-[1.5rem] transition-transform duration-200", open ? "rotate-180" : "rotate-0"].join(" ")}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            aria-hidden="true"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                        </svg>

                                        <span className="text-[1.125rem] md:text-[1.25rem] leading-[1.75rem]">
                      {q.Question}
                    </span>
                                    </div>
                                </button>
                            </div>

                            <div
                                className={[
                                    "border-x border-b border-black rounded-b-[0.75rem] bg-white",
                                    "transition-[grid-template-rows,opacity] duration-200 ease-out",
                                    "grid",
                                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                ].join(" ")}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-[1.5rem] py-[1.25rem]">
                                        <p className="text-[1.0625rem] leading-[1.75rem] text-black/80">
                                            {q.Response}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
