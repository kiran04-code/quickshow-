import React, { useEffect, useState } from 'react'
import Text from './components/text'
import Loading from '../../components/Loading'
import { dummyBookingData } from '../../assets/assets'
import DateFormate from '../../lib/DateFormate'

const ListBooking = () => {
  const [loading,setLoading] = useState(true)
  const [show,setShow] = useState({})
  const currancy = import.meta.env.VITE_CURRECY
  const getData = async()=>{
    try {
      setShow(dummyBookingData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
  getData()
  },[])
  return !loading ? (
    <div>
       <div className=''>
      <Text text2 ="ListBooking"/>
      <div className='max-w-4xl mt-6 overflow-x-auto'>
          <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
            <thead className=''>
            <tr className='bg-primary/20 text-left text-white'>
              <th className='p-2 font-medium pl-5 '>User Name</th>
              <th className='p-2 font-medium pl-5 '>Movies Name</th>
              <th className='p-2 font-medium '>Show Time</th>
              <th className='p-2 font-medium '>Seats</th>
              <th className='p-2 font-medium '>Amount</th>
            </tr>
          </thead>
          <tbody>
              {
              show.map((ites,index)=>(
                  <tr className='border-b border-primary/10 bg-primary/5 even:bg-primary/10'>
                     <td className='p-2 min-w-45 pl-5'>{ites.user.name}</td>
                     <td className='p-2 min-w-45 pl-5'>{ites.show.movie.title}</td>
                     <td className='p-2 '>{DateFormate(ites.show.showDateTime)}</td>
                     <td className='p-2 '>{Object.keys(ites.bookedSeats).map(seats=>ites.bookedSeats[seats]).join(",")}</td>
                     <td className='p-2 '>{currancy} {ites.amount}</td>
                  </tr>
              ))
            }

          </tbody>
          </table>
      </div>
    </div>
    </div>
  ):<div><Loading/></div>
}

export default ListBooking
