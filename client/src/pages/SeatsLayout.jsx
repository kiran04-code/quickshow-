import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import { useState } from 'react'
import Loading from '../components/Loading'
import { ClockIcon } from 'lucide-react'
import ioTime from '../lib/ioTime'

const SeatsLayout = () => {
    const { date, id } = useParams()
    const navigate = useNavigate()
    const [selectedSeats, setselectedSeats] = useState([])
    const [selectedTime, setsselectedTime] = useState(null)
  console.log(selectedTime)
    const [show, setshow] = useState(null)
    const getshowData = async () => {
        const show = dummyShowsData.find(data => data._id === id)
        console.log(show)
        if (show) {
            setshow({
                movies: show,
                dateTime: dummyDateTimeData
            })
        }

    }
    useEffect(() => {
        getshowData()
    }, [id])
    return show ? (
        <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-16 py-30 md:pt-50'>
          
          <div className=' w-60 bg-primary/10 border-primary/20 rounded-lg py-10 h-max md::sticky md:top-30 '>
           <p className='text-lg px-6  font-bold '>Available Timings</p>
           <div>
            {
              show.dateTime[date].map((data)=>
                <div onClick={()=>setsselectedTime(ioTime(data.time))}  className={`flex  items-center mt-5 gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer  transition hover:bg-primary-dull ${selectedTime === ioTime(data.time) ?"bg-primary":"hover:bg-primary/20"}`}>
                  <ClockIcon/>
                <p>{ioTime(data.time)} </p>
                </div>
              )
            }
           </div>
          </div>

          <div>

          </div>
  <div>

  </div>
        </div>
    ) : <div>
        <div>
            <Loading />
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl'> This Movies is Not Found!</h1>
            </div>
        </div>
    </div>
}

export default SeatsLayout
