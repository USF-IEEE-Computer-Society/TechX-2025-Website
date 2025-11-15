interface CompanyCardProps {
  name: string
  logo: string
  website: string
  description: string
}

export default function CompanyCard({ name, logo, website, description }: CompanyCardProps) {
  return (
    <div className="h-auto md:h-[330px] flex flex-col items-center justify-center w-full border-2 border-gray-300 rounded-lg p-2">
      <div className="">
        <a href={website} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt={name} className="md:h-[125px] h-auto" loading="lazy" />
        </a>
      </div>

      <div className="w-full flex flex-col h-full md:block hidden ">
        <p className="mt-3 px-2" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  )
}
