import React from 'react'
import Navbar from '@/components/Navbar'
import ForgetPassword from '../../components/Login/ForgetPassword'

const page = () => {
  return (
    <main className='max-w-full min-h-full bg-[#191F29]'>
        <Navbar />
        <ForgetPassword />
    </main>
  )
}

export default page