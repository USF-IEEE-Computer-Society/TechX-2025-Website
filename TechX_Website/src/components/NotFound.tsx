import Footer from "./sections/Footer";
import { Link } from "react-router-dom";
import catNerd from "../assets/cats/nerd.jpeg"

function NotFound() {
    return (
        <>
            <div id={'Schedule'} className={"w-full h-auto bg-white flex flex-col items-center pb-[2rem] min-h-screen"}>
                <h2 className={"text-4xl tracking-tight font-bold pt-[3rem] pb-[1.5rem] text-center"}>Page not found</h2>

                <p className={"w-[80%] lg:w-[70%] text-lg text-center text-balance mb-8"}>
                    Please check the URL or return to the homepage.
                </p>
                
                <img src={catNerd} className={"h-50 mt-10"}/>

            </div>
        </>
    )
}

export default NotFound
