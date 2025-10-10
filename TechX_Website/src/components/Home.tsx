import WhyAttend from "./sections/Attendance";
import Hero_Section from "./sections/Hero_Section";
import Navbar from "./sections/Navbar";
import Highlights from "./sections/Highlights";
import Get_Tickets from "./sections/Get_Tickets";
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
      
      <Hero_Section/>
      <WhyAttend/>
      <Highlights/>
      <Get_Tickets/>
      <Whatsapp/>
      <IEEE/>
        <Team/>
        <Photos/>
      <FAQ/>
    </>
  )
}

export default Home
