import ieeecsfwcs from '../../assets/logos/ieee-cs-fwcs.png'
import ieeecs from '../../assets/logos/ieee-cs-logo.webp'
import ieeecssyp from '../../assets/logos/ieee-cs-syp.png'
import ieeecsusf from '../../assets/logos/ieee-cs-usf-orange.png'
import ieee from '../../assets/logos/IEEE-Logo.jpg'
import ieeeypr3 from '../../assets/logos/ieee_yp_region3.png'
import ieeeyp from '../../assets/logos/ieee-yp.png'

export default function IEEE() {
  return (
    <div id={'Organizers'} className={'w-full h-auto bg-white flex flex-col items-center p-[1rem]'}>
      <div className={'w-full flex flex-col justify-center items-center gap-3 mb-10'}>
        <h2 className={'text-4xl md:text-5xl tracking-tight font-bold pt-[3rem]'}>Powered by IEEE</h2>
        <p className={'w-[90%] text-md md:text-2xl text-ellipsis text-gray-600 text-center text-pretty'}>
          {' '}
          The world’s largest technical professional organization{' '}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
        {/* upper deck */}
        <img src={ieee} className="h-16 md:h-32" loading="lazy" />
        <img src={ieeeyp} className="h-16 md:h-32" loading="lazy" />
        <img src={ieeeypr3} className="h-16 md:h-32" loading="lazy" />
        <img src={ieeecs} className="h-16 md:h-32" loading="lazy" />

        {/* lower deck - mobile */}
        <img src={ieeecssyp} className="h-16 md:hidden" loading="lazy" />
        <img src={ieeecsfwcs} className="h-16 md:hidden" loading="lazy" />
        <img src={ieeecsusf} className="h-16 md:hidden col-span-2" loading="lazy" />

        {/* lower deck - desktop */}
        <div className="hidden md:flex md:col-span-4 justify-center gap-10">
          <img src={ieeecssyp} className="h-32" loading="lazy" />
          <img src={ieeecsfwcs} className="h-32" loading="lazy" />
          <img src={ieeecsusf} className="h-32" loading="lazy" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-7"></div>
    </div>
  )
}
