import React from 'react'
import dynamic from 'next/dynamic'
const ThankYou = dynamic(() => import('../../components/ThankYou'), {
    ssr: false,
})

const page = () => {
    return (
        <>
            <ThankYou />
        </>
    )
}

export default page