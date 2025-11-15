import IMG_0016 from '../../assets/techx2024/IMG_0016.webp'
import IMG_0063 from '../../assets/techx2024/IMG_0063.webp'
import IMG_0113 from '../../assets/techx2024/IMG_0113.webp'
import IMG_0218 from '../../assets/techx2024/IMG_0218.webp'
import IMG_0251 from '../../assets/techx2024/IMG_0251.webp'
import IMG_0287 from '../../assets/techx2024/IMG_0287.webp'
import LazyImage from '../elements/LazyImage'

export default function Photos() {
  return (
    <div id={'Photos'} className={'w-full h-auto bg-white flex flex-col items-center pb-[3rem] p-[1rem]'}>
      <h2 className={'text-4xl tracking-tight font-bold pt-[3rem]'}> TechX Florida 2024 </h2>

      <p className={'w-[90%] text-md md:text-2xl text-ellipsis text-gray-600 text-center text-pretty mb-10 mt-5'}> See how it was last year</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center [&>img]:md:h-75 [&>img]:h-57 ">
        <LazyImage src={IMG_0251} alt="Photo 5" />
        <LazyImage src={IMG_0016} alt="Photo 1" />
        <LazyImage src={IMG_0113} alt="Photo 2" />
        <LazyImage src={IMG_0063} alt="Photo 3" className={'hidden md:block'} />
        <LazyImage src={IMG_0218} alt="Photo 4" className={'hidden md:block'} />
        <LazyImage src={IMG_0287} alt="Photo 6" className={'hidden md:block'} />
      </div>
    </div>
  )
}
