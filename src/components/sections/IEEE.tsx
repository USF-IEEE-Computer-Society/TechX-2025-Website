import ieeecsfwcs from '../../assets/logos/ieee-cs-fwcs.webp'
import ieeecs from '../../assets/logos/ieee-cs-logo.webp'
import ieeecssyp from '../../assets/logos/ieee-cs-syp.webp'
import ieeecsusf from '../../assets/logos/ieee-cs-usf-orange.webp'
import ieee from '../../assets/logos/IEEE-Logo.webp'
import ieeeypr3 from '../../assets/logos/ieee_yp_region3.webp'
import ieeeyp from '../../assets/logos/ieee-yp.webp'
import LazyImage from '../elements/LazyImage'

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
        <LazyImage src={ieee} alt="IEEE Logo" className="h-16 md:h-32" />
        <LazyImage src={ieeeyp} alt="IEEE Young Professionals Logo" className="h-16 md:h-32" />
        <LazyImage src={ieeeypr3} alt="IEEE Young Professionals Region 3 Logo" className="h-16 md:h-32" />
        <LazyImage src={ieeecs} alt="IEEE Computer Society Logo" className="h-16 md:h-32" />

        {/* lower deck - mobile */}
        <LazyImage src={ieeecssyp} alt="IEEE CS SYP Logo" className="h-16 md:hidden" />
        <LazyImage src={ieeecsfwcs} alt="IEEE CS FWCS Logo" className="h-16 md:hidden" />
        <LazyImage src={ieeecsusf} alt="IEEE CS USF Logo" className="h-16 md:hidden col-span-2" />

        {/* lower deck - desktop */}
        <div className="hidden md:flex md:col-span-4 justify-center gap-10">
          <LazyImage src={ieeecssyp} alt="IEEE CS SYP Logo" className="h-32" />
          <LazyImage src={ieeecsfwcs} alt="IEEE CS FWCS Logo" className="h-32" />
          <LazyImage src={ieeecsusf} alt="IEEE CS USF Logo" className="h-32" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-7"></div>
    </div>
  )
}
