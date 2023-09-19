'use client'
import React, { useState, useEffect } from 'react'
import NotesandInstructions from '../../../components/Dashboard/NotesandInstructions'
import Topbar from '@/components/Dashboard/Topbar'
import getToken from '../../../hook/getToken'
import { redirect } from 'next/navigation'
const Notes = () => {
    const [token, setToken] = useState(null)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const accessToken = getToken()
            setToken(accessToken)
            if (!accessToken) {
                redirect('/login');
            }
        }
    }, []);
    if (token !== null) {
        return (
            <div className='min-h-full bg-[#222331] overflow-y-scroll no-scrollbar'>
                <Topbar />
                <NotesandInstructions />
            </div>
        )
    }
}

export default Notes