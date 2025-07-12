import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRightIcon, Calendar, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const naviagete = useNavigate()
  return (
    <div className='flex flex-col  justify-center gap-5 px-6 md:px-6 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
      <img src={assets.marvelLogo} alt="" className='max-w-50 lg:w-55 mt-20' />
      <h1 className='text-5xl md:text-[100px] md:leading-23 font-bold'> <span className='text-primary'>Gua</span>rdians <br />of the Gala<span className='text-primary'>xy</span></h1>
      <div className='flex items-center gap-5 text-gray-300'>
          <span className='flex gap-2 justify-center items-center'>
            Action | Adventure | sci-fi   </span>
            <div className='flex gap-1 justify-center items-center'>
                <Calendar className='w-4.5 h-4.5 '/>
               <p> 2025</p>
            </div>
            <div className='flex gap-1justify-center items-center'>
                <ClockIcon className='w-4.5 h-4.5 '/> 2h 8m
            </div>
           
      </div>
      <p className='max-w-md text-gray-300 '>
      In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.
      </p>
      <button onClick={()=>naviagete("/Movies")} className=' cursor-pointer flex px-6 items-center gap-1 py-3 text-sm  transition font-medium  bg-primary rounded-full w-45'>
       Explore Movies  <ArrowRightIcon className='w-6 h-6'/>
      </button>
    </div>
  )
}

export default HeroSection
