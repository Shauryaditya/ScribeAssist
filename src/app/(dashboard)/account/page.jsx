'use client'
import React, { useEffect, useState } from 'react'
import Topbar from '../../../components/Dashboard/Topbar'
import Account from '../../../components/Dashboard/Account'
import getToken from '../../../hook/getToken'
import { redirect } from 'next/navigation'
const AccountInfo = () => {
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
            <div className=' min-h-full bg-[#222331]'>
                <Topbar />
                <Account />
            </div>
        )
    }

}

export default AccountInfo