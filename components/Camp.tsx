import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}


const Campsite = ( {backgroundImage, title, subtitle,peopleJoined} : CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1200px] ${backgroundImage}
    bg-cover bg-no-repeat lg:rounded-2xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-10 lg:py-10
      border-2 border-blue-800">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-2">
            <Image 
            src="/folded-map.svg"
            alt="map"
            width={32}
            height={32}
            />
          </div>
          <div className="flex flex-col gap-0">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-3 ">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((person) => (
              <Image
              className="inline-block h-10 w-10 rounded-full"
               src={person}
               key="person"
               alt="person"
               width={52}
               height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-16">
      <div className="scrollbar flex h-[340px]  w-full items-start justify-start gap-8
      overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Campsite
        backgroundImage="bg-bg-img-1"
        title="Camp Larva 🐛"
        subtitle="Insect Paradise"
        peopleJoined="88+ Joined!🥳"
         />
        <Campsite 
        backgroundImage="bg-bg-img-2"
        title="Eagle Eye 🦅"
        subtitle="American Hero"
        peopleJoined="88+ Joined!🥳"
        
        />
        
      </div>
      <div className="flexEnd mt-10 px-10 lg:-mt-60 lg:m-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[725px] xl:rounded-5xl xl:px-16 xl:py-20 
        relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost? </strong> 
            We can help you find yourself....
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          🐞 You deserve a break. Take it now! <br/> 🐞 Explore and find your inner peace. <br/>
          🐞 We will connect you with nature. <br/> 🐞 It's time to find your soul.
          </p>
          <Image 
          src="/quote.svg"
          alt="music quote"
          width={150}
          height={180}
          className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp