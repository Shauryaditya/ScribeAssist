'use client'
import React from 'react'
import NotesandInstructions from '../../../components/Dashboard/NotesandInstructions'
import Topbar from '@/components/Dashboard/Topbar'

const page = () => {
    return (
        <div className='min-h-full bg-[#222331] overflow-y-scroll no-scrollbar'>
            <Topbar/>
            <NotesandInstructions />
        </div>
    )
}

export default page