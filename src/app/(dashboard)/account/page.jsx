import React from 'react'

import Topbar from '../../../components/Dashboard/Topbar'
import Account from '../../../components/Dashboard/Account'

const page = () => {
    return (
        <div className=' min-h-full bg-[#222331]'>
            <Topbar/>
            <Account />
        </div>
    )
}

export default page