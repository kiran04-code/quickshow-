import React, { useState } from 'react'
import BlurCircle from './Reused'
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import {toast} from "react-hot-toast"
import { useNavigate, useParams } from 'react-router-dom'
const DateSelted = ({ dataTime, ids }) => {
    const navigate = useNavigate()
    const [selted,setselted] = useState(null)
    const {id} = useParams()
    const onBookHandler = ()=>{
        if(!selted){
            return toast("Please Seltect The Date")
        }
        else{
       navigate(`/Movies/${id}/${selted}`)
        }
    }
  return (
    <div className='pt-20 px-4' id={ids}>
      <div className='relative p-6 sm:p-8 bg-primary/10 border border-primary/20 rounded-2xl overflow-hidden'>

        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" right="0px" />

        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className='flex justify-between items-center flex-wrap gap-4'>
            <h2 className='text-xl font-bold text-white'>Choose Date</h2>

            <button onClick={onBookHandler} className='bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-primary/90 transition w-full sm:w-auto'>
              Book Now
            </button>
          </div>

          {/* Date Selector */}
          <div className='flex items-center gap-2 overflow-x-auto'>
            <button className="p-2 rounded-full hover:bg-primary/20 transition shrink-0">
              <ChevronLeftIcon width={24} />
            </button>

            <div className='flex gap-3'>
              {Object.keys(dataTime).map((date) => (
                <button
                  key={date}
                  onClick={()=>setselted(date)}
                  className={`flex flex-col items-center text-white justify-center h-16 w-16  border border-gray-200 rounded-xl shadow-sm hover:bg-primary transition shrink-0 ${selted === date ? "bg-primary":"bg-primary/10 "}`}
                >
                  <span className='font-bold text-lg text-white'>
                    {new Date(date).getDate()}
                  </span>
                  <span className='text-xs text-white'>
                    {new Date(date).toLocaleDateString("en-US", { month: "short" })}
                  </span>
                </button>
              ))}
            </div>

            <button className="p-2 rounded-full hover:bg-primary/20 transition shrink-0">
              <ChevronRightIcon width={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DateSelted
