import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Img from "../Img";
import { images } from "../../utilities/constants";



const HeroSlider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <>
      <div className="flex justify-center w-full bg-accent">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className='w-[100%] shadow-lg'
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="w-[100%] h-[35vh] lg:h-[70vh] rounded">
                  <Card className='lg:h-[70vh] border-none h-[35vh] w-[100%] flex items-center justify-center'>
                    <CardContent className='w-full h-full p-0 rounded-lg'>
                      <div className="h-full">
                        <Img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          className="object-cover w-full h-full rounded-lg opacity-80"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}

export default HeroSlider