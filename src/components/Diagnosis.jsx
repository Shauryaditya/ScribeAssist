import React from 'react'

const Diagnosis = () => {
  return (
    <div className="w-full bg-white ">
        <div className="grid grid-cols-4 p-9 mx-40 gap-20">
            <div className="flex flex-col gap-4 justify-start items-start">
                <p className='text-violet-500 font-[Avenir]'>Diagonostitions</p>
                <p className='text-4xl font-semibold'>39,353</p>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start">
                <p className='text-violet-500 text-start font-[Avenir]'>Patients</p>
                <p className='text-4xl font-semibold'>632,943</p>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start">
                <p className='text-violet-500 text-start font-[Avenir]'>Diagonosis</p>
                <p className='text-4xl font-semibold'>816,639</p>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start">
                <p className='text-violet-500 font-[Avenir]'>Patients</p>
                <p className='text-4xl font-semibold'>28,820</p>
            </div>
        </div>
    </div>
  )
}

export default Diagnosis