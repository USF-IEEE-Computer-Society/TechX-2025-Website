import nerdImage from './assets/nerd.webp'

export default function Year2026() {
  return (
    <div className="w-full h-auto bg-white flex flex-col items-center p-[1rem] min-h-screen">
      <h1 className="text-4xl tracking-tight font-bold mt-[1rem] mb-[1.5rem] text-center">TechX Florida 2026</h1>
      <div className="w-full flex flex-col items-center">
        <p className="text-md md:text-2xl text-ellipsis text-gray-600 text-center text-pretty">Stay tuned for updates about TechX Florida 2026</p>
        <img src={nerdImage} className="h-50 mt-10" />
      </div>
    </div>
  )
}
