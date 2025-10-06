import WhyAttend from "./Attendance";
import Hero_Section from "./Hero_Section";
import Navbar from "./Navbar";
import Highlights from "./Highlights";
import Get_Tickets from "./Get_Tickets";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";
import Organizers from "./Organizers";
import Companies from "./Companies";

function Home() {
    return (
        <div id={'Register'} className={"w-full h-auto bg-white flex flex-col items-center pb-[2rem]"}>
            <h2 className={"text-4xl tracking-tight font-bold pt-[3rem] text-center"}>Schedule TechX Florida 2025</h2>
            <p className={"w-[80%] lg:w-[70%] text-lg text-center text-balance pt-[2rem] mb-8"}> Stay tuned for the updates! </p>

        </div>
    )
}

export default Home
