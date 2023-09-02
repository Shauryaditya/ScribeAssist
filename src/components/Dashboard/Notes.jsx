'use client'
import React,{useState} from 'react'

const Notes = () => {
    const heading = [
        {
            id: '8uhtyuujhg6987yhrtyhytg',
            name: 'About'
        },
        {
            id: '8uhty45656uujhg6987yhrtyhytg',
            name: 'Store Details'
        },
        {
            id: '8uhtyrt436987yhrtyhytg',
            name: 'Change Password'
        },
     
    ]
    const [selectedTab, setSelectedTab] = useState(1)

    return (
        <div className='flex gap-14 p-10'>
            
            <div className='grow flex flex-col'>
                <div className='flex justify-between bg-[#F2F2F7] rounded-lg overflow-hidden'>
                    {
                        heading.map((item, index) => (
                            <div
                                onClick={() => setSelectedTab(index + 1)}
                                key={item.id} className={`w-1/4 h-10 flex justify-center items-center cursor-pointer text-sm ${selectedTab === index + 1 ? 'text-white bg-blue-900' : 'text-gray-500 '}`}>{item.name}</div>
                        ))
                    }
                </div>
                <div className='p-5'>
                    {
                        selectedTab === 2 ?
                            <StoreDetails /> : null
                    }
                    {
                        selectedTab === 1 ?
                            <About /> : null
                    }
                    {
                        selectedTab === 3 ?
                            <ChangePassword /> : null
                    }
                </div>
            </div>
        </div>
    )
}

  

export default Notes