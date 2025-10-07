import WhyAttend from "./sections/Attendance";
import Hero_Section from "./sections/Hero_Section";
import Navbar from "./sections/Navbar";
import Highlights from "./sections/Highlights";
import Get_Tickets from "./sections/Get_Tickets";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Whatsapp from "./sections/Whatsapp";
import Organizers from "./sections/Organizers";
import Companies from "./sections/Companies";

function Home() {
    return (
        <div id={'Register'} className={"w-full h-auto bg-white flex flex-col items-center pb-[2rem]"}>
            <h2 className={"text-4xl tracking-tight font-bold pt-[3rem] text-center"}>Schedule TechX Florida 2025</h2>
            <p className={"w-[80%] lg:w-[70%] text-lg text-center text-balance pt-[2rem] mb-8"}> Stay tuned for the updates! </p>

        </div>
    )
}

export default Home
