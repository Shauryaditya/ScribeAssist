import React from 'react'
import { BASE_URL } from '@/constant'
import getToken from '@/hook/getToken'
const UpgradeConfirmationModal = ({ data, subscriptionId, onClose }) => {
    const handleClose = (e) => {
        const { id } = e.target
        if (id === 'container') {
            onClose()
        }
    }

    const handleUpgrade = async () => {
        const { plan_id, plan_key } = data
        const subscription_id = subscriptionId
        const token = getToken()
        const apiUrl = `${BASE_URL}/api/upgrade-subscription`
        console.log(apiUrl);
        const requestBody = {
            subscription_id: subscription_id,
            plan_id: plan_id,
            plan_key: plan_key

        }
        console.log(requestBody);
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(requestBody)
            })
            if (response.ok) {
                onClose()
            }
            const data = await response.json()
            console.log(data)
        } catch (err) {
            console.error('Error', err);
        }
    }
    return (
        <div
            id='container'
            onClick={(e) => handleClose(e)}
            className='fixed z-50 inset-0 bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center'>
            <div className='w-2/5 rounded bg-white '>
                <div className={` items-center justify-center  flex flex-col`}>
                    <div className='font-medium text-gray-900  text-base mt-7'>Are you sure you want to Upgrade</div>

                    <div className='flex gap-x-5 my-7'>
                        <button onClick={() => onClose()} className='py-2 px-14 bg-white text-gray-900 rounded-full border border-solid border-gray-900'>No</button>
                        <button onClick={() => handleUpgrade()} className='py-2 px-14 bg-green-600 text-white rounded-full'>Yes</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UpgradeConfirmationModal