import React, { useState } from 'react'
import Text from './components/text'
import Loading from '../../components/Loading'
const ListShow = () => {
  const [show,setShow] = useState([])
  const [loading,setLoading] = useState(true)
  return loading ? (
    <div>
         <div className=''>
      <Text text2="ListShow"/>
    <h1> ListShow </h1>
    </div>
    </div>
  ):<Loading/>
}

export default ListShow
