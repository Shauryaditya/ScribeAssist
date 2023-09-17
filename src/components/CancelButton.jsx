'use client'
import React, { useState } from 'react'
import CancelModal from './CancelModal'
const CancelButton = () => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <>
            <button
                onClick={() => setIsClicked(true)}
                className='text-white bg-violet-500 rounded-lg px-4 py-2 text-xs'>Cancel
            </button>
            {
                isClicked &&
                <CancelModal
                    visible={isClicked}
                    onClose={setIsClicked}
                />
            }
        </>
    )
}

export default CancelButton