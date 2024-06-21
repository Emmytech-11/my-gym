import Link from 'next/link'
import React from 'react'
import Button from '../button/Button'



const Hero = () => {
  return (
    <section className='w-full h-[calc(100vh-60px)] mt-[60px] pt-[90px] bg-hero bg-no-repeat bg-cover
     bg-right md:bg-top' >
       <div className=' container'>
        <h1 className='text-4xl font-extrabold leading-tight text-blue-300 md:text-left mt-7  pt-10 uppercase'>
             Personalized <br />Support.
         </h1>
         <h1 className='text-4xl font-bold leading-tight text-white uppercase'>
          Anytime, <br />Anywhere.
         </h1>
       <p className='font-xl pt-3 font-semibold text-white'>
       Try Anytime Fitness for free and get your personalized plan <br /> PLUS redeem up to 3 months of
        Apple Fitness on us. Ready <br /> to get started?
       </p>
       <div className='mt-4 font'>
       <Button />
       </div>
       <div className='flex gap-1 mt-5 font-extralight'>
       <p className='text-white'>Terms, conditions, & restrictions apply </p>
       <Link href="#" className='underline  text-white'>See details</Link>
       </div>
      
      </div>
        
      </section>
    
  )
}

export default Hero