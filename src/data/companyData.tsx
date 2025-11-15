import iexImg from "../assets/companies/IEX_GDIT_black.png"
import verizonImg from "../assets/companies/Verizon_GlowWordmark_RGB_2025.jpg"
import tampadevsImg from "../assets/companies/tampa-devs_logo-8x.png"
import isacaImg from "../assets/companies/ISACA_logo_WestFlorida_RGB.png"
import CouchBaseImg from "../assets/companies/Couchbase_Logo.jpg"
import USFITImg from "../assets/companies/information-technology-lightbg-2c-rgb-h.png"
import uberaiImg from "../assets/companies/uberai.jpg"

export interface Company {
    name: string;
    logo: string;
    website: string;
    description: string;
}

export const companiesData: Company[] = [
    {
        name: "Iron Eagle X",
        logo: iexImg,
        website: "https://ironeaglex.com",
        description: "asdasd"
    },
    {
        name: "Verizon",
        logo: verizonImg,
        website: "https://www.verizon.com",
        description: "Explore Your Future with Verizon at TechX Florida 2025! We invite you to visit our booth and connect with the Verizon team. This is your chance to learn about dynamic career paths, discuss innovative work, and discover how you can make a real impact with us through internships and job opportunities."
    },
    {
        name: "Tampa Devs",
        logo: tampadevsImg,
        website: "https://www.tampadevs.com/",
        description: "Tampa Devs is a fast-growing nonprofit community for software developers in the Tampa Bay area. <br /> Mission: Break barriers in the tech industry and create unique opportunities for the local community to learn, grow, and succeed together."
    },
    {
        name: "ISACA West Florida",
        logo: isacaImg,
        website: "https://www.westfloridaisaca.org/",
        description: "ISACA focuses on the fields of IT audit and assurance, information and cyber security, governance, risk management, compliance, privacy, and emerging technologies. They serve both individuals and organizations by providing a world-class ecosystem of support, which includes:"
    },
    {
        name: "Couchbase",
        logo: CouchBaseImg,
        website: "https://www.couchbase.com/",
        description: "The multipurpose NoSQL database for transactional, analytical, mobile, and AI applications."
    },
    {
        name: "USF IT",
        logo: USFITImg,
        website: "https://www.usf.edu/it/",
        description: "- Learn about career opportunities, get resume advice, and explore mentoring options.  <br/> - Engage with our team to discuss AI platforms available for students, faculty, and researchers, and hear about innovative solutions supporting enterprise and research. <br /> - Find out how you can get involved through student worker positions and internships, and also learn about the role of AI in cybersecurity. <br />"
    },
    {
        name: "Uber AI",
        logo: uberaiImg,
        website: "https://www.uber.com/us/en/ai-solutions/",
        description: "Uber AI Solutions is a new freelance marketplace at Uber connecting skilled earners to the growing demand of AI."
    }
];

