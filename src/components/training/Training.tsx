import React from 'react'
import Image from 'next/image'

const Training = () => {
  return (
    <section className='w-full h-screen pb-8'>
        <div className='container'>
          <h2 className='text 2xl uppercase font-bold text-blue-500 mt-7'>View our Blog</h2>
          <p className='text xl mt-4 '>
          Our Gym gives you the oportunities to explore different activities at a very minimal <br /> and low cost.
          We got you covered with all your favorites,br including Cycling, <br /> Zumba, HIIT, Yoga, Les Mills and
           more. Whether you are just starting out on  your fitness journey, <br /> or are a conditioned
            fitness enthusiast, our group fitness classes make it easy to stay consistent <br /> and reach
             your goals, all while being a part of an inclusive and supportive community.
        </p>
        <div className='flex gap-5 mt-7'>
          <div className='w-[400px] h-[350px] relative'>
            <Image fill src="/images/WhyJoin.jpg" alt="Blog" />
          </div>
          <div className='w-[400px] h-[350px] relative'>
            <Image fill src="/images/Blog1.jpg" alt="Blog" />
          </div>
          <div className='w-[400px] h-[350px] relative'>
            <Image fill src="/images/Training2.jpg" alt="Blog" />
          </div>
          <div className='w-[400px] h-[350px] relative'>
            <Image fill src="/images/Blog2.jpg" alt="Blog" />
          </div>
        </div>
        </div>
       
    </section>
  )
}

export default Training