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
import Photos from "./Photos";

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
