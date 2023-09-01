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
        <div className='grow'>
            {children}
        </div>
    </div>
  )
}

export default dashboardLayout;