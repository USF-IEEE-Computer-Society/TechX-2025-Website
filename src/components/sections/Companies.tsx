import iexImg from '../../../src/assets/companies/IEX_GDIT_black.webp'
import verizonImg from '../../../src/assets/companies/Verizon_GlowWordmark_RGB_2025.webp'
import tampadevsImg from '../../../src/assets/companies/tampa-devs logo.svg'
import isacaImg from '../../../src/assets/companies/ISACA_logo_WestFlorida_RGB.webp'
import CouchBaseImg from '../../../src/assets/companies/Couchbase_Logo.webp'
import USFITImg from '../../../src/assets/companies/information-technology-lightbg-2c-rgb-h.webp'
import uberaiImg from '../../../src/assets/companies/uberai.webp'
import icode from '../../../src/assets/companies/icode.webp'
import java from '../../../src/assets/companies/java.webp'
import LazyImage from '../elements/LazyImage'

export default function Companies() {
  return (
    <div id={'Organizers'} className={'w-full h-auto bg-white flex flex-col items-center pb-[3rem] p-[1rem]'}>
      <div className={'w-full flex flex-col justify-center items-center gap-3 mb-10'}>
        <h2 className={'text-4xl md:text-5xl tracking-tight font-bold pt-[3rem]'}>Attending Companies</h2>
        <p className={'w-[90%] text-md md:text-2xl text-ellipsis text-gray-600 text-center text-pretty'}>
          {' '}
          Connect with the companies tabling and showcasing opportunities at TechX Florida 2025
        </p>
      </div>

      {/* Absolute garbage code down below, please dont judge me =D */}

      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-y-12 md:gap-x-8 gap-y-8 gap-x-5 place-items-center block md:hidden">
        <a href="https://ironeaglex.com" target="_blank" rel="noopener noreferrer">
          <LazyImage src={iexImg} alt="Iron Eagle X Logo" className="h-16 md:h-32" />
        </a>
        <a href="https://www.verizon.com" target="_blank" rel="noopener noreferrer">
          <LazyImage src={verizonImg} alt="Verizon Logo" className="h-16 md:h-32" />
        </a>

        <a href="https://www.westfloridaisaca.org/" target="_blank" rel="noopener noreferrer">
          <LazyImage src={isacaImg} alt="ISACA West Florida Logo" className="h-16 md:h-32" />
        </a>
        <a href="https://www.couchbase.com/" target="_blank" rel="noopener noreferrer">
          <LazyImage src={CouchBaseImg} alt="Couchbase Logo" className="h-16 md:h-32" />
        </a>
        <a href="https://www.usf.edu/it/" target="_blank" rel="noopener noreferrer">
          <LazyImage src={USFITImg} alt="USF IT Logo" className="h-16 md:h-32" />
        </a>
        <a href="https://icodeschool.com/" target="_blank" rel="noopener noreferrer">
          <LazyImage src={icode} alt="iCode Logo" className="h-16 md:h-32" />
        </a>

        <a href="https://www.tampajug.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          <LazyImage src={java} alt="Tampa Java Users Group Logo" className="h-16 md:h-32 object-contain" />
        </a>

        <a href="https://www.uber.com/us/en/ai-solutions/" target="_blank" rel="noopener noreferrer">
          <LazyImage src={uberaiImg} alt="Uber AI Logo" className="h-16 md:h-32" />
        </a>
      </div>

      <div className="block md:hidden items-center justify-center mt-8">
        <a href="https://www.tampadevs.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          <LazyImage src={tampadevsImg} alt="Tampa Devs Logo" className="h-16 md:h-32 object-contain" />
        </a>
      </div>

      <div className="md:flex md:flex-row md:gap-y-12 md:gap-x-8 hidden md:block mb-10">
        <a href="https://ironeaglex.com" target="_blank" rel="noopener noreferrer">
          <LazyImage src={iexImg} alt="Iron Eagle X Logo" className="h-16 md:h-32" />
        </a>
        <a href="https://www.verizon.com" target="_blank" rel="noopener noreferrer">
          <LazyImage src={verizonImg} alt="Verizon Logo" className="h-16 md:h-32" />
        </a>

        <a href="https://www.westfloridaisaca.org/" target="_blank" rel="noopener noreferrer">
          <LazyImage src={isacaImg} alt="ISACA West Florida Logo" className="h-16 md:h-32" />
        </a>
        <a href="https://www.couchbase.com/" target="_blank" rel="noopener noreferrer">
          <LazyImage src={CouchBaseImg} alt="Couchbase Logo" className="h-16 md:h-32" />
        </a>
      </div>

      <div className="md:flex md:flex-row md:gap-y-12 md:gap-x-8 hidden md:block mb-10">
        <a href="https://www.usf.edu/it/" target="_blank" rel="noopener noreferrer">
          <LazyImage src={USFITImg} alt="USF IT Logo" className="h-16 md:h-32" />
        </a>
        <a href="https://icodeschool.com/" target="_blank" rel="noopener noreferrer">
          <LazyImage src={icode} alt="iCode Logo" className="h-16 md:h-32" />
        </a>

        <a href="https://www.tampajug.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          <LazyImage src={java} alt="Tampa Java Users Group Logo" className="h-16 md:h-32 object-contain" />
        </a>
      </div>

      <div className="md:flex md:flex-row md:gap-y-12 md:gap-x-8 hidden md:block">
        <a href="https://www.tampadevs.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          <LazyImage src={tampadevsImg} alt="Tampa Devs Logo" className="h-16 md:h-32 object-contain" />
        </a>

        <a href="https://www.uber.com/us/en/ai-solutions/" target="_blank" rel="noopener noreferrer">
          <LazyImage src={uberaiImg} alt="Uber AI Logo" className="h-16 md:h-32" />
        </a>
      </div>
    </div>
  )
}
