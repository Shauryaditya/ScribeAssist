import React from 'react'
import Navbar from '@/components/Navbar'
import ChangePassword from '../../components/Login/ChangePassword'

const page = () => {
  return (
    <main className='max-w-full min-h-full bg-[#191F29]'>
        <Navbar />
       <ChangePassword />
    </main>
  )
}

export default page