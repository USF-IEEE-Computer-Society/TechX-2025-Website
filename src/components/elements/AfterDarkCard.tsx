interface AfterDarkCardProps {
    header: string;
    subheader: string;
}

import FadeInSection from "../animations/FadeInSection";

export default function AfterDarkCard({ header, subheader }: AfterDarkCardProps){
    return(
        <FadeInSection>
        <div className="afterdark-card md:h-[200px] h-[190px] md:w-[200px] w-[150px] border-yellow-400 shadow-[0_0_20px_2px_rgba(255,215,0,0.7)] text-gray-300 font-sans text-pretty p-4">
            <p className="text-base md:text-xl font-bold mb-2">{header}</p>
            <p className="text-sm md:text-base">{subheader}</p>
        </div>
        </FadeInSection>
    )
}