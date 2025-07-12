import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import { useState } from 'react'
import Loading from './Loading'

const Selectday = () => {
    const { date, id } = useParams()
    const navigate = useNavigate()
    const [selectedSeats, setselectedSeats] = useState([])
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
        <div className='flex  flex-col md:flex-row px-6 md:px-16 lg:px-16 py-30 md:pt-50'>
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

export default Selectday
