import React from 'react'
import Recorder from '../../../components/Dashboard/Recorder'
import Topbar from '@/components/Dashboard/Topbar'

const page = () => {
    return (
        <div className='min-h-full bg-[#222331]'>
            <Topbar />
           <Recorder />
        </div>
    )
}

export default page