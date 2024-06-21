import React from 'react'
import HeroContent from '../HeroContent'
import HeroSlider from '../HeroSlider'

const HeroSection = () => {
  return (
    <section className='px-10 bg-white lg:px-32'>
      <div className='relative flex flex-col w-full gap-5 py-10 rounded-lg lg:flex-row lg:flex'>
        <div className='w-full rounded-lg lg:w-[45%]'><HeroContent /></div>
        <div className='w-full rounded-lg lg:w-[55%]'><HeroSlider /></div>
      </div>
    </section>
  )
}

export default HeroSection
