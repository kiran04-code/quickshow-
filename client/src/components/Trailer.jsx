import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from "react-player"
import BlurCircle from './Reused'
import { PlayCircleIcon } from 'lucide-react'

const Trailer = () => {
  const [currTrailer, setCurrTrailer] = useState(dummyTrailers[0])
 console.log(currTrailer)
  return (
    <div className='px-6 md:px-16 lg:px-18 xl:px-44 py-20 overflow-hidden'>
      <h1 className='font-semibold text-2xl md:text-5xl'>
        <span className='md:mt-5 md:leading-10'>
          Trailers<span className='text-primary'>!</span>
        </span>
      </h1>
      <div className='relative mt-6 '>
        <BlurCircle top='-100px' right='-100px' />
        <ReactPlayer     
          src={currTrailer.videoUrl} 
          controls={false} 
          className='mx-auto max-w-full rounded-2xl border-4 border-primary-dull overflow-hidden'
          width="960px"
          height="540px"
        />
      </div>
      <div className='  group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl max-auto md:ml-50'>
        {
            dummyTrailers.map((data)=>
              <div className='relative  group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 max-md:h-60 md:max-h-60 cursor-pointer  transition' onClick={()=>setCurrTrailer(data)} >
            <img src={data.image} alt='' className='rounded-lg w-full h-full object-cover brightness-75 ' />
            <PlayCircleIcon autoReverse className='absolute top-1/8 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 translate-y-1/2' />
                </div>
            )
        }
      </div>
    </div>
  )
}

export default Trailer
