import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col relative">
      <div className="padding-container max-container w-full pb-12">
        <Image
        src= "/camp.svg"
        alt="camp"
        width={50}
        height={50} />
        <p className="regular-18 -mt-1 mb-3 text-green-50">
        Trust in us. We trust in you.
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10 items-center">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[392px] text-center">Our App/Rangers work 
          <span className="text-orange-50"> 24/7</span>!</h2>
    
          
          <p className="regular-16 text-gray-30 
          xl:max-w-[520px]
          ">Even if your cellphone has no service. 
            You can still see a map on offline mode. 
            Cellphone died? Time for plan B! 
            
            There are several trees marked "Help me". 
             Press that button and a ranger will be with you in a matter of minutes.
            We also offer fully charged Walkie Talkie's.
          </p>
          <div className="relative flex max-xl:hidden">
          <Image
          src="/gps.svg"
          alt="ranger"
          width={100}
          height={0} 
          />
          </div>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full border-2
       border-orange-50">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
        className="w-full object-cover object-center"
        />
        <div className="absolute flex bg-white py-8 px-5 gap-3 rounded-3xl
        shadow-lg md:left-[5%] lg:top-20 
        border">
          <Image 
          src="/meter.svg"
          alt="meter"
          width={26}
          height={167}
          className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination: </p>
                <p className="bold-16 text-green-50">32 min</p>
              </div>
              <p className="bold-20 mt-2 text-center">Rainfall Road</p>
            </div>
            <div className="flex w-full flex-col">
              
                <p className="regular-16 text-gray-20">Start Track: </p>
              <h4 className="bold-20 mt-2">Wasp Way</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide