import React, { useState } from 'react'
import { BASE_URL } from '@/constant'
import getToken from '@/hook/getToken'

const CancelModel = ({ visible, onClose, subscription_id }) => {
    // loadin state

    const handleCancel = async () => {
        const url = `${BASE_URL}/api/cancel-subscription`;
        const token = getToken()
        const requestBody = {
            subscription_id: subscription_id
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(requestBody)
        })
        const resData = await response.json()
        if (res.ok) {
            onClose(false)
        }
        console.log(resData);
    }
    const handleClose = (e) => {
        const { id } = e.target
        if (id === 'container') {
            onClose()
        }
    }
    if (!visible) return null
    return (
        <div
            id='container'
            onClick={(e) => handleClose(e)}
            className='fixed inset-0 bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center'>
            <div className='w-2/5 rounded bg-white '>
                <div className={` items-center justify-center  flex flex-col`}>
                    <div className='font-medium text-gray-900  text-base mt-7'>Are you sure you want to cancel</div>
                    <div className='font-medium text-gray-900  text-base'>your current plan ?</div>
                    <div className='flex gap-x-5 my-7'>
                        <button onClick={() => onClose(false)} className='py-2 px-14 bg-white text-gray-900 rounded-full border border-solid border-gray-900'>No</button>
                        <button onClick={() => handleCancel()} className='py-2 px-14 bg-red-600 text-white rounded-full'>Yes</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CancelModel