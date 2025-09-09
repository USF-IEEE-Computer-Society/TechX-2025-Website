

export default function Footer(){

    return (
        <div className={"w-screen h-auto pb-[3rem] bg-[#101724] flex flex-col items-center"}>

            <div className={"w-[75%] flex justify-around pt-[2rem]"}>
                <p className={"font-light text-[#C9C9C9]"}> About </p>
                <p className={"font-light text-[#C9C9C9]"}> Sponsors </p>
                <p className={"font-light text-[#C9C9C9]"}> Contact </p>
                <p className={"font-light text-[#C9C9C9]"}> FAQ </p>

            </div>

            <div className={"w-[50%] flex justify-center items-center pt-[2rem] gap-[2rem]"}>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="lucide lucide-twitter-icon lucide-twitter">
                    <path
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="lucide lucide-instagram-icon lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#c9c9c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="lucide lucide-linkedin-icon lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>

            </div>

            <hr className={"w-[80%] h-[1px] bg-[#C9C9C9] mt-[3rem]"}/>

            <h2 className={"w-[100%] text-lg text-[#C9C9C9] text-center text-balance mt-[2rem]"}> © 2025 TechX Florida. All rights reserved. </h2>

        </div>
    )
}