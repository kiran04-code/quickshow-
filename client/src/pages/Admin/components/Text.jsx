import React from 'react'

const Text = ({text2}) => {
  return (
    <div>
       <h1 className='text-xl md:text-xl font-bold underline decoration-1 underline-offset-4 decoration-primary  text-white mb-2 mt-25'> Admin <span className='text-primary'>{text2}</span></h1>
      
    </div>
  )
}

export default Text
