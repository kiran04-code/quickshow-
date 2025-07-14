import React, { useEffect, useState } from 'react'
import Text from './components/text'
import Loading from '../../components/Loading'
import { dummyShowsData } from '../../assets/assets'
import DateFormate from '../../lib/DateFormate'

const ListShow = () => {
  const currancy = import.meta.env.VITE_CURRECY
  const [show, setShow] = useState([])
  const [loading, setLoading] = useState(true)
  const getdata = () => {
    try {
      setShow([
        {
        movie: dummyShowsData[0],
        showDateTime: "2025-06-20T16:00:00.000Z",
        showPrice: 79,
        occupiedSeats: {
          A1: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
          A2: "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
        }
      },
        {
        movie: dummyShowsData[1],
        showDateTime: "2025-06-20T16:00:00.000Z",
        showPrice: 79,
        occupiedSeats: {
          A1: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
          A2: "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
        }
      }
    ])
      setLoading(false)
    } catch (error) {
  console.log(error)
    }
  }
  useEffect(()=>{
  getdata()
  },[])
  return !loading ? (
    <div>
        <Text text2="ListShow" />
      <div className='max-w-4xl mt-6 overflow-x-auto '>
        <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
          <thead className=''>
            <tr className='bg-primary/20 text-left text-white'>
              <th className='p-2 font-medium pl-5 '>Movie Name</th>
              <th className='p-2 font-medium '>Show Time</th>
              <th className='p-2 font-medium '>Total Booking</th>
              <th className='p-2 font-medium '>Earning</th>
            </tr>
          </thead>
          <tbody className='text-sm font-light'>
            {
              show.map((show,index)=>(
                  <tr className='border-b border-primary/10 bg-primary/5 even:bg-primary/10'>
                     <td className='p-2 min-w-45 pl-5'>{show.movie.title}</td>
                     <td className='p-2 '>{DateFormate(show.showDateTime)}</td>
                     <td className='p-2 '>{Object.keys(show.occupiedSeats).length}</td>
                     <td className='p-2 '>{currancy} {Object.keys(show.occupiedSeats).length*show.showPrice}</td>
                  </tr>
              ))
            }

          </tbody>
        </table>

      </div>
    </div>
  ) : <div>
    <Loading/>
  </div>
}

export default ListShow
