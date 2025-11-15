import linkedin from '../../assets/logos/LinkedIn_icon.svg.png'

interface SpeakerCardProps {
  headshot: string
  name: string
  linkedinLink: string
  company: string
  talkTitle: string
  pills: string[]
}

export default function SpeakerCard(props: SpeakerCardProps) {
  return (
    <div className={'w-full flex flex-col rounded-xl mb-2 md:h-[635px] md:mb-5'}>
      <img className={'object-fit rounded-t-xl'} src={props.headshot} alt={`${props.name} headshot`} loading="lazy" />

      <div className={'shadow-2xl flex flex-col h-full pl-[1rem] pt-[1.5rem] pr-[1rem] pb-[1rem] rounded-b-xl relative'}>
        <h2 className={'text-2xl font-bold mb-1 break-words'}>{props.name}</h2>

        <h3 className={'text-lg md:text-xl lg:text-xl xl:text-xl tracking-tight font-semibold break-words'}>{props.company}</h3>

        <p className={'w-[90%] text-md md:text-xl text-gray-600 mt-3'}>{props.talkTitle}</p>

        <div className={`flex ${props.pills.includes('Tabling') ? 'flex-row' : 'flex-col'} gap-2 mt-3 mb-3 text-sm pr-[1rem]`}>
          {props.pills.includes('Speaker') ? <span className="Pill bg-green-100 text-green-800">Speaker</span> : null}

          {props.pills.includes('Panel') ? <span className={'Pill bg-purple-100 text-purple-800'}>"Careers in Tech" Panelist</span> : null}
          {props.pills.includes('PanelModerator') ? (
            <span className={'Pill bg-purple-100 text-purple-800'}>"Careers in Tech" Panel Moderator</span>
          ) : null}
          {props.pills.includes('Workshop') ? <span className={'Pill bg-orange-100 text-orange-800 '}>Workshop</span> : null}

          {props.pills.includes('Tabling') ? <span className={'Pill bg-gray-200 text-gray-800'}>Tabling</span> : null}
        </div>

        {/* Spacer to push LinkedIn icon to bottom */}
        <div className={'flex-grow'}></div>

        <div className={'flex justify-end mt-3'}>
          <a href={props.linkedinLink} target="_blank" rel="noopener noreferrer">
            <img className={'h-8'} src={linkedin} alt="Linkedin Icon" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  )
}
