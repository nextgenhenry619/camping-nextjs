import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container
    flex flex-col gap-20 py-10 pb-30 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"/>

    {/* left */}
    <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
      <Image 
      src="/camp.svg" alt="campsite"
      width={50}
      height={50}
      className="absolute left-[-5px] top-[-30px] w-10 lg:w-[60px]"
      />
      <h1 className="bold-52 lg:bold-88">Pinecone Lakeside Bliss</h1>
      <p className="regular-16 mt-6 text-gray-30
      xl:max-w-[500px]">
        Be apart of our camping memories. All sizes and ages welcomed. See nature like never before.
        Perfect for any day. (even rainy days!)
      </p>
    <div className="my-11 flex flex-wrap gap5">
      <div className="flex items-center gap-2">
        {Array(5).fill(1).map((_,index) => (
          <Image 
          src="/star.svg"
          key={index}
          alt="star"
          width={24}
          height={24}
          />
        ))}
      </div>
      <p className="bold-16 lg:bold-20 text-green-700 ml-2 mt-1">348.4k 
      <span className="regular-16 lg:regular-20 ml-1 text-red-300"> Beautiful Reviews 🌺 </span></p>
      <div className="flex flex-col w-full gap-2 sm:flex-row mt-5">
        <Button 
        type="button" 
        title="Download App"
        variant="btn_green" />
        <Button 
        type="button" 
        icon="/play.svg"
        title="Information about us"
        variant="btn_white_text" />
      </div>
    </div>
    </div>
    
    <div className="relative flex flex-1 items-start">
      <div className="relative z-20 w-[275px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

        <div className="flex flex-col">
          <div className="flexBetween">
            <p className="regular-16 text-gray-20">Location</p>
            <Image src="/close.svg" alt="close" width={24} height={24} />
          </div>
          <p className="bold-20 text-white">Rapid Waters</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">63.4 mi</p>
            </div>

            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">1.704 km</p>
            </div>

          </div>
      </div>
    </div>

    </section>
  )
}

export default Hero