import React from 'react'
import Navbar from '@/components/Navbar'
import Register from '../../components/Signup/register'

const page = () => {
  return (
    <main className='max-w-full min-h-full bg-[#191F29]'>
        <Navbar />
        <Register />
    </main>
  )
}

export default page