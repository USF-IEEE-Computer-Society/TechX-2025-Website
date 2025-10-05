import logo2 from "../assets/logos/ieee-cs-logo.webp"



export default function Companies(){

    return (
        <div className={"w-full h-[50vh] bg-[#001024] opacity-90 flex flex-col justify-start items-center gap-y-10"}>

            <h2 className={"text-3xl text-white tracking-tight font-bold pt-[3rem]"}> Participating Companies </h2>

            <div className={"w-[90%] flex  justify-around"}>
                <img className={'w-[30%] '} src={logo2}/>
                <img className={'w-[30%] '} src={logo2}/>
                <img className={'w-[30%] '} src={logo2}/>
            </div>


        </div>
    )
}