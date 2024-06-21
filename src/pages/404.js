import Image from '../components/Image'
import Section from '../components/Section'
import React from 'react'

const ErrorPage = () => {
  return (
    <>
      <Section>
        <div className='flex justify-center'>
          <Image svgIcon='notFound' className='w-[250px] h-[250px]' />
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-background -pt-5">
          <h1 className="text-3xl font-bold">404 - Not Found</h1>
        </div>
      </Section>
    </>
  )
}

export default ErrorPage
