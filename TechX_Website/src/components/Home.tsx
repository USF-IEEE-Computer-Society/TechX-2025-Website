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
import Photos from "./sections/Photos";

function Home() {
  return (
    <>
      
      <Hero_Section/>
      <WhyAttend/>
      <Highlights/>
      <Get_Tickets/>
      <Whatsapp/>
      <Organizers/>
        <Photos/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default Home
