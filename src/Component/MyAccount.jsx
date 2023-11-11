import React from 'react'
import UpdateProfile from './UpdateProfile'

const MyAccount = () => {
  return (
    <div className='bg-card bg-size1 rounded-[2rem]  bg-color4 m-[0.5rem] shadow-shadow1 px-[20px] py-[30px] '>
      <div className='grid grid-cols-2'>
            <UpdateProfile />
      </div>
    </div>
  )
}

export default MyAccount
