'use client'
import React, { useState } from 'react'
import UpgradeModal from './UpgradeModal'
const UpgradeButton = () => {
    const [isClicked, setIsClicked] = useState()

    return (
        <>
            <button
                onClick={() => setIsClicked(true)}
                className='text-[#8167E6] bg-white rounded-lg px-4 py-2 text-xs'>Upgrade
            </button>
            {
                isClicked &&
                <UpgradeModal
                    isVisible={isClicked}
                    onClose={setIsClicked}
                />
            }
        </>
    )
}

export default UpgradeButton