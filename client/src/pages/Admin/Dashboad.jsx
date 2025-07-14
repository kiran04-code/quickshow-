
import React, { useEffect } from 'react'
import Sidebar from './components/AdminSidebar'
import { useState } from 'react'
import { ChartLineIcon, IndianRupee,StarIcon, IndianRupeeIcon, PlayCircleIcon, UsersIcon } from 'lucide-react'
import { dummyDashboardData } from '../../assets/assets'
import Loading from '../../components/Loading'
import Text from './components/text'
import BlurCircle from '../../components/Reused'
import DateFormate from '../../lib/DateFormate'

const Dashboad = () => {

  const currency = import.meta.env.VITE_CURRECY
  const [loading,setlaod] = useState(true)
  const [dashBoardData,setdashBoardData] = useState({
    totalBokking:0,
    totalRevenuew:0,
    ActiveShow:[],
    totalUser:0
  })
  const TotalDashBoadCards = [
  {title:"Total Bookings",value:dashBoardData.totalBookings || "0", icons:ChartLineIcon},
  {title:"Total Revenue",value:dashBoardData.totalRevenue || "0", icons:IndianRupeeIcon},
  {title:"Active Show",value:dummyDashboardData.activeShows.length || "0", icons:PlayCircleIcon},
  {title:"total User",value:dashBoardData.totalUser || "0", icons:UsersIcon},


  ]

  const fetchDashBoadData = async ()=>{
    setdashBoardData(dummyDashboardData)
    console.log(dashBoardData)
    setlaod(false)
  }

  useEffect(()=>{
    fetchDashBoadData()
  },[])
  return !loading ? (
    <div className=''>
     <Text  text2="Dashboad"/>
    <div className='relative flex flex-wrap gap-4 mt-6'>
      <BlurCircle top='-100px' left='0'/>
      <div className='flex flex-wrap gap-4 w-full'>
          {
            TotalDashBoadCards.map((items ,index)=>(
              <div key={index} className='flex items-center justify-between px-4 py-3 bg-primary/30 border border-primary/20 rounded-md max-w-50 w-full'>
                     <div>
                      <h1>{items.title}</h1>
                      <h1>{items.value}</h1>
                      <p></p>
                     </div>
                     <items.icons className='w-6 h-6'/>
                </div>
            ))
          }
      </div>
    </div>

    <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5'>
        {dummyDashboardData.activeShows.map((movies) => (
          <div
            key={movies.movie._id}
            className='flex flex-col justify-between p-4 bg-gray-800 rounded-2xl hover:-translate-y-2 transition duration-300'
          >
            <img
              src={movies.movie.backdrop_path}
              alt=""
              onClick={() => {
                navigate(`/MoviesDetails/${movies._id}`);
                scrollTo(0, 0);
              }}
              className='rounded-lg h-48 sm:h-52 w-full object-cover cursor-pointer'
            />
    
            <p className='font-semibold mt-3 text-lg text-white'>{movies.movie.title}</p>
            <p className='font-semibold mt-3 text-lg text-white'>{currency} {movies.showPrice}</p>
          
            <div className='flex i justify-between mt-4 flex-col'>
            
              <p className='flex items-center gap-2 text-white'>
                <StarIcon className='w-4 h-4 text-primary fill-primary' />
                {movies.movie.vote_average.toFixed(1)}
              </p>
              <p className='font-semibold mt-3 text-[15px] text-gray-200'>{DateFormate(movies.showDateTime)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ):<Loading/>
}

export default Dashboad
