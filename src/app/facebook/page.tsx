import React from 'react'

const facebook = () => {
  return (
    <main>
        <section className='w-full h-screen bg-gray-200'>
            <div className='w-full h-full flex   justify-center items-center gap-10'>
               <div className='mb-12'>
               <h1 className=' flex text-3xl  text-blue-700 font-bold'>facebook</h1>
                <p className='text-black mt-2 '>Facebook helps you connect and share <br /> 
                with the people in your life.
                </p>
               </div >
              <div>
                  
              <form  className='w-[400px] h-[250px]  py-5 px-4 bg-white'>
                    <div>
                    <input className='w-full flex-1 px-1  border-[3px] ' 
                    type="text" placeholder ='Email address or phone number ' />
                    </div>
                    <div>
                    <input className='w-full flex-1 px-1  border-[3px] mt-2' type="password"
                     placeholder='Password' />
                    </div>
                <button className='mt-2 w-full py-1 text-white bg-blue-500 cursor-pointer'>
                   Log in
                </button>
                <p className='flex justify-center items-center mt-3'>Forgetten password?</p>
                <button className='mt-10 ml-20 w-[200px] py-1 text-white bg-green-500 cursor-pointer'>
                  Create new account
                   </button >
                </form >
                <footer className='mt-3 ml-12'><strong>Create a Page</strong> for celebrity, 
                brand or business</footer>
              </div>
            </div>
            
        
            
        </section>
    </main>

  )
}

export default facebook