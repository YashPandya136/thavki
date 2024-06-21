import React from 'react'
import Section from '../Section'
import RoomCard from '../RoomCard'
import { roomsImages } from '../../utilities/constants'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import TitleSection from '../TitleSection'

const RoomsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <>
      <TitleSection className='flex flex-col items-center justify-center bg-accent'>
        <div>
          <span>Products</span>
        </div>
      </TitleSection>
      <Section className='bg-accent'>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className='w-[100%]'
          plugins={[plugin.current]}
        >
          <div className='flex gap-4'>
            <CarouselContent>
              {
                roomsImages.map((items, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
                    <RoomCard imageUrl={items.image} title={items.title}  />
                  </CarouselItem>
                ))
              }
            </CarouselContent>
          </div>
          <CarouselPrevious variant="outline" />
          <CarouselNext variant="outline" />
        </Carousel>
      </Section>
    </>
  )
}

export default RoomsSection
