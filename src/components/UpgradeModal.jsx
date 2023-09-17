'use client'

import React, { useEffect, useState } from 'react'
import UpgradeCard from './UpgradeCard'
import { BASE_URL } from '@/constant'
import getToken from '@/hook/getToken'
import Loading from './Loading'

const UpgradeModal = ({ isVisible, onClose }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [subscriptionId, setSubscriptionId] = useState()
    const [plans, setPlans] = useState()
    const getData = async (url, token) => {
        setIsLoading(true)
        const requestOptions = {
            method: 'GET', // or 'POST', 'PUT', etc., depending on your API
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        };
        const res = await fetch(url, requestOptions)
        if (res.ok) {
            setIsLoading(false)
        }
        else {
            setIsLoading(false)
        }
        const data = res.json()
        return data;
    }
    useEffect(() => {
        const apiUrl = `${BASE_URL}/api/get-upgrade-plan-details`
        const token = getToken()
        getData(apiUrl, token).then(data => {
            console.log('Card-data', data)
            setPlans(data.plan_details)
            setSubscriptionId(data.subscription_id)
        })
    }, [])
    const handleClose = (e) => {
        const { id } = e.target
        if (id === 'container') {
            onClose()
        }
    }
    console.log('subsdata', plans, subscriptionId);

    if (isLoading) {
        return (
            <div className='fixed z-30 inset-0 bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center'>
                <div className=' h-96 flex justify-center items-center'>
                    <Loading className='w-10 h-10' />
                </div>
            </div>
        )
    } else {
        return (
            <>
                <div
                    id='container'
                    onClick={(e) => handleClose(e)}
                    className='fixed inset-0 bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center'>

                    <div className=' w-4/5 grid grid-cols-3 gap-5 '>
                        {
                            plans?.length &&
                            plans?.map((item) => (
                                <UpgradeCard
                                    key={item.plan_key}
                                    data={item}
                                    subscriptionId={subscriptionId}
                                />
                            ))

                        }

                    </div>
                </div>

            </>
        )
    }
}

export default UpgradeModal