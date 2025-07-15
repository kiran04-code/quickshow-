import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyCastsData, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import timeFirmater from '../lib/time.js';
import BlurCircle from '../components/Reused'
import { PlayIcon, StarIcon, TicketIcon, Heart } from 'lucide-react'
import VideoModal from '../components/videoModel'
import DateSelted from '../components/date.seltect'
import YouAsloLike from '../components/YouAsloLike'
import Loading from '../components/Loading'

const MoviesDetails = () => {
  const [show, setShow] = useState(null)
  const { id } = useParams()
  const [Isopen,setisopen] = useState(false)
  const [videodata,setVideoData] = useState("")
  const [videotitle,setvideotitle] = useState("")
  const navigete = useNavigate()
const openvideomodel = (videourl,videotitle)=>{
  setVideoData(videourl)
  setvideotitle(videotitle)
  setisopen(true)
}
  const isvideoisClode = ()=>{
    setVideoData("")
    setvideotitle("")
    setisopen(false)
  }
  const getData = async () => {
    const show = dummyShowsData.find(data => data._id === id)
    if(show){
    setShow({
      movies: show,
      dataTime: dummyDateTimeData
    })
  }
    }
    

  useEffect(() => {
    getData()
  }, [id])

  return show ? (
    <div className='px-4 sm:px-8 md:px-16 lg:px-40 pt-10 md:pt-20 mt-40'>
      <div className='flex flex-col md:flex-row gap-10 max-w-7xl mx-auto'>
        <img
          src={show.movies.poster_path}
          alt="Movie Poster"
          className='w-full md:w-[280px] h-auto md:h-[416px] object-cover rounded-xl mx-auto'
        />

        <div className='relative flex flex-col gap-4'>
          <BlurCircle top="-100px" right="-0px" />

          <p className='text-primary font-semibold text-xl'>ENGLISH</p>
          <h1 className='text-3xl md:text-4xl font-bold text-white max-w-2xl'>{show.movies.title}</h1>

          <div className='flex items-center gap-2 text-gray-300 text-sm md:text-base'>
            <StarIcon className='w-5 h-5 text-primary fill-primary' />
            {show.movies.vote_average.toFixed(1)} user Rating
          </div>

          <p className='text-gray-400 mt-2 text-sm leading-relaxed max-w-2xl'>
            {show.movies.overview}
          </p>

          <div className='flex flex-wrap items-center gap-3 mt-4 text-white text-base font-semibold'>
            <p>{timeFirmater(show.movies.runtime)}</p>
            {show.movies.genres.map((item, index) => (
              <p key={index}>
                {item.name}
                {index < show.movies.genres.length - 1 ? ' |' : ''}
              </p>
            ))}
            <p>{new Date(show.movies.release_date).getFullYear()}</p>
            
          </div>

          <div className='flex flex-wrap gap-4 mt-6'>
            <button className='bg-gray-500 text-white p-3 px-5  rounded-2xl flex items-center gap-2' onClick={()=>openvideomodel(show.movies.tailer_path,show.movies.title)}>
              <PlayIcon /> Watch Trailer
            </button>
           
           <a href="#dataselect">

             <button on className='bg-primary text-white p-3 px-5 rounded-2xl flex items-center gap-2'>
              <TicketIcon /> Buy Tickets
            </button>
           </a>
            <button className='bg-gray-700 text-white p-3 px-4 rounded-full flex items-center'>
              <Heart />
            </button>
          </div>
        </div>
      </div>
     {
      Isopen ?  <VideoModal
       isOpen={openvideomodel}
       onClose={isvideoisClode}
       videoUrl={videodata}
       title={videotitle}
      />:null
     }

    <h1 className='text-3xl md:text-4xl font-bold text-white mb-2 mt-25'>Yours Favorite Cast</h1>
      <div className='w-24 h-1 rounded-xl bg-primary mb-8'></div>
      <div className=' mt-8 pb-4   overflow-x-auto'>
       <div className='flex items-center gap-5 w-max px-4'>
        {
        dummyCastsData.map((data)=>
       <div>
         <div className='w-25 h-25 rounded-full bg-primary overflow-hidden'>
           <img src={data.profile_path} alt=""  className=' rounded-2xl  '/>
           
       </div>
       <p>{data.name}</p>
        </div>
       
       )
       }
       </div>
      </div>

      <DateSelted dataTime={show.dataTime} ids="dataselect"/>
      <YouAsloLike/>

     <div className=' flex items-center justify-center mt-8'>
       <button onClick={()=>{navigete("/Movies"),scrollTo(0,0)}} className='bg-primary px-7 py-4 rounded-sm'>
        Show More
      </button>
     </div>
    </div>
  ) : (
    <div>
<Loading/>
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl'> This Movies is Not Found!</h1>
      </div>
    </div>
  )
}

export default MoviesDetails
