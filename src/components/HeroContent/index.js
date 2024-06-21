import React from 'react'
import { cn } from '../../lib/utils'
import Icon from '../Icon';

const HeroContent = () => {
  return (
    <div className='h-fit lg:h-[70vh] rounded-xl bg-accent flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center w-full h-full gap-0 space-y-4 text-center lg:space-y-1 lg:text-start'>
        <div className='font-serif text-xl text-primary'>
          Newly Added
        </div>
        <div
          className={cn(
            "w-full text-2xl -space-y-3 xl:-space-y-5 xl:text-3xl  font-bold"
          )}
        >
          <h1>Embrace Elegance,</h1>
          <h1>Celebrate Tradition</h1>
          <h1>With Thavki</h1>
        </div>
        <div className='text-base'>Where Tradition Meets Timeless Elegance.</div>

        <div className="flex justify-center gap-2 lg:justify-start ">
          {Array.from({ length: 4 }).map((_, index) => (
            <Icon
              key={index}
              svg="Star"
              className={"w-[30px] h-[30px]"}
              alt="rating"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
