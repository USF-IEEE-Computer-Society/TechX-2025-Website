import { useState } from "react";

type Faq_Block = {
    id: number;
    Question: string;
    Response: string;
};

const Questions: Faq_Block[] = [
    { id: 0, Question: "Who can attend TechX, and is there a registration fee?", Response: "TechX is open to all students, professionals, and tech enthusiasts interested in artificial intelligence and innovation. The conference is completely free to attend, but advance <a href='#Register'>registration</a> is required to reserve your spot." },
    { id: 1, Question: "What is the venue for the conference?", Response: "The conference will take place at 3820 USF Alumni Drive, Tampa, FL 33620." },
    { id: 2, Question: "When is it?", Response: "TechX 2025 will be held on November 8th, 2025, from 11:00 AM to 5:00 PM." },
    { id: 3, Question: "Where can I find the list of speakersData?", Response: "You can view the full list of speakersData <a href='#Events'>here</a>." },
    { id: 4, Question: "How will I benefit from this conference?", Response: "TechX offers a valuable opportunity to learn from AI professionals from leading companies such as Intel, Microsoft, Jabil, Verizon, Atlassian, and Tampa Bay startups Attendees will gain insights into real-world AI applications, connect with industry experts, and expand their professional network through exclusive networking sessions and interactive discussions." },
    { id: 5, Question: "Will food or refreshments be provided?", Response: "Yes, complimentary lunch and refreshments will be available for all registered attendees." },
    { id: 6, Question: "Is parking available at the venue?", Response: "Yes, parking will be available near the venue. Locations: <a href='https://share.google/1OlcDm3XVB1zLOmVy' target='_blank'>Richard A.Beard Parking Facility</a> <a href='https://www.usf.edu/parking/documents/parkingmap.pdf' target='_blank'>USF parking map</a>." },
    { id: 7, Question: "How can I get involved with TechX?", Response: "Companies and startups interested in tabling, sponsoring, or speaking can contact the organizing teamData at <a href='mailto:vs33@usf.edu'>vs33@usf.edu</a>. Students interested in volunteering can fill out form <a href='https://forms.gle/dxrYSmsqJVcwb6nS8' target='_blank'>here</a>." },
    { id: 8, Question: "Will there be any recordings of the talks?", Response: "Yes, all keynote talks and selected breakout sessions will be recorded. The recordings will be made available to registered attendees after the event." },
    { id: 9, Question: "Is there a dress code for attendees?", Response: "There’s no strict dress code, but since there will be professional headshots and companies tabling and some of them hiring, you can dress smart casual or business casual if you’d like." },
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
        <div id="FAQ" className="w-full h-auto pb-[1rem] bg-[#F5F5F5] flex flex-col items-center mb-[1.75rem]">
            <h1 className="text-[1.5rem] md:text-[2rem] tracking-tight font-bold pt-[2rem] mb-[1.25rem]">
                Frequently Asked Questions
            </h1>

            <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
                {Questions.map((q) => {
                    const open = OpenMenus[q.id];

                    return (
                        <div key={q.id} className="w-full">
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
                                        <p className="text-[1.0625rem] leading-[1.75rem] text-black/80" dangerouslySetInnerHTML={{ __html: q.Response }}>
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
