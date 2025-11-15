import SpeakerCard from '../elements/SpeakerCard'

import { speakersData } from '../../data/speakersData'

export default function Highlights() {
  const leftColumnSpeakers = speakersData.filter((_, index) => index % 2 === 0)
  const rightColumnSpeakers = speakersData.filter((_, index) => index % 2 === 1)

  return (
    <div id="Events" className={'w-full h-auto bg-white'}>
      <div className={'w-full flex flex-col justify-center items-center gap-3'}>
        <h2 className={'text-4xl md:text-5xl tracking-tight font-bold pt-[3rem]'}> Event Speakers </h2>
        <p className={'w-[90%] text-md md:text-2xl text-ellipsis text-gray-600 text-center text-pretty'}>
          {' '}
          Explore the exciting features and activities planned for TechX Florida 2025{' '}
        </p>
      </div>

      {/* Mobile layout: Two flex columns */}
      <div className={'md:hidden w-full mt-4 flex gap-[0.5rem] pb-[1rem] px-[0.5rem]'}>
        <div className={'flex-1 flex flex-col gap-[0.5rem] min-w-0'}>
          {leftColumnSpeakers.map((s, i) => (
            <SpeakerCard
              key={i * 2}
              name={s.name}
              company={s.company}
              talkTitle={s.talkTitle}
              headshot={s.headshot}
              linkedinLink={s.linkedinLink}
              pills={s.pills}
            />
          ))}
        </div>
        <div className={'flex-1 flex flex-col gap-[0.5rem] min-w-0'}>
          {rightColumnSpeakers.map((s, i) => (
            <SpeakerCard
              key={i * 2 + 1}
              name={s.name}
              company={s.company}
              talkTitle={s.talkTitle}
              headshot={s.headshot}
              linkedinLink={s.linkedinLink}
              pills={s.pills}
            />
          ))}
        </div>
      </div>

      {/* Tablet and Desktop layout: Grid */}
      <div
        className={
          'hidden md:grid w-full mt-4 gap-[1rem] pb-[1rem] justify-items-center grid-cols-3 lg:grid-cols-5 p-[1rem] lg:p-[4rem]'
        }
      >
        {speakersData.map((s, i) => (
          <SpeakerCard
            key={i}
            name={s.name}
            company={s.company}
            talkTitle={s.talkTitle}
            headshot={s.headshot}
            linkedinLink={s.linkedinLink}
            pills={s.pills}
          />
        ))}
      </div>
    </div>
  )
}
