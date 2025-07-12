import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
const MoviesDetails = () => {
  const [show,setShow] = useState(null)
  const {id} = useParams()
  const getData = async()=>{
   const show = dummyShowsData.find(data => data._id === id)
   setShow({
    movies:show,
    dataTime:dummyDateTimeData
   })
  }
useEffect(()=>{
   getData()
},[id])
 console.log(show)
   
  return  show ?(
    <div>
      <h1>MoviesDetails {show.movies.title}</h1>
    </div>
  ):<div>
   Loaing....
  </div>
}

export default MoviesDetails
