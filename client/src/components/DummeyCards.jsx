import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFirmater from '../lib/time'
const DummeyCards = ({movies}) => {
const navigate = useNavigate()
  return (
    <div className='  flex flex-col justify-center p-3 bg-gray-800 rounded-2xl hover:-translate-y-2 transition  duration-300 w-86'>
      <img src={movies.backdrop_path} alt="" onClick={()=>{navigate(`/MoviesDetails/${movies._id}`);scrollTo(0,0)}} className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer' />
      <p className='font-semibold mt-2 '>{movies.title}</p>
      <p className='font-semibold mt-2 text-sm text-gray-400'>
        {  new Date(movies.release_date).getFullYear()}. {movies.genres.slice(0,2).map(genres =>genres.name).join(" | ")} | {timeFirmater(movies.runtime)}
      </p>
      <div className='flex items-center justify-between mt-4 pb-3'>
        <button onClick={()=>{navigate(`/MoviesDetails${movies._id}`);scrollTo(0,0)}} className='bg-primary px-10 py-3  hover:bg-primary-dull  transition rounded-full font-medium cursor-pointer '>
            Buy Ticket
        </button>
        <p className='flex justify-center items-center gap-2'>
            <StarIcon className='w-4 h-4 text-primary fill-primary'/>
            {
                movies.vote_average.toFixed(1)
            }
        </p>
      </div>
    </div>
  )
}

export default DummeyCards
