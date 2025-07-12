import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from "lucide-react"
import {  useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const [isopen,setIsOpen] = useState(false)
    const {user} = useUser()
    const naviagete  = useNavigate()
     const {openSignIn} = useClerk()
    
    return (
        <div className='fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 md:px-16 lg:px-16 py-8'>
            <Link to="/" className='max-md:flex-1' >
                <img src={assets.logo} alt="" className='w-36 h-auto' />    
            </Link>

            <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium 
         max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center
          gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full  backdrop-blur
            md:bg-white/10 md:border
          border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isopen ? "max-md:w-full":"max-md:w-0"}`}>
                <XIcon  onClick={()=>setIsOpen(!isopen)} className='md:hidden absolute top-6 right-6 h-6 w-6 cursor-pointer ' />
                <Link onClick={()=>{scrollTo(0,0),setIsOpen(false)}} to="/"> Home </Link>
                <Link onClick={()=>{scrollTo(0,0),setIsOpen(false)}} to="/Movies"> Movies </Link>
                <Link onClick={()=>{scrollTo(0,0),setIsOpen(false)}} to="#"> Theaters </Link>
                <Link onClick={()=>{scrollTo(0,0),setIsOpen(false)}} to="/Favorite"> Favorite </Link>  
                <Link onClick={()=>{scrollTo(0,0),setIsOpen(false)}} to="/Favorite"> Relea </Link>  
            </div>

            <div className='flex items-center gap-8'>
                <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />
            
               {
                user ? <UserButton>
                    <UserButton.MenuItems>
                        <UserButton.Action label='MY-booking' onClick={()=>naviagete("/MyBokking")}  labelIcon={<TicketPlus width={15} />}/>
                    </UserButton.MenuItems>
                </UserButton>: <button onClick={openSignIn} className='px-4 py-2 sm:px-7 mr-2 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium'>Login</button>
               }
            </div>

            <MenuIcon onClick={()=>setIsOpen(!isopen)} className='mx-md:ml-4 md:hidden w-8 h-8 cursor-pointer' />
        </div>
    )
}

export default Navbar
