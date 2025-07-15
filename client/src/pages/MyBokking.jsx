import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'
import BlurCircle from '../components/Reused'
import timeFirmater from '../lib/time.js';

import DateFormate from '../lib/DateFormate'

const MyBokking = () => {
  const currency = import.meta.env.VITE_CURRECY
  console.log(currency)
  const [Bokking, setBokking] = useState([])
  const [isLoading, setLOading] = useState(true)
  const dataordes = async () => {
    setBokking(dummyBookingData)
    setLOading(false)
  }
  useEffect(() => {
    dataordes()
  }, [])
  return !isLoading ? (

    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]'>
      <BlurCircle top='100px' right='100px' />
      <div>
        <BlurCircle bottom='190px' right='1400px' />
      </div>
      <div>
        <h1 className='text-3xl md:text-4xl font-bold text-white mb-2 mt-25'>My-Booking</h1>
        <div className='w-24 h-1 rounded-xl bg-primary mb-8'>

        </div>
        {
          Bokking.map((data, index) => (
            <div key={index} className='flex flex-col md:flex-row justify-between  bg-primary/8 border-primary/20 border-2 rounded-lg mt-4 p-2 max-w-3xl'>
              <div className='flex flex-col md:flex-row'>
                 <img src={data.show.movie.poster_path} alt="" className='md:max-w-45 aspect-square h-auto object-center object-cover rounded' />
              </div>
              <div className='flex flex-col p-4 gap-2 mt-3'>
                  <p className='font-semibold text-lg'>{data.show.movie.title.toUpperCase()}</p>
                  <p className=' text-gray-400 text-sm '>{timeFirmater(data.show.movie.runtime)}</p>
                  <p className=' text-gray-500 text-sm '>{DateFormate(data.show.showDateTime)}</p>
              </div>
              <div className='flex flex-col md:items-end md:text-right '>
                <div className='flex items-center gap-4'>
                  <p className='text-2xl font-semibold mt-3'>{currency}{data.amount}</p>
                  {!data.isPaid &&  <button className='bg-primary px-4 py-1.5  text-sm rounded-full  font-medium cursor-pointer'> Pay Now</button>}
                </div>
                <div className='flex  gap-2 flex-col'>
                  <p className=' text-gray-400 text-sm '>Total Ticket:{data.bookedSeats.length}</p>
                  <p className=' text-gray-500 text-sm '>  Seat Number:{data.bookedSeats}</p>
                </div>
              </div>
            </div>
          ))
        } 
      </div>
     
    </div>
  ) : (<div><Loading /></div>)
}

export default MyBokking
