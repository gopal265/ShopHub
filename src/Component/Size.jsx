import React from 'react'

const Size = ({size}) => {
  return (
    <div className='w-[80px] h-[35px] p-[10px] shadow-shadow2 rounded-xl  bg-transparent flex justify-center items-center'>
      <div className='text-[15px] font-semibold flex justify-center items-center'>
        {size}
      </div>
    </div>
  )
}

export default Size
