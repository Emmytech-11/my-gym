 "use client"

import Image from 'next/image'
import Link from 'next/link'
import  { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import Button from '../button/Button'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      tittle: "Find A Gym",
      path: "#"
    },
    {
      id: 2,
      tittle: "Training",
      path: "#"
    },
    {
      id: 3,
      tittle: "Blog",
      path: "#"
    },
   
    {
      id: 4,
      tittle: "Own A Gym",
      path: "#"
    }


  ]
  return (
    <header className='w-full h-[90px] flex items-center fixed font-semibold text-white bg-gray-500'>
        <div className='container flex justify justify-between items-center'>
          <div>
           <Image
           width={120}
           height={250}
         src="/images/Logo.jpg" 
        alt="Logo" 
        />
          </div>
          <div
          onClick={() => setOpen(!open)} 
       className="block md:hidden cursor-pointer z-10">
       { open ? <IoMdClose size={30}   /> : <RxHamburgerMenu size={30} />  }
          </div>
            <nav 
            className={`${open ? "right-0" : "right-[-100%]"

            } w-[70%] md:w-auto h-screen md:h-auto px-5 
            md:px-0 pt-20 md:pt-0
            absolute md:static top-0 duration-500 ease-in bg-primary-400 md:bg-transparent`}
            >
            <ul className='flex flex-col md:flex-row gap-5'>
              {links.map((link) => (
                <li onClick={()=> setOpen(false)} key={link.id}>
                <Link href={link.path}>{link.tittle}</Link>
                </li>

              ))}
                
            </ul>
            </nav>
            <div className='hidden md:flex  items-center gap-5'>
              <Button />
            </div>
         </div>
    </header>

  )
}

export default Navbar