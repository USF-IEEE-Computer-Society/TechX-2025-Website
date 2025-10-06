import RegistrationButtons from "./RegistrationButtons";

export default function Get_Tickets(){

    return (
        <div id={'Register'} className={"w-full h-auto bg-[#00629B] flex flex-col items-center pb-[2rem]"}>
            <h2 className={"text-4xl text-white tracking-tight font-bold pt-[3rem]"}> Secure your Spot </h2>

            <p className={"w-[80%] lg:w-[70%] text-lg text-white text-center text-balance pt-[1.5rem]"}> Don't miss out on the opportunity to be a part of TechX Florida 2025.
                Register today to secure your spot at this landmark event.

            </p>

            <RegistrationButtons/>

        </div>
    )
}