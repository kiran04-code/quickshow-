import React from 'react'
import { assets } from '../../../assets/assets'

const Navbar = () => {
  return (
    <div className='w-full h-25 px-15 py-15 border-b-3 border-primary/25'>
      <img src={assets.logo} alt="" />
    </div>
  )
}

export default Navbar
