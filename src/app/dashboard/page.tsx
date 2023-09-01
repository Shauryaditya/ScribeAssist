
import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'
import Account from '../../components/Dashboard/Topbar'
import Topbar from '../../components/Dashboard/Topbar'

const dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Topbar />
    </div>
  )
}

export default dashboard