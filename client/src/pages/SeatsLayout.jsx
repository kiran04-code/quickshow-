import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import { useState } from 'react'
import Loading from '../components/Loading'
import { ClockIcon } from 'lucide-react'
import ioTime from '../lib/ioTime'
import BlurCircle from '../components/Reused'
import toast from 'react-hot-toast'

const SeatsLayout = () => {
    const { date, id } = useParams()
    const navigate = useNavigate()
    const groupsRow = [["A","B"],["C","D"],["E","F"],["G","H"],["I","J"]]
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
   const handleSeadtfunction = (seatId)=>{
    if(!selectedTime){
      return toast("Please Select the Time First")
    }
    if(!selectedSeats.includes(seatId) && selectedSeats.length>4){
       return toast(" Your Can Only Select 5 Seats")
    }
    setselectedSeats(prv=>prv.includes(seatId) ? prv.filter(seats=>seats != seatId):[...prv,seatId])

   }
    const renserSeats = (row,count=9)=>(
      <div key={row} className='flex gap-2 md:mt-2  '>
        <div>
           { Array.from({length:count}, (_,i)=>{
            const seatId = `${row}${i+1}`;
            return(
              <button onClick={()=>handleSeadtfunction(seatId)} className={`h-8 w-8 md:ml-2 mr-2 mb-2  rounded border border-primary/60 cursor-pointer gap-2 ${selectedSeats.includes(seatId) && "bg-primary text-white"}`}>
              {seatId}
              </button>
            )
           })}
        </div>
      </div>
    )
    useEffect(() => {
        getshowData()
    }, [id])
    return show ? (
        <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-16 py-30 md:pt-50 gap-50 '>
          
          <div className=' w-60 bg-primary/10 border-primary/20 rounded-lg py-10 h-max md::sticky md:top-30 '>
           <p className='text-lg px-6  font-bold '>Available Timings</p>
           <div>
            {
              show.dateTime[date].map((data)=>
                <div onClick={()=>setsselectedTime(ioTime(data.time))}  className={`flex  items-center mt-5 gap-2 px-6 py-4 md:px-6 md:py-2 w-max rounded-r-md cursor-pointer  transition hover:bg-primary-dull ${selectedTime === ioTime(data.time) ?"bg-primary":"hover:bg-primary/20"}`}>
                  <ClockIcon/>
                <p>{ioTime(data.time)} </p>
                </div>
              )
            }
           </div>
          </div>

          <div className='relative flex-1 flex-col flex items-center max-md:mt-16 justify-center '>
              <BlurCircle top="0" right='0'/>
            
              <h1 className='text-2xl font-semibold mb-4'>
                Select Your Seats  </h1>
                <img src={assets.screenImage} alt="" className='' />
                <p className='text-gray-400 text-sm mb-6'>SCREEN SIDE </p>
                <div className='flex- flex-col items-center mt-10 text-xs text-gray-300 '>
                   <div className=''>
                    {groupsRow[0].map(row=>renserSeats(row)) }
                   </div>
                </div>
                <div className='grid grid-cols-2 gap-11'>
                 {
                  groupsRow.slice(1).map((data,index)=>
                   <div key={index} className='text-gray-300 text-xs mt-8'>
                    {data.map(row=>renserSeats(row)) }
                    </div>
                  )
                 }
                </div>
                 <button onClick={()=>{navigate("/MyBokking");scrollTo(0,0)}} className='bg-primary  px-5 py-3 mt-40 rounded-full'> Process To CheckOut</button>
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
