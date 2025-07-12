import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './Reused'
import { dummyShowsData } from '../assets/assets'
import DummeyCards from './DummeyCards'

const Featuressection = () => {
    const naviagete = useNavigate()
    return (
        <div>
            <div className='w-full h-2 bg-primary '>
            </div>
            <div className=' py-6 md:py-6 px-6 md:px-12 lg:px-24 xl:px-44 overflow-hidden'>
                <div className='flex  gap-5 justify-between  items-center relative pt-8 md:pt-20 pb-10'>
                    <BlurCircle top='0' right='-80px'/>
                    <h1 className='font-semibold text-2xl md:text-5xl'><span className='text-primary'>N</span>ow <span  className=' md:mt-5 md:leading-10'>Showing<span className='text-primary'>!</span></span></h1>
                    <button onClick={()=>naviagete("/Movies")} className='flex text-nowrap cursor-pointer  px-1.5 py-1.5 md:py-3 md:px-2 justify-between items-center  bg-primary rounded-full'>
                        View All 
                        <ArrowRight />
                     </button>
                </div>
                <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
                    {
                        dummyShowsData.slice(0,4).map((movies)=>
                            <DummeyCards key={movies._id} movies={movies}/>
                        )
                    }
                </div>
                <div className='mt-20 justify-center flex'>
                     <button onClick={()=>{scrollTo(0,0);naviagete("/Movies")}}  className='bg-primary px-10 py-3  hover:bg-primary-dull  transition rounded-md font-medium cursor-pointer'> Show More</button>
                </div>
            </div>
        </div>
    )
}

export default Featuressection
