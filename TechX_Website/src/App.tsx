import './App.css'
import WhyAttend from "./components/Attendance";
import Hero_Section from "./components/Hero_Section";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import Get_Tickets from "./components/Get_Tickets";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Companies from "./components/Companies";


function App() {


  return (
    <>
        <Navbar/>
        <Hero_Section/>
        <WhyAttend/>
        <Highlights/>
        <Get_Tickets/>
        <FAQ/>
        <Footer/>

    </>
  )
}

export default App
