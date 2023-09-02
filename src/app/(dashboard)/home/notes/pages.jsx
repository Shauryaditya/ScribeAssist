import React from 'react'
import Notes from '../../../../components/Dashboard/Notes'
import Topbar from '@/components/Dashboard/Topbar'

const page = () => {
    return (
        <div className='min-h-full bg-[#222331]'>
            <Topbar/>
        <Notes />
        </div>
    )
}

export default page