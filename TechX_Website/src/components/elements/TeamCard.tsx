import linkedin from "../../assets/logos/LinkedIn_icon.svg.png";

interface TeamCardProps {
    name: string;
    major: string;
    headshot: string;
    linkedinLink: string;
    year: string;
    pills: string[];
}

function getPillColor(pill: string): string {
    const operations = ['Chair', 'Vice-Chair', 'Planning', 'Logistics', 'Venue'];
    const growthOutreach = ['Marketing', 'Outreach', 'TechX Ambassador'];
    const finance = ['Finance', 'Sponsorships'];
    const contentWeb = ['Website', 'Design'];

    if (operations.includes(pill)) {
        return 'bg-green-100 text-green-800';
    } else if (growthOutreach.includes(pill)) {
        return 'bg-purple-100 text-purple-800';
    } else if (finance.includes(pill)) {
        return 'bg-orange-100 text-orange-800';
    } else if (contentWeb.includes(pill)) {
        return 'bg-blue-100 text-blue-800';
    } else {
        return 'bg-gray-200 text-gray-800';
    }
}

export default function TeamCard(props: TeamCardProps) {
    return (
        <div className={"w-full flex flex-col rounded-xl mb-5 h-full"}>

            <img className={"object-cover rounded-t-xl w-full aspect-square"} src={props.headshot} loading="lazy"/>

            <div className={"shadow-2xl flex flex-col h-full pl-[0.75rem] pt-[1.5rem] pr-[0.75rem] pb-[1rem] rounded-b-xl"}>

                <h2 className={"text-2xl font-bold break-words mb-4"}>{props.name}</h2>

                <h3 className={"text-lg md:text-xl lg:text-xl xl:text-xl tracking-tight break-words"}>{props.major}</h3>

                <p className={"text-md"}>{props.year}</p>

                <div className={"mt-3 mb-3"}>
                    {props.pills.map((pill, idx) => (
                        <span className={`inline-flex self-start w-fit px-2 py-1 font-medium rounded-lg md:rounded-full text-xs md:text-sm m-1 ${getPillColor(pill)}`} key={idx}>{pill}</span>
                    ))}
                </div>

                {/* Spacer to push LinkedIn icon to bottom */}
                <div className={"flex-grow"}></div>

                <div className={"flex justify-end mt-3"}>
                    <a href={props.linkedinLink} target="_blank" rel="noopener noreferrer">
                        <img className={"h-8"} src={linkedin} alt="LinkedIn Icon" loading="lazy"/>
                    </a>
                </div>

            </div>

        </div>
    )
}