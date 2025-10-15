import WhyAttend from "./sections/Attendance";
import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";
import Highlights from "./sections/Highlights";
import GetTickets from "./sections/GetTickets";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Whatsapp from "./sections/Whatsapp";
import IEEE from "./sections/IEEE";
import Companies from "./sections/Companies";
import Photos from "./sections/Photos";
import Team from "./sections/Team";

function Home() {
  return (
    <>
      
      <HeroSection/>
      <WhyAttend/>
      <Highlights/>
      <GetTickets/>
      <Whatsapp/>
      <IEEE/>
        <Companies/>
        <Team/>
        <Photos/>
      <FAQ/>
    </>
  )
}

export default Home
