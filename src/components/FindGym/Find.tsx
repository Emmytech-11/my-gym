import React from 'react'
import Image from 'next/image'

const Find = () => {
  return (
    <section className='w-full h-screen pt-7  bg-purple-300'>
      <div className=' container '>
        <h2 className=' text-2xl  font-bold  uppercase text-white'>Find a gym with all the right benefits
      </h2>
     <div className='flex flex-1' >
     <ul className='flex-1 text-white text-xl mt-7  '>
        <li>
        Open 24 hours
        </li>
        <li>
        Open 24 hours
        Personalized plan
        </li>
        <li>
        Access to 5,000+ gyms
        </li>
        <li>
        Personal & group training
        </li>
        <li>
        Free access to Apple Fitness+
        </li>
      </ul>
      <div className='w-[450px] h-[400px] flex-1 relative'>
        <Image fill src="/images/FindAGym2.jpg" alt="Find A Gym"  className=''/>
      </div>
     </div>
       <button 
       className='font-bold px-10 py-2 mt-7 rounded-full
        cursor-pointer text-white bg-blue-700' 
        type='submit'>
          Join us Now</button>
      </div>
    </section>
  )
}

export default Find