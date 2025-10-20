import { scheduleData } from "../data/scheduleData";
import TypeBadge from "./elements/TypeBadge";

function Schedule() {

    return (
        <>
            <div id={'Schedule'} className={"w-full h-auto bg-white flex flex-col items-center p-[1rem] mb-10 min-h-screen"}>
                <h2 className={"text-4xl tracking-tight font-bold mt-[3rem] mb-[2rem] text-center"}>Schedule TechX Florida 2025</h2>

                <p className={"w-[80%] lg:w-[70%] text-lg text-center text-balance mb-8"}> Stay tuned for the updates! </p>

                {/*

                <p className={"w-[80%] lg:w-[70%] text-lg text-center text-balance mb-8"}> Last updated: 10/20/2025 </p>


                <div className="w-full max-w-6xl mx-auto overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg table-fixed">
                        <thead>
                            <tr className="bg-gray-100 text-lg">
                                <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700 w-14 md:w-32">Time</th>
                                <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700 w-1/3">Track 1 <br/> ENB 118</th>
                                <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700 w-1/3">Track 2 <br/> ENB 116</th>
                                <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700 w-1/3">Track 3 <br/> Hall of Flags</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleData.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-center">
                                        {item.time}
                                    </td>
                                    {item.track2 === null && item.track3 === null ? (
                                        <td className="border border-gray-300 px-3 py-3 align-top" colSpan={3}>
                                            {item.track1 ? (
                                                <div className="text-center">
                                                    <div className="font-medium text-gray-800 text-lg">{item.track1.title}</div>
                                                    <div className="text-sm text-gray-600 mt-2">
                                                        <p dangerouslySetInnerHTML={{ __html: item.track1.description }}></p>
                                                    </div>
                                                    <div className="text-sm mt-4">
                                                        <TypeBadge type={item.track1.type} />
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400 italic">-</span>
                                            )}
                                        </td>
                                    ) : (
                                        <>
                                            <td className="border border-gray-300 px-3 py-3 align-top">
                                                {item.track1 ? (
                                                    <div>
                                                        <div className="font-medium text-gray-800 align-middle">{item.track1.title}</div>
                                                        <div className="text-sm text-gray-600 mt-1">
                                                            <p dangerouslySetInnerHTML={{ __html: item.track1.description }}></p>
                                                        </div>
                                                        <div className="text-sm mt-4">
                                                            <TypeBadge type={item.track1.type} />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-400 italic">-</span>
                                                )}
                                            </td>
                                            <td className="border border-gray-300 px-3 py-3">
                                                {item.track2 ? (
                                                    <div>
                                                        <div className="font-medium text-gray-800">{item.track2.title}</div>
                                                        <div className="text-sm text-gray-600 mt-1">
                                                            <p dangerouslySetInnerHTML={{ __html: item.track2.description }}></p>
                                                        </div>
                                                        <div className="text-sm mt-4">
                                                            <TypeBadge type={item.track2.type} />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-400 italic">-</span>
                                                )}
                                            </td>
                                            <td className="border border-gray-300 px-3 py-3">
                                                {item.track3 ? (
                                                    <div>
                                                        <div className="font-medium text-gray-800">{item.track3.title}</div>
                                                        <div className="text-sm text-gray-600 mt-1">
                                                            <p dangerouslySetInnerHTML={{ __html: item.track3.description }}></p>
                                                        </div>
                                                        <div className="text-sm mt-4">
                                                            <TypeBadge type={item.track3.type} />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-400 italic">-</span>
                                                )}
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                                    */}
            </div>
        </>

    )
}

export default Schedule
