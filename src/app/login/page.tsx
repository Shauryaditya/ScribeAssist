
import React from 'react'
import Login from '../../components/Login/Login'
import Navbar from '@/components/Navbar'



const page = () => {
  return (
    <main className='max-w-full min-h-screen bg-[#191F29]'>
        <Navbar />
        <Login />
    </main>
  )
}

export default page