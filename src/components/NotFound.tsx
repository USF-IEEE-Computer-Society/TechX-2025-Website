import catNerd from '../assets/nerd.webp'

function NotFound() {
  return (
    <>
      <div id={'Schedule'} className={'w-full h-auto bg-white flex flex-col items-center p-[1rem] min-h-screen'}>
        <h2 className={'text-4xl tracking-tight font-bold mt-[3rem] mb-[2rem] text-center'}>Page not found</h2>

        <p className={'w-[80%] lg:w-[70%] text-lg text-center text-balance mb-8'}>Please check the URL or return to the homepage.</p>

        <img src={catNerd} className={'h-50 mt-10'} />
      </div>
    </>
  )
}

export default NotFound
