import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
const dashboardLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div className='flex flex-row'>
        <div className='w-80'>
            <Sidebar />
        </div>
        <div className='grow bg-[#222331]'>
            {children}
        </div>
    </div>
  )
}

export default dashboardLayout;