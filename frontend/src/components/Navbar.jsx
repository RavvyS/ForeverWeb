import React from 'react'
import { assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex item-center justify-between py-5  font-medium'>

        <img src={assets.logo} alt="Logo" className='w-36'/>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

           <NavLink to='/' className='flex flex-col items-center gap-1'> 
            <p>HOME</p>
            <hr className='w-24 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1'> 
            <p>COLLECTION</p>
            <hr className='w-24 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1'> 
            <p>ABOUT</p>
            <hr className='w-24 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1'> 
            <p>CONTACT</p>
            <hr className='w-24 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>

        </ul>
        
        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} alt="Search" className='w-5 cursor-pointer'/>

            <div classname=''>

            </div>

        </div>

    </div>
  )
}

export default Navbar