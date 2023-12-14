import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter full flex-col pb-[100px] padding-container" >
      <div className="get-app rounded-md">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-6">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Free App</h2>
          <p className="regular-16 text-gray-10 mb-5">Available on IOS and Android, download today!</p>
          <div className="flex w-full flex-col gap-2 lg:flex-row">
            <Button
            type="button"
            title="App Store"
            icon="/apple.svg"
            variant="btn_white"
            full
            />
            <Button
            type="button"
            title="Play Store"
            icon="/android.svg"
            variant="btn_dark_green_outline"
            full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image
          src="/phones.png"
          alt="phones"
          width={550}
          height={870}
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp