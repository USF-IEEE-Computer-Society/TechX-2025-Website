import ConferenceScheduler from "./Conference";

function Schedule() {

    return (
        <>
            <div id={'Schedule'} className={"w-full h-auto bg-white flex flex-col items-center p-[1rem] mb-10 min-h-screen"}>
                <h2 className={"text-4xl tracking-tight font-bold mt-[3rem] mb-[2rem] text-center"}>Schedule TechX Florida 2025</h2>

                <p className={"w-[80%] lg:w-[70%] text-lg text-center text-balance mb-8"}> Last updated: 10/23/2025 </p>

                <div className="w-full">
                    <ConferenceScheduler />
                </div>

            </div>
        </>

    )
}

export default Schedule
