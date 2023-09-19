import React from 'react'
import dynamic from 'next/dynamic'
const ThankYou = dynamic(() => import('../../components/ThankYou'), {
    ssr: false,
})

const page = ({ params, searchParams }) => {
    console.log('Search params', searchParams);
    return (
        <>
            <ThankYou
                sessionId={searchParams.session_id}
            />
        </>
    )
}

export default page