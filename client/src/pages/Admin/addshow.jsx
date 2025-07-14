import React, { useEffect, useState } from 'react'
import Text from './components/text'
import Loading from '../../components/Loading'
import { dummyShowsData } from '../../assets/assets'
import { BackpackIcon, RemoveFormatting, StarIcon, Delete } from 'lucide-react'
import ConvertInK from '../../lib/K'

const AddShow = () => {
  const currancy = import.meta.env.VITE_CURRECY
  const [show, setShow] = useState([])
  const [selectedMoives, setselectedMoives] = useState(null)
  const [dataTimeSelection, setdataTimeSelection] = useState({})
  const [dateTimeInput, setdateTimeInput] = useState("")
  const [showPrice, setShowPrice] = useState("")
  const [loading, setLoading] = useState(true)
  console.log(showPrice)
  const getdataFilms = () => {
    setShow(dummyShowsData)
    setLoading(false)
  }

  const handleDateTimeAdd = () => {
    if (!dateTimeInput) return;
    const [date, time] = dateTimeInput.split("T")
    if (!date || !time) return;
    setdataTimeSelection((prev) => {
      const times = prev[date] || []
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] }
      }
      return prev;
       
    })
  }
  console.log(dataTimeSelection)
  const removeDate = (date,time) => {
   setdataTimeSelection((prev)=>{
    
   })
  }
  useEffect(() => {
    getdataFilms()
  })
  return !loading ? (
    <div>
      <div className=''>
        <Text text2="AddShow" />
        <p className='mt-10 text-2xl font-medium'> Now Playing Movies</p>
        <div className='overflow-x-auto pb-4'>
          <div className='group flex flex-wrap gap-4 mt-4 w-max'>
            {
              show.map((data, index) => (
                <div onClick={() => setselectedMoives(data.id)} key={data.id} className={'relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40 hover:-translate-y-1 transition duration-300 '}>

                  <div>
                    {
                      selectedMoives === data.id ? <input
                        type="checkbox"
                        defaultChecked={true}  // Pre-checked checkbox
                        className="absolute top-2 left-[135px] h-5 w-5 z-50 text-5xl p-4 accent-primary"
                      />

                        : null
                    }
                    <img src={data.poster_path} className='w-full object-cover brightness-90 rounded-2xl border-3 border-primary' />
                  </div>
                  <div className='absolute text-sm flex items-center justify-between p-2 bg-black/70 w-full bottom-17 left-0 '>
                    <p className='flex items-center gap-1 text-gray-400'><StarIcon className='w-4 h-4 text-primary fill-primary' />{data.vote_average.toFixed(1)}</p>
                    <p className='text-gray-300'>{ConvertInK(data.vote_count)} Votes</p>
                  </div>
                  <div>
                    <p>{data.title}</p>
                    <p>{data.release_date}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <label className='block font-medium mb-2 text-xl '> show Price</label>
        <div className='inline-flex items-center  gap-2 border-gray-600 border-3 px-3 py-2 rounded-md'>
          <p className='text-gray-400 text-xl'> {currancy}  </p>
          <input min={0} value={showPrice} onChange={(e) => setShowPrice(e.target.value)} type="text" className='outline-none' />
        </div>
      </div>
      <div className='mt-8'>
        <label className='block font-medium mb-2 text-xl '> Select Date and Time</label>
        <div className='inline-flex items-center  gap-2 border-gray-600 border-3 px-3 py-2 rounded-md'>
          <input value={dateTimeInput} onChange={(e) => setdateTimeInput(e.target.value)} type="datetime-local" className='outline-none' />
          <button onClick={handleDateTimeAdd} className='bg-primary/80 text-xl py-2 px-2 rounded-xl  '>  Add Show </button>
        </div>
        <div className='p-2'>
          <label className='text-sm text-gray-300'>Selected Date-Time</label>
          <p>24/01/2005</p>
          <div className='border-2 border-primary w-30 justify-between mt-2 rounded-[2px] p-2 flex'>
            5.00 pm
            <Delete onClick={removeDate} className='text-primary' />
          </div>
        </div>
      </div>
      <button className='bg-primary text-xl py-2 px-2 rounded-xl  mt-5'>  Add Show </button>
    </div>
  ) : <Loading />
}

export default AddShow
