import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Feautures = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-10">
      <div className="max-container padding-container relative w-full flex justify-end">

        <div className="flex flex-1 lg:min-h-[900px]">
        <Image 
        src="/phone.png"
        alt="cellphone"
        width={440}
        height={0}
        className="feature-phone"
        />
      </div>

      <div className="z-20 flex w-full flex-col lg:w-[60%]">
        <div className="relative">
          <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-2px] top-[-25px] w-10 lg:w-[50px]"
          />
          <h2 className="bold-40 lg:bold-64">Our Features</h2>
        </div>

        <ul className="mt-10 gap-10 grid md:grid-cols-2">
          {FEATURES.map((feature) => (
            <FeatureItem 
            title={feature.title}
            key={feature.title} 
            icon={feature.icon}
            description={feature.description}
            />
          ))}
        </ul>

      </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string
  icon: string
  description:string;
}

const FeatureItem = ( {title, icon, description} :FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start bg-white shadow-lg p-2 rounded-lg">
      <div className="rounded-full p-4 lg:p-7 bg-green-50 mt-3">
        <Image 
        src={icon}
        alt="map icon"
        width={28}
        height={28}
        />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capatilize font-[roboto]">
        {title}
      </h2>
      <p className="regular-16 mt-3 lg:mt-8 mb-5 bg-white/60 lg:bg-none text-gray-30">
        {description}
      </p>
    </li>
  )
}


export default Feautures